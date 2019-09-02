import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  QueryList,
  HostListener
} from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import scrollama from "scrollama";
import { DriftzoomDirective } from "src/app/directives/driftzoom.directive";

@Component({
  selector: "app-scroller",
  templateUrl: "./scroller.component.html",
  styleUrls: ["./scroller.component.scss"]
})
export class ScrollerComponent implements OnInit, AfterViewInit {
  // this observable is emits true whenever the viewport is <959px
  isMobile$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(map(result => result.matches));

  @ViewChild("scrollGraphic", { static: true }) scrollGraphicRef: ElementRef;
  @ViewChildren("step") steps: any;
  @ViewChildren(DriftzoomDirective) images: any;
  stepRefs: any[];
  imageRefs: any[];

  // listener for window resize. use to redraw scroller
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    console.log(event.target.innerWidth, event.target.innerHeight);
  }

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.buildRefArrays();
    this.initScrollama();
  }

  /*
    map over the QueryLists and return an array of nativeElements
  */
  buildRefArrays() {
    this.stepRefs = this.steps._results.map(el => el.nativeElement);
    this.imageRefs = this.images._results.map(
      directive => directive.el.nativeElement
    );
  }

  /*
    setup scroller and define utility functions
  */
  initScrollama() {
    const scroller = scrollama();
    scroller
      .setup({
        step: this.stepRefs
      })
      .onStepEnter(response => {
        const { element, index, direction } = response;

        // make next step active
        this.stepRefs[index].classList.add("is-active");

        // make next image(s) active, deactivate all others
        this.imageRefs.forEach(el => {
          if (Number(el.dataset.step) === index) {
            el.classList.add("is-active");
          } else {
            el.classList.remove("is-active");
          }
        });
      })
      .onStepExit(response => {
        // { element, index, direction }
        // console.log(response);
      });
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { FiguresService } from "src/app/features/figures/figures.service";
import { Observable, Subject } from "rxjs";
import { switchMap, tap, takeUntil } from "rxjs/operators";
import { Movie } from "../../types";

@Component({
  selector: "app-frequency",
  templateUrl: "./frequency.component.html",
  styleUrls: ["./frequency.component.scss"]
})
export class FrequencyComponent implements OnInit {
  movie: Movie;

  destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private figuresService: FiguresService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: ParamMap) => {
        this.movie = this.figuresService.getMetadata(params.get("id"));
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

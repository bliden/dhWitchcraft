import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-heading",
  templateUrl: "./heading.component.html",
  styleUrls: ["./heading.component.scss"]
})
export class HeadingComponent implements OnInit {
  @Input() classes: string;
  @Input() _title: string;

  constructor() {}

  ngOnInit() {}
}

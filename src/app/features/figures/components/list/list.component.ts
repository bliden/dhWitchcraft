import { Component, OnInit } from "@angular/core";
import { Links } from "../../types";
import { FiguresService } from "../../figures.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  links: Links;

  constructor(private figuresService: FiguresService) {}

  ngOnInit() {
    this.links = this.figuresService.getLinks();
  }
}

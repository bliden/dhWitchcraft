import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FiguresRoutingModule } from "./figures-routing.module";
import { FiguresPageComponent } from "./components/figures/figures.component";

@NgModule({
  declarations: [FiguresPageComponent],
  imports: [CommonModule, FiguresRoutingModule]
})
export class FiguresModule {}

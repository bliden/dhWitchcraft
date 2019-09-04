import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FiguresPageComponent } from "./components/figures/figures.component";

const routes: Routes = [{ path: "", component: FiguresPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiguresRoutingModule {}

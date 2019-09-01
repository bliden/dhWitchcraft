import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./pages/main/main.component";
import { AboutPageComponent } from "./pages/about/about.component";
import { WorksCitedPageComponent } from "./pages/workcited/workscited.component";

const routes: Routes = [
  { path: "about", component: AboutPageComponent },
  { path: "workscited", component: WorksCitedPageComponent },
  { path: "", component: MainPageComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

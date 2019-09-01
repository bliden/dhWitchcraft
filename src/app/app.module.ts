import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainPageComponent } from "./pages/main/main.component";
import { JumboTitleComponent } from "./components/jumbo-title/jumbo-title.component";
import { AboutPageComponent } from "./pages/about/about.component";
import { WorksCitedPageComponent } from "./pages/workcited/workscited.component";
import { WitchesGenresCyclesComponent } from "./components/witchesgenrescycles/witchesgenrescycles.component";
import { ProjectsOnFilmComponent } from "./components/projectsonfilm/projectsonfilm.component";
import { ScrollerComponent } from "./components/scroller/scroller.component";
import { WitchingHourComponent } from "./components/witchinghour/witchinghour.component";
import { AcknowledgementsComponent } from "./components/acknowledgements/acknowledgements.component";
import { TippyDirective } from './directives/tippy.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    JumboTitleComponent,
    AboutPageComponent,
    WorksCitedPageComponent,
    WitchesGenresCyclesComponent,
    ProjectsOnFilmComponent,
    ScrollerComponent,
    WitchingHourComponent,
    AcknowledgementsComponent,
    TippyDirective
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

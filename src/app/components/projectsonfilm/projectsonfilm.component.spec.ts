import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectsOnFilmComponent } from "./projectsonfilm.component";

describe("ProjectsOnFilmComponent", () => {
  let component: ProjectsOnFilmComponent;
  let fixture: ComponentFixture<ProjectsOnFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsOnFilmComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsOnFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

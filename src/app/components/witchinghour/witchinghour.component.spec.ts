import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WitchingHourComponent } from "./witchinghour.component";

describe("WitchingHourComponent", () => {
  let component: WitchingHourComponent;
  let fixture: ComponentFixture<WitchingHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WitchingHourComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitchingHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

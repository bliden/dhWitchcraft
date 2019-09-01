import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchesgenrescyclesComponent } from './witchesgenrescycles.component';

describe('WitchesgenrescyclesComponent', () => {
  let component: WitchesgenrescyclesComponent;
  let fixture: ComponentFixture<WitchesgenrescyclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitchesgenrescyclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitchesgenrescyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

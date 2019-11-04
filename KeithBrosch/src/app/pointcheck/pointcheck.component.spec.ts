import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointcheckComponent } from './pointcheck.component';

describe('PointcheckComponent', () => {
  let component: PointcheckComponent;
  let fixture: ComponentFixture<PointcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

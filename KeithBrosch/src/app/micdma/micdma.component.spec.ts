import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MICDMAComponent } from './micdma.component';

describe('MICDMAComponent', () => {
  let component: MICDMAComponent;
  let fixture: ComponentFixture<MICDMAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MICDMAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MICDMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

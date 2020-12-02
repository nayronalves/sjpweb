import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociadoAlertComponent } from './associado-alert.component';

describe('AssociadoAlertComponent', () => {
  let component: AssociadoAlertComponent;
  let fixture: ComponentFixture<AssociadoAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociadoAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociadoAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

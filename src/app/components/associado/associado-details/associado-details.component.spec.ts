import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociadoDetailsComponent } from './associado-details.component';

describe('AssociadoDetailsComponent', () => {
  let component: AssociadoDetailsComponent;
  let fixture: ComponentFixture<AssociadoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociadoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociadoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

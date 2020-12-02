import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociadoNewComponent } from './associado-new.component';

describe('AssociadoNewComponent', () => {
  let component: AssociadoNewComponent;
  let fixture: ComponentFixture<AssociadoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociadoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociadoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

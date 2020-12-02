import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesysComponent } from './homesys.component';

describe('HomesysComponent', () => {
  let component: HomesysComponent;
  let fixture: ComponentFixture<HomesysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

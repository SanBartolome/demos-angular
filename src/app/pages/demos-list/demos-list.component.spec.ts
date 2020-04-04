import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosListComponent } from './demos-list.component';

describe('DemosListComponent', () => {
  let component: DemosListComponent;
  let fixture: ComponentFixture<DemosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

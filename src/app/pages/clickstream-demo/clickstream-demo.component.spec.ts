import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickstreamDemoComponent } from './clickstream-demo.component';

describe('ClickstreamDemoComponent', () => {
  let component: ClickstreamDemoComponent;
  let fixture: ComponentFixture<ClickstreamDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickstreamDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickstreamDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRouteFoundComponent } from './no-route-found.component';

describe('NoRouteFoundComponent', () => {
  let component: NoRouteFoundComponent;
  let fixture: ComponentFixture<NoRouteFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRouteFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRouteFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

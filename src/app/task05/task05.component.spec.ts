import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task05Component } from './task05.component';

describe('Task05Component', () => {
  let component: Task05Component;
  let fixture: ComponentFixture<Task05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

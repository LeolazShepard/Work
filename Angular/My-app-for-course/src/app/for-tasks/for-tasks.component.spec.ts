import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTasksComponent } from './for-tasks.component';

describe('ForTasksComponent', () => {
  let component: ForTasksComponent;
  let fixture: ComponentFixture<ForTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

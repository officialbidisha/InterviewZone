import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervieweeAddComponent } from './interviewee-add.component';

describe('IntervieweeAddComponent', () => {
  let component: IntervieweeAddComponent;
  let fixture: ComponentFixture<IntervieweeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervieweeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervieweeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

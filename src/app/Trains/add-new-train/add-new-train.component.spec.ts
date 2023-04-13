import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTrainComponent } from './add-new-train.component';

describe('AddNewTrainComponent', () => {
  let component: AddNewTrainComponent;
  let fixture: ComponentFixture<AddNewTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewTrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

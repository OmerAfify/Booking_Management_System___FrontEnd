import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsTableComponent } from './trains-table.component';

describe('TrainsTableComponent', () => {
  let component: TrainsTableComponent;
  let fixture: ComponentFixture<TrainsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

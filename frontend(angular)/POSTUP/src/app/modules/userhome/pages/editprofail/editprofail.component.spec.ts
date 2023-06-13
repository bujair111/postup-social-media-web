import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofailComponent } from './editprofail.component';

describe('EditprofailComponent', () => {
  let component: EditprofailComponent;
  let fixture: ComponentFixture<EditprofailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprofailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

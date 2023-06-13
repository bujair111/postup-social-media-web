import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UhomeComponent } from './uhome.component';

describe('UhomeComponent', () => {
  let component: UhomeComponent;
  let fixture: ComponentFixture<UhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

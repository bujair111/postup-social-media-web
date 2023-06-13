import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NottificationComponent } from './nottification.component';

describe('NottificationComponent', () => {
  let component: NottificationComponent;
  let fixture: ComponentFixture<NottificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NottificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NottificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

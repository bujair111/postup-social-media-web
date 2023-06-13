import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadingingpageComponent } from './ladingingpage.component';

describe('LadingingpageComponent', () => {
  let component: LadingingpageComponent;
  let fixture: ComponentFixture<LadingingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadingingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LadingingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

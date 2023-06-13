import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfaileComponent } from './profaile.component';

describe('ProfaileComponent', () => {
  let component: ProfaileComponent;
  let fixture: ComponentFixture<ProfaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfaileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerPostComponent } from './follower-post.component';

describe('FollowerPostComponent', () => {
  let component: FollowerPostComponent;
  let fixture: ComponentFixture<FollowerPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowerPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowerPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

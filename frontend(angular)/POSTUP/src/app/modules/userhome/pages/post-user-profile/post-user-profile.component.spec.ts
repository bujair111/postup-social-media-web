import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUserProfileComponent } from './post-user-profile.component';

describe('PostUserProfileComponent', () => {
  let component: PostUserProfileComponent;
  let fixture: ComponentFixture<PostUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostUserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

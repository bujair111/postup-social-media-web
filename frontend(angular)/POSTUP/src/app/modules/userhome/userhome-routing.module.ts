import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome.component';
import { AllpostsComponent } from './pages/allposts/allposts.component';
import { FollowerPostComponent } from './pages/follower-post/follower-post.component';
import { ProfaileComponent } from './pages/profaile/profaile.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NottificationComponent } from './pages/nottification/nottification.component';
import { EditprofailComponent } from './pages/editprofail/editprofail.component';
import { SavedComponent } from './pages/saved/saved.component';
import { TokenGuardGuard } from './guards/token-guard.guard';
import { PostUserProfileComponent } from './pages/post-user-profile/post-user-profile.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [{ path: '', component: UserhomeComponent,
canActivate: [TokenGuardGuard],
  children:[
    {path: 'uhome',component: AllpostsComponent},
    {path: '',component: AllpostsComponent},
    {path: 'followers',component: FollowerPostComponent},
    {path: 'profile',component: ProfaileComponent},
    {path: 'newPost',component: NewPostComponent },
    {path: 'settings', component: SettingsComponent},
    {path: 'notifications',component: NottificationComponent},
    {path: 'editProfile', component: EditprofailComponent},
    {path: 'bookmark',component: SavedComponent},
    {path: 'userProfile',component: PostUserProfileComponent},
    {path: 'viewPost',component: PostComponent},

    
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserhomeRoutingModule { }

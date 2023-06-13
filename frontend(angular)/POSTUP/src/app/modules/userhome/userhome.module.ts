import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserhomeRoutingModule } from './userhome-routing.module';
import { UserhomeComponent } from './userhome.component';
import { NavebarComponent } from './componets/navebar/navebar.component';
import { SaidebarComponent } from './componets/saidebar/saidebar.component';
import { BotbarComponent } from './componets/botbar/botbar.component';
import { AllpostsComponent } from './pages/allposts/allposts.component';
import { UhomeComponent } from './pages/uhome/uhome.component';
import { ProfaileComponent } from './pages/profaile/profaile.component';
import { EditprofailComponent } from './pages/editprofail/editprofail.component';
import { FollowerPostComponent } from './pages/follower-post/follower-post.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { NottificationComponent } from './pages/nottification/nottification.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SavedComponent } from './pages/saved/saved.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostUserProfileComponent } from './pages/post-user-profile/post-user-profile.component';
import { PostComponent } from './pages/post/post.component';


@NgModule({
  declarations: [
    UserhomeComponent,
    NavebarComponent,
    SaidebarComponent,
    BotbarComponent,
    AllpostsComponent,
    UhomeComponent,
    ProfaileComponent,
    EditprofailComponent,
    FollowerPostComponent,
    NewPostComponent,
    NottificationComponent,
    SettingsComponent,
    SavedComponent,
    PostUserProfileComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    UserhomeRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class UserhomeModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SignUpFlowComponent } from './pages/sign-up-flow/sign-up-flow.component';
import { BrowseSectionComponent } from './pages/browse-section/browse-section.component';
import { ExploreSectionComponent } from './pages/explore-section/explore-section.component';
import { ProfileSectionComponent } from './pages/profile-section/profile-section.component';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';
import { ScenesSectionComponent } from './pages/scenes-section/scenes-section.component';
import { CreateSectionComponent } from './pages/create-section/create-section.component';
import { SearchSectionComponent } from './pages/search-section/search-section.component';
import { SpeechSectionComponent } from './pages/speech-section/speech-section.component';
import { PlaylistSectionComponent } from './pages/playlist-section/playlist-section.component';
import { LoginSectionComponent } from './pages/login-section/login-section.component';
import { RegisterSectionComponent } from './pages/register-section/register-section.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'sign-up-flow',
    component: SignUpFlowComponent
  },
  {
    path: 'log-in',
    component: LoginSectionComponent
  },
  {
    path: 'register',
    component: RegisterSectionComponent
  },
  {
    path: 'app',
    redirectTo: 'app/browse',
    pathMatch: 'full'
  },
  {
    path: 'app',
    children: [
      {
        path: 'browse',
        component: BrowseSectionComponent
      },
      {
        path: 'scenes',
        component: ScenesSectionComponent
      },
      {
        path: 'explore',
        component: ExploreSectionComponent
      },
      {
        path: 'create',
        component: CreateSectionComponent
      },
      {
        path: 'profile',
        component: ProfileSectionComponent
      },
      {
        path: 'search',
        component: SearchSectionComponent
      },
      {
        path: 'speech/:id',
        component: SpeechSectionComponent
      },
      {
        path: 'playlist/:id',
        component: PlaylistSectionComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFound404Component
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
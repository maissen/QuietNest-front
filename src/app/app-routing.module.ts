import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SignUpFlowComponent } from './pages/sign-up-flow/sign-up-flow.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { BrowseSectionComponent } from './pages/browse-section/browse-section.component';
import { ExploreSectionComponent } from './pages/explore-section/explore-section.component';
import { ProfileSectionComponent } from './pages/profile-section/profile-section.component';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';
import { ScenesSectionComponent } from './pages/scenes-section/scenes-section.component';
import { CreateSectionComponent } from './pages/create-section/create-section.component';
import { SearchSectionComponent } from './pages/search-section/search-section.component';

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
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
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
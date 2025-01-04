import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SignUpFlowComponent } from './pages/sign-up-flow/sign-up-flow.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BrowseSectionComponent } from './pages/homepage/pages/browse-section/browse-section.component';
import { ExploreSectionComponent } from './pages/homepage/pages/explore-section/explore-section.component';
import { ProfileSectionComponent } from './pages/homepage/pages/profile-section/profile-section.component';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';
import { ScenesComponent } from './shared/scenes/scenes.component';

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
    path: 'home',
    redirectTo: 'home/browse',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent,
    children: [
      {
        path: 'browse',
        component: BrowseSectionComponent,
        children: [
          {
            path: 'scenes',
            component: ScenesComponent
          }
        ]
      },
      {
        path: 'explore',
        component: ExploreSectionComponent
      },
      {
        path: 'profile',
        component: ProfileSectionComponent
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

// {
//     path: 'home',
//     redirectTo: 'home/browse',
//     pathMatch: 'full'
// },
// {
//     path: 'home',
//     children: [
//         {
//             path: 'browse',
//             component: BrowseSectionComponent
//         },
//         {
//             path: 'explore',
//             component: ExploreSectionComponent
//         },
//         {
//             path: 'profile',
//             component: ProfileSectionComponent
//         },
//     ]
// },  
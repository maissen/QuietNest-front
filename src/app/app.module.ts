import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarContentComponent } from './shared/navbar-content/navbar-content.component';
import { NavbarSmallScreenContainerComponent } from './shared/navbar-small-screen-container/navbar-small-screen-container.component';
import { NavbarWideScreenContainerComponent } from './shared/navbar-wide-screen-container/navbar-wide-screen-container.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ExploreSectionComponent } from './pages/homepage/pages/explore-section/explore-section.component';
import { BrowseSectionComponent } from './pages/homepage/pages/browse-section/browse-section.component';
import { HomeSectionComponent } from './pages/homepage/pages/home-section/home-section.component';
import { ProfileSectionComponent } from './pages/homepage/pages/profile-section/profile-section.component';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SignUpFlowComponent } from './pages/sign-up-flow/sign-up-flow.component';
import { RouterLink } from '@angular/router';
import { CarouselEndingMessageComponent } from './pages/sign-up-flow/components/carousel-ending-message/carousel-ending-message.component';
import { QuestionsCarouselComponent } from './pages/sign-up-flow/components/questions-carousel/questions-carousel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarContentComponent,
    NavbarSmallScreenContainerComponent,
    NavbarWideScreenContainerComponent,
    HomepageComponent,
    ExploreSectionComponent,
    BrowseSectionComponent,
    HomeSectionComponent,
    ProfileSectionComponent,
    NotFound404Component,
    SignInComponent,
    SignUpComponent,
    WelcomeComponent,
    SignUpFlowComponent,
    CarouselEndingMessageComponent,
    QuestionsCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

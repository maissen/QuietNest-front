import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreSectionComponent } from './pages/explore-section/explore-section.component';
import { BrowseSectionComponent } from './pages/browse-section/browse-section.component';
import { HomeSectionComponent } from './pages/home-section/home-section.component';
import { ProfileSectionComponent } from './pages/profile-section/profile-section.component';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SignUpFlowComponent } from './pages/sign-up-flow/sign-up-flow.component';
import { RouterLink } from '@angular/router';
import { CarouselEndingMessageComponent } from './pages/sign-up-flow/components/carousel-ending-message/carousel-ending-message.component';
import { QuestionsCarouselComponent } from './pages/sign-up-flow/components/questions-carousel/questions-carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { AudioItemSquareComponent } from './shared/audio-item-square/audio-item-square.component';
import { AudioItemRectangleComponent } from './shared/audio-item-rectangle/audio-item-rectangle.component';
import { CarouselRectangleComponent } from './shared/items-carousels/carousel-rectangle/carousel-rectangle.component';
import { CarouselSquareComponent } from './shared/items-carousels/carousel-square/carousel-square.component';
import { RecommendedForYouComponent } from './shared/items-carousels/recommended-for-you/recommended-for-you.component';
import { RecommendedForYouItemComponent } from './shared/recommended-for-you-item/recommended-for-you-item.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ScenesSectionComponent } from './pages/scenes-section/scenes-section.component';
import { CreateSectionComponent } from './pages/create-section/create-section.component';
import { AudioItemComponent } from './pages/create-section/components/audio-item/audio-item.component';
import { ExploreByCategoryComponent } from './pages/explore-section/components/explore-by-category/explore-by-category.component';
import { ExploreByTimeComponent } from './pages/explore-section/components/explore-by-time/explore-by-time.component';
import { SearchSectionComponent } from './pages/search-section/search-section.component';
import { PlayingAudioBannerComponent } from './shared/playing-audio-banner/playing-audio-banner.component';
import { BgVideoComponent } from './shared/bg-video/bg-video.component';
import { BottomSheetComponent } from './shared/navbar/components/bottom-sheet/bottom-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
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
    AudioItemSquareComponent,
    AudioItemRectangleComponent,
    CarouselRectangleComponent,
    CarouselSquareComponent,
    RecommendedForYouComponent,
    RecommendedForYouItemComponent,
    NavbarComponent,
    ScenesSectionComponent,
    CreateSectionComponent,
    AudioItemComponent,
    ExploreByCategoryComponent,
    ExploreByTimeComponent,
    SearchSectionComponent,
    PlayingAudioBannerComponent,
    BgVideoComponent,
    BottomSheetComponent
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

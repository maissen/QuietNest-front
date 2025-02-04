import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreSectionComponent } from './pages/explore-section/explore-section.component';
import { BrowseSectionComponent } from './pages/browse-section/browse-section.component';
import { HomeSectionComponent } from './pages/home-section/home-section.component';
import { ProfileSectionComponent } from './pages/profile-section/profile-section.component';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AudioItemRectangleComponent } from './shared/audio-item-rectangle/audio-item-rectangle.component';
import { CarouselRectangleComponent } from './shared/items-carousels/carousel-rectangle/carousel-rectangle.component';
import { RecommendedForYouComponent } from './shared/items-carousels/recommended-for-you/recommended-for-you.component';
import { RecommendedForYouItemComponent } from './shared/recommended-for-you-item/recommended-for-you-item.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ScenesSectionComponent } from './pages/scenes-section/scenes-section.component';
import { CreateSectionComponent } from './pages/create-section/create-section.component';
import { AudioItemComponent } from './pages/create-section/components/audio-item/audio-item.component';
import { ExploreByCategoryComponent } from './pages/explore-section/components/explore-by-category/explore-by-category.component';
import { ExploreByTimeComponent } from './pages/explore-section/components/explore-by-time/explore-by-time.component';
import { SearchSectionComponent } from './pages/search-section/search-section.component';
import { BgVideoComponent } from './shared/bg-video/bg-video.component';
import { PlayingSpeechBannerComponent } from './shared/playing-speech-banner/playing-speech-banner.component';
import { SpeechSectionComponent } from './pages/speech-section/speech-section.component';
import { PlaylistSectionComponent } from './pages/playlist-section/playlist-section.component';
import { FormsModule } from '@angular/forms';
import { BtnRectangleComponent } from './shared/buttons/btn-rectangle/btn-rectangle.component';
import { BtnRoundComponent } from './shared/buttons/btn-round/btn-round.component';
import { BtnRoundSmallComponent } from './shared/buttons/btn-round-small/btn-round-small.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BottomSheetComponent } from './shared/bottom-sheet/bottom-sheet.component';
import { TimerSectionComponent } from './pages/timer-section/timer-section.component';
import { CtaBtnReviewComponent } from './shared/cta-btn-review/cta-btn-review.component';
import { CarouselRectanglePlaylistComponent } from './shared/items-carousels/carousel-rectangle-playlist/carousel-rectangle-playlist.component';
import { PlaylistItemRectangleComponent } from './shared/playlist-item-rectangle/playlist-item-rectangle.component';
import { PlayingSpeechControlComponent } from './shared/playing-speech-control/playing-speech-control.component';
import { NarratorProfileComponent } from './shared/narrator-profile/narrator-profile.component';
import { CarouselSquareNarratorsComponent } from './shared/items-carousels/carousel-square-narrators/carousel-square-narrators.component';
import { NarratorItemSquareComponent } from './shared/narrator-item-square/narrator-item-square.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { ToastComponent } from './shared/toast/toast.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { WelcomePageNavbarComponent } from './pages/welcome/components/welcome-page-navbar/welcome-page-navbar.component';
import { WelcomePageAccordionComponent } from './pages/welcome/components/welcome-page-accordion/welcome-page-accordion.component';
import { WelcomePageContactComponent } from './pages/welcome/components/welcome-page-contact/welcome-page-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ExploreSectionComponent,
    BrowseSectionComponent,
    HomeSectionComponent,
    ProfileSectionComponent,
    NotFound404Component,
    WelcomeComponent,
    AudioItemRectangleComponent,
    CarouselRectangleComponent,
    RecommendedForYouComponent,
    RecommendedForYouItemComponent,
    NavbarComponent,
    ScenesSectionComponent,
    CreateSectionComponent,
    AudioItemComponent,
    ExploreByCategoryComponent,
    ExploreByTimeComponent,
    SearchSectionComponent,
    BgVideoComponent,
    PlayingSpeechBannerComponent,
    SpeechSectionComponent,
    PlaylistSectionComponent,
    BtnRectangleComponent,
    BtnRoundComponent,
    BtnRoundSmallComponent,
    LoginPageComponent,
    BottomSheetComponent,
    TimerSectionComponent,
    CtaBtnReviewComponent,
    CarouselRectanglePlaylistComponent,
    PlaylistItemRectangleComponent,
    PlayingSpeechControlComponent,
    NarratorProfileComponent,
    CarouselSquareNarratorsComponent,
    NarratorItemSquareComponent,
    ToastComponent,
    RegisterPageComponent,
    WelcomePageNavbarComponent,
    WelcomePageAccordionComponent,
    WelcomePageContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    HttpClientModule,
    FormsModule,
    NgxScannerQrcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

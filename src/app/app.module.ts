import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RecommendedCardComponent } from './components/home/recommended-card/recommended-card.component';
import { JourneyCardComponent } from './components/home/journey-card/journey-card.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecommendedCardComponent,
    JourneyCardComponent,
    BottomNavComponent,
    SubMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MatchListComponent } from './resources/matches/match-list/match-list.component';
import { MatchDetailComponent } from './resources/matches/match-detail/match-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MatchListComponent,
    MatchDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

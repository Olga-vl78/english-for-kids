import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {CategoryCardComponent} from './components/category-card/category-card.component';
import {ShellComponent} from './components/shell/shell.component';
import {FormsModule} from "@angular/forms";
import {CategoriesPageComponent} from './components/categories-page/categories-page.component';
import {TrainCardComponent} from './components/train-card/train-card.component';
import {PlayCardComponent} from './components/play-card/play-card.component';
import {StatisticsPageComponent} from './components/statistics-page/statistics-page.component';
import {ResultGameComponent} from './components/result-game/result-game.component';
import {TrainWordsComponent} from './components/train-words/train-words.component';
import {AdminPageComponent} from './components/admin-page/admin-page.component';
import {UserAuthorizationComponent} from './components/user-authorization/user-authorization.component';
import {AdminCardsPageComponent} from './components/admin-cards-page/admin-cards-page.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CategoryCardComponent,
    ShellComponent,
    CategoriesPageComponent,
    TrainCardComponent,
    PlayCardComponent,
    StatisticsPageComponent,
    ResultGameComponent,
    TrainWordsComponent,
    AdminPageComponent,
    UserAuthorizationComponent,
    AdminCardsPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

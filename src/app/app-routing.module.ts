import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCardsPageComponent } from './components/admin-cards-page/admin-cards-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { MainPageComponent } from "./components/main-page/main-page.component";
import { ShellComponent } from "./components/shell/shell.component";
import { StatisticsPageComponent } from './components/statistics-page/statistics-page.component';
import { TrainWordsComponent } from './components/train-words/train-words.component';
import { UserAuthorizationComponent } from './components/user-authorization/user-authorization.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'main',
        component: MainPageComponent
      },
      {
        path: 'categories/:id',
        component: CategoriesPageComponent
      },
      {
        path: 'statistics',
        component: StatisticsPageComponent
      },
      {
        path: 'statistics/train',
        component: TrainWordsComponent
      },
      {
        path: 'authorization',
        component: UserAuthorizationComponent
      },
      {
        path: 'admin/categories',
        component: AdminPageComponent
      },
      {
        path: 'admin/:id/cards',
        component: AdminCardsPageComponent
      },
      {
        path: '**',
        redirectTo: 'main'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

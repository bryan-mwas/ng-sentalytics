import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassifiedTweetsComponent } from './views/classified-tweets/classified-tweets.component';
import { ListTweetsComponent } from './views/list-tweets/list-tweets.component';
import { TweetThemesComponent } from './views/tweet-themes/tweet-themes.component';
import { DashboardComponent } from './views/dashboard/dashboard.component'
// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'tweets',
        component: ListTweetsComponent
      },
      {
        path: 'classified',
        component: ClassifiedTweetsComponent
      },
      {
        path: 'topics',
        component: TweetThemesComponent
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

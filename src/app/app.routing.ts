import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassifiedTweetsComponent } from './classified-tweets/classified-tweets.component';
import { ListTweetsComponent } from './list-tweets/list-tweets.component';
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
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'tweets',
        component: ListTweetsComponent
      },
      {
        path: 'classified',
        component: ClassifiedTweetsComponent
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

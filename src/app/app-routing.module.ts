import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CommentComponent } from './components/comment/comment.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { SearchComponent } from './components/search/search.component';
import { AuthInterceptor } from './auth.interceptor';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
    canActivate: [],
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [],
  },
  {
    path: 'comments',
    component: CommentComponent,
    canActivate: [AngularFireAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

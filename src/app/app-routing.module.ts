import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'subtitle-splitter',
    loadChildren: () => import('./modules/subtitle-splitter/subtitle-splitter.module')
      .then(module => module.SubtitleSplitterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

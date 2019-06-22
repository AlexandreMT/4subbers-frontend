import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListSubtitlePartsComponent} from './list-subtitle-parts/list-subtitle-parts.component';
import {SubtitleSplitterComponent} from './subtitle-splitter.component';
import {SplitSubtitleComponent} from './split-subtitle/split-subtitle.component';

const routes: Routes = [
  {
    path: '',
    component: SubtitleSplitterComponent,
    children: [
      {
        path: 'split',
        component: SplitSubtitleComponent
      },
      {
        path: ':url',
        component: ListSubtitlePartsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [SubtitleSplitterComponent]
})
export class SubtitleSplitterRoutingModule { }

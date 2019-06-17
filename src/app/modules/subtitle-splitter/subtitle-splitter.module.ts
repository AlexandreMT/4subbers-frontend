import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubtitleSplitterRoutingModule } from './subtitle-splitter-routing.module';
import { ListSubtitlePartsComponent } from './list-subtitle-parts/list-subtitle-parts.component';

@NgModule({
  declarations: [ListSubtitlePartsComponent],
  imports: [
    CommonModule,
    SubtitleSplitterRoutingModule
  ]
})
export class SubtitleSplitterModule { }

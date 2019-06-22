import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleSplitterRoutingModule } from './subtitle-splitter-routing.module';
import { ListSubtitlePartsComponent } from './list-subtitle-parts/list-subtitle-parts.component';
import { SplitSubtitleComponent } from './split-subtitle/split-subtitle.component';

@NgModule({
  declarations: [ListSubtitlePartsComponent, SplitSubtitleComponent],
  imports: [
    CommonModule,
    SubtitleSplitterRoutingModule
  ]
})
export class SubtitleSplitterModule { }

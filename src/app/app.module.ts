import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubtitleSplitterComponent } from './modules/subtitle-splitter/subtitle-splitter.component';

@NgModule({
  declarations: [
    AppComponent,
    SubtitleSplitterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

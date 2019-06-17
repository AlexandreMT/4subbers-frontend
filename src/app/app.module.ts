import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubtitleSplitterComponent } from './modules/subtitle-splitter/subtitle-splitter.component';
import {SubtitleSplitterModule} from './modules/subtitle-splitter/subtitle-splitter.module';

@NgModule({
  declarations: [
    AppComponent,
    SubtitleSplitterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubtitleSplitterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

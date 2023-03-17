import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DetectorsListComponent } from './components/detectors-list/detectors-list.component';
import { DetectorFormComponent } from './components/detector-form/detector-form.component';
import { DetectorCardComponent } from './components/detector-card/detector-card.component';
import { LanguageDirective } from './language.directive';

@NgModule({
  declarations: [
    AppComponent,
    DetectorsListComponent,
    DetectorFormComponent,
    DetectorCardComponent,
    LanguageDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

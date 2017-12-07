import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {MatButtonModule,
        MatChipsModule,
        MatInputModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonToggleModule,
        MatIconModule} from '@angular/material';
import { TextInputComponent } from './text-input/text-input.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    TextInputComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

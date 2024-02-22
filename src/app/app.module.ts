import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComboboxModule } from 'projects/ngx-combobox/src/combobox/combobox.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComboboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

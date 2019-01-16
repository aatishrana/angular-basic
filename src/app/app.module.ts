import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CuisineListComponent } from './cuisine-list/cuisine-list.component';
import { CuisineService } from './services/cuisine-service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuisineListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CuisineService],
  bootstrap: [AppComponent]
})
export class AppModule { }

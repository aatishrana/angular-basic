import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CuisineListComponent } from './cuisine-list/cuisine-list.component';
import { CuisineService } from './services/cuisine-service';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: CuisineListComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuisineListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CuisineService],
  bootstrap: [AppComponent]
})
export class AppModule { }

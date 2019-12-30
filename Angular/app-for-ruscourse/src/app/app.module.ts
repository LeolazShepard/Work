import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostFornComponent } from './post-forn/post-forn.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    PostFornComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { ForTasksComponent } from './for-tasks/for-tasks.component';
import { MyPracticeComponent } from './my-practice/my-practice.component';
import { ServerStatusComponent } from './server-status/server-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ForTasksComponent,
    MyPracticeComponent,
    ServerStatusComponent
  ],
  imports: [
  	FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

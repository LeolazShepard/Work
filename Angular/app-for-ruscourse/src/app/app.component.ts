import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-for-ruscourse';
  bckgroundTogle=false;
  color:string;
  show=true;
  arr=[1, 1, 2, 3, 5, 8, 13];
   objs = [
    {title: 'Post 1', author: 'Vladilen', comments: [
        {name: 'Max', text: 'lorem 1'},
        {name: 'Max', text: 'lorem 2'},
        {name: 'Max', text: 'lorem 3'},
      ]},
    {title: 'Post 2', author: 'Vladilen 2', comments: [
        {name: 'Max 2', text: 'lorem 1'},
        {name: 'Max 2', text: 'lorem 2'},
        {name: 'Max 2', text: 'lorem 3'},
      ]}
  ]
}


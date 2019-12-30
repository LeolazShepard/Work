import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-tasks',
  templateUrl: './for-tasks.component.html',
  styleUrls: ['./for-tasks.component.css']
})
export class ForTasksComponent implements OnInit {
	toggle=false;
	log=[];
  constructor() { }

  ngOnInit() {
  }
 showParagraph(){
 	this.toggle=!this.toggle;
 	this.log.push(this.log.length+1);
 }

}

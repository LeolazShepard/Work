import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-practice',
  templateUrl: './my-practice.component.html',
  styleUrls: ['./my-practice.component.css']
})
export class MyPracticeComponent implements OnInit {
	userName:string;
	toggle=false;
  constructor() { }

  ngOnInit() {
  }
  toogleBlockForShowName(){
  	this.toggle=!this.toggle;
  }
saveName(event: Event){
this.userName= (<HTMLInputElement>event.target).value;
  	}
}

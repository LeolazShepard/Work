import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit {
 	serverStatus: string='offline';
 	serverId: number=10;
 		getServerStatus(){
		return this.serverStatus;
	}
  constructor() { 
  this.serverStatus = Math.random() >0.5 ? 'online': 'ofline';}

  ngOnInit() {
  }
 getColor(){
      return this.serverStatus==='online' ? 'green' : 'red';
    }
}

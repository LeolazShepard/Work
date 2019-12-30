import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
	serverCreationStatus="No server was creation!";
	serverName='Test Server ';
  serverCreated=false;
allowNewServer=false;
servers=['Server1', 'Server 2'];
  constructor() { 
    
  	setTimeout( () => { 
  		this.allowNewServer = true; 
  	}, 2000);
  }

  ngOnInit() {}
  	onCreationServer(){
      this.servers.push(this.serverName);
      this.serverCreated=true;
  		this.serverCreationStatus="Server was created! Name is " + this.serverName;
  	}

  	onUpdateServerName(event: Event){
this.serverName= (<HTMLInputElement>event.target).value;
  	}
   
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  tColor="#429861"

  serverId:number=10;
  serverStatus:string="offline";

  allowNewServer:boolean=false;
  serverCreateStats:string = "No server created!!";

  serverName:string="your name";

  serverCreated:boolean=false;


  constructor(){
    setTimeout(() => {
      this.allowNewServer=true;
      this.serverCreateStats="new server can be created!!"      
    }, 2000);
  }

  getServerStatus(){
    return this.serverStatus;
  }

  setServerName(serverName:string){
    console.log(serverName);
    this.serverName=serverName;
  }

  onCreateServer(){
    this.serverCreated=true;
  }

}

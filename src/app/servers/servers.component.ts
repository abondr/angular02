import { Component, OnInit } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverObj: Server[] = [];
  serverName: string = 'server1';
  index:number =0;
  stat:boolean = true;
  constructor() {

  }
  setServer = ()=>{
    this.index += 1;
    this.serverName = this.serverName.length < 1 ? "server1" : this.serverName;
    this.stat = this.stat === true ? false : true;
    this.serverObj.push({'name':this.serverName,'status':this.stat});
    this.serverName = "server1";
  }
  ngOnInit() {
  }

}

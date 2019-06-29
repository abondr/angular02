import { Component, OnInit } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverObj: Server[] = [];
  index:number =0;
  stat:boolean = true;
  constructor() {
    setInterval(
      () => {
        this.index += 1;
        this.stat = this.stat === true? false : true;
        this.serverObj.push({'number':this.index,'status':this.stat});
        console.log({'number':this.index,'status':this.stat});
     }, 2000);
  }

  ngOnInit() {
  }

}

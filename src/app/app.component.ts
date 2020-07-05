import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo-app';
  aboutDetailsFlag : boolean = false;

ngOnInit(){}

  changeFlag(){
    this.aboutDetailsFlag = !this.aboutDetailsFlag;
    // alert("THIS IS AN ALERT")
  }

}

import { Component } from '@angular/core';
import { HeaderComponent } from './template/header/header.component';

declare var $: any;

$(document).ready(function(){
  console.log("Start Service");
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  static serviceReady(){
    var url = "https://indiegim-api.herokuapp.com/health";
    // var url = "http://localhost:8080/health";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onerror = function(){
      alert("Service Dalam Maintenance");
    }
    xhr.send()
  }

  changeOfRoutes(){
    AppComponent.serviceReady();
    HeaderComponent.changeLogin()
  }
}

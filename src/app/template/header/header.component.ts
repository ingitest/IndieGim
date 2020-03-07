import { Component, OnInit } from '@angular/core';
import * as JWT from 'jwt-decode';

declare var $: any;
// var user;
var statusLoged = false;

$(document).ready(function(){
  if(statusLoged){
    HeaderComponent.changeCirclePic();
    HeaderComponent.changeCircle();
    HeaderComponent.menuProfile();
  }
});

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
    
  }

  static getDecodedAccessToken(token: string): any {
    try{
        return JWT(token);
    }
    catch(Error){
        return null;
    }
  }

  static changeLogin(){
    var cekWho = HeaderComponent.getDecodedAccessToken(localStorage.getItem("user"))

    console.log(cekWho);

    if(cekWho != null){
      statusLoged = true;
      document.getElementById("menu-profile").style.display = "flex";
      document.getElementById("menu-guest").style.display = "none";

      HeaderComponent.changeCirclePic();
      HeaderComponent.changeCircle();
      HeaderComponent.menuProfile();
    }else{
      statusLoged = false;
      document.getElementById("menu-profile").style.display = "none";
      document.getElementById("menu-guest").style.display = "flex";
    }
  }

  static menuProfile(){
    var profile = document.getElementById("my-profile");
    var menu = document.getElementById("my-menu");
    menu.style.width = profile.clientWidth + "px";
  }

  static changeCirclePic(){
    var circle = document.getElementById("profile-pic-menu");
    circle.style.width =  circle.clientHeight + "px";
  }

  static changeCircle(){
    var circle = document.getElementById("circle-close");
    circle.style.width = circle.clientHeight + "px";
  }

  logOut(){
    alert("Log Out");
    localStorage.setItem("user", null);
    HeaderComponent.changeLogin()
  }

  openMenu(){
    var router = document.getElementById("content");
    router.style.opacity = "0.4";
    
    var navi = document.getElementById("menu-nav");
    navi.style.display = "block";
  }

  closeMenu(){
    var router = document.getElementById("content");
    router.style.opacity = "1";
    
    var navi = document.getElementById("menu-nav");
    navi.style.display = "none";
  }

  openProfile(){
    var menu = document.getElementById("my-menu");
    if(menu.style.display == "block"){
      menu.style.display = "none";
    }else{
      menu.style.display = "block";
    }
  }

}

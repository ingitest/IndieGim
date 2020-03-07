import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
// import { HeaderComponent } from 'app/template/header/header.component';

@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.css','../../css/image.css']
})

export class DetailGameComponent implements AfterViewInit {

  
  constructor() { 
    console.log("Loading Detail Page");
  }

  ngAfterViewInit() {
    DetailGameComponent.switchType(2);
    // DetailGameComponent.makeButton();
    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.src   = "../../assets/js/detail.js";
    document.body.appendChild(script);
    // HeaderComponent.changeCirclePic();
  }
  
  // Function JS

  static getType(){

  }

  installGame(){ // tuk install game nya
    alert('buy me');
  }

  // static buyGame(){ // tuk keluarin form beli
  //   return "alert('Pay me')"
  // }

  // static followGame(){ // tuk follow game nya
  //   return "alert('follow me')";
  // }
  
  // static switchOS(detect){ // ubah tab OS nya (terpaksa kirim string)
  //   return ""+
  //   "var tab = document.getElementsByClassName('os-tab');" +
  //   "var desc = document.getElementsByClassName('os-description');"+

  //   "for(var i=0;i<tab.length;i++){"+
  //   "  tab[i].classList.remove('active');"+
  //   "  desc[i].classList.remove('active');"+
  //   "}"+
  //   "document.getElementById('tab-"+detect+"').className += ' active';"+
  //   "document.getElementById('desc-"+detect+"').className += ' active';";
  // }

  static switchType(number){ // ambil template yang mau dipakai dari database
    var section = document.getElementsByClassName("type-page")[number];
    document.getElementById("content").innerHTML = ''
      +'<div class="row pb-5">'
      +'  <section class="type-page active">'
      + section.innerHTML
      +'  </section>'
      +'</div>';
  }

  // static makeButton(){ // kasih fungsi dalam semua tombol berdasarkan status nya
  //   document.getElementsByClassName("logo-back")[0].setAttribute("onclick", "this.router.navigateByUrl('/login');")

  //   document.getElementById("owned").setAttribute("onclick", this.installGame());
  //   document.getElementById("follow").setAttribute("onclick", this.followGame());


    
  //   document.getElementById("tab-windows").setAttribute("onclick", this.switchOS("windows"));
  //   document.getElementById("tab-macos").setAttribute("onclick", this.switchOS("macos"));
  //   document.getElementById("tab-linux").setAttribute("onclick", this.switchOS("linux"));
  // }
}

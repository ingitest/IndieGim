import { Component, OnInit } from '@angular/core';
// import { HeaderComponent } from 'app/template/header/header.component';

declare var $: any;

declare const SHA256: any;
declare const comparing: any;
declare const validEmail: any;

// Variable Global
var developer = new Object();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})

export class RegisterComponent implements OnInit {

  constructor() { 
    
  }
  

  ngAfterViewInit() {
    // HeaderComponent.changeCirclePic();
  }

  ngOnInit() { 
  }

  // Function JS
  pick(tab){ // ini tuk pilih class nya
    var section = document.getElementsByClassName("section-register");
    for (var i = 0;i<section.length; i++) {
      section[i].classList.remove("active");
    };
    switch(tab){
      case 'developer':
        document.getElementById("button-back").style.display="block";
        document.getElementById("title-register").style.display="none";
        section[2].className += " active";	
        break;
      case 'register':
        document.getElementById("button-back").style.display="block";
        document.getElementById("title-register").style.display="none";
        section[1].className += " active";	
        break;
      case 'pick':
        document.getElementById("button-back").style.display="none";
        document.getElementById("title-register").style.display="block";
        section[0].className += " active";
        developer = new Object();		
        break;
    }
  }

  submitDataPrimaryDev(){ // ini link create
    var list = $("#register-developer-one").serializeArray()
    var nothingWrong = true;
    var outputAlert = "";
    for(var i=0;i<list.length;i++){
      switch(list[i].name){
        case 'displayname':
          developer[list[i].name] = list[i].value;
          break;
        case 'username':
          developer[list[i].name] = list[i].value;
          break;
        case 'email':
          var compareEmail = comparing(list[i].value,list[i+1].value)
          if(compareEmail){
            developer[list[i].name] = list[i].value;
          }else{
            nothingWrong = false;
            outputAlert += "Email is wrong\n";
          }
          break;
        case 'password':
          var comparePassword = comparing(list[i].value,list[i+1].value)
          if(comparePassword){
            developer[list[i].name] = SHA256(list[i].value);
          }else{
            nothingWrong = false;
            outputAlert += "Password is wrong";
          }
          break;  
      }
    }
    if(nothingWrong){
      console.log(developer);
      // var url = "https://indiegim-api.herokuapp.com/user";
      // var url = "http://localhost:8080/user";
      // var xhr = new XMLHttpRequest();
      // xhr.open("POST",url);
      // xhr.onload = function(){
      //   var data = JSON.parse(xhr.responseText);
      //   if(data.error_message.indonesian == "Berhasil"){
      var part = document.getElementsByClassName("dev-part");
      for(var i=0;i<part.length;i++){
        part[i].classList.remove("active");
      }
      part[1].className += " active";
        // }else{
        //   alert("Mohon Maaf, Username / Email Sudah Digunakan");
        // }
    }
      // xhr.onerror = function(){
      //   alert("Service Under Maintenance");
      // }
      // xhr.send(JSON.stringify(developer));
    else{
      alert(outputAlert);
    }
  }

  submitDataSecondaryDev(){ // ini link kirim semua
    var list = $("#register-developer-two").serializeArray()
    var nothingWrong = true;
    var outputAlert = "";
    var social = "";
    var count = 0;
    console.log(developer);
    for(var i=0;i<list.length;i++){
      switch(list[i].name){
        case "website":
          developer[list[i].name] = list[i].value;
          break;
        case "studioEmail":
          developer[list[i].name] = list[i].value;
          break;
        case "dev_studio_social" && list[i].value != "":
          count += 1;
          social += list[i].value;
          if(count < 3){
            social += ", ";
          }
          break;
      }
    }
    developer["social"] = social;
    if(nothingWrong){
       // var url = "https://indiegim-api.herokuapp.com/user";
       var url = "http://localhost:8080/developer";
       var xhr = new XMLHttpRequest();
       xhr.open("POST",url);
       xhr.onload = function(){
        var data = JSON.parse(xhr.responseText);
        if(data.error_schema.error_message.indonesian = "Berhasil"){
          var part = document.getElementsByClassName("dev-part");
          for(var i=0;i<part.length;i++){
            part[i].classList.remove("active");
          }
          part[2].className += " active";
        }else{
          alert("Mohon maaf, terjadi data yang dimasukkan ada yang salah.")
        }
        
       }
       xhr.onerror = function(){
         alert("Service Under Maintenance");
       }
       console.log(developer);
       xhr.send(JSON.stringify(developer));    
    }else{
      alert(outputAlert);
    }
  }

  submitThirdDev(status){

  }

  submitDataUser(){ // masukin url nya dan siap ambil data apa aja
    var list = $("#register-user").serializeArray()
    var data = new Object();
    var nothingWrong = true;
    var outputAlert = "";
    for(var i=0;i<list.length;i++){
      switch(list[i].name){
        case 'username':
          data[list[i].name] = list[i].value;
          break;
        case 'email':
          var compareEmail = comparing(list[i].value,list[i+1].value)
          if(compareEmail){
            data[list[i].name] = list[i].value;
          }else{
            nothingWrong = false;
            outputAlert += "Email is wrong\n";
          }
          break;
        case 'password':
          var comparePassword = comparing(list[i].value,list[i+1].value)
          if(comparePassword){
            data[list[i].name] = SHA256(list[i].value);
          }else{
            nothingWrong = false;
            outputAlert += "Password is wrong";
          }
          break;  
      }
    }
    if(nothingWrong){
      // var url = "https://indiegim-api.herokuapp.com/user";
      var url = "http://localhost:8080/user";
      var xhr = new XMLHttpRequest();
      xhr.open("POST",url);
      xhr.onload = function(){
        var data = JSON.parse(xhr.responseText);
        if(data.error_schema.error_message.indonesian == "Sukses"){
          alert("Data Berhasil Masuk");
          window.location.replace("/");
        }else{
          alert("Mohon Maaf, Data Sudah Digunakan");
        }
      }
      xhr.onerror = function(){
        alert("Service Under Maintenance");
      }
      xhr.send(JSON.stringify(data));
    }
    
  }
}


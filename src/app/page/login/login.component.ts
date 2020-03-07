import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/template/header/header.component';

declare var $: any;
declare const SHA256: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitLogin(){
    var data = new Object();
    var login = $("#form-login").serializeArray()
    
    for(var i=0;i<login.length;i++){
      switch(login[i].name){
        case 'usermail':
          data[login[i].name] = login[i].value;
          break;
        case 'password':
          data[login[i].name] = SHA256(login[i].value);
          break;  
      }
    }

    // var url = "https://indiegim-api.herokuapp.com/login";
    var url = "http://localhost:8080/login";
    var xhr = new XMLHttpRequest();
    xhr.open("POST",url);
    xhr.onload = function(){
     var data = JSON.parse(xhr.responseText);
     if(data.error_schema.error_message.indonesian = "Sukses"){
       alert("SELAMAT DATANG");
       localStorage.setItem("user", data.output_schema.accessToken);
       HeaderComponent.changeLogin();
     }else{
       alert("Mohon maaf, terjadi data yang dimasukkan ada yang salah.")
       
     }
     
    }
    xhr.onerror = function(){
      alert("Service Under Maintenance");
    }
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));   
  }

}

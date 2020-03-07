import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { HeaderComponent } from 'app/template/header/header.component';

var slide;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
    HomeComponent.changeCarousel();
    // HeaderComponent.changeCirclePic();
  }
  
  constructor() { 
    console.log("Loading Main Page")
    slide = 0;
  }

  ngOnInit() {
  }

  // ini carousel nya
  next(n){
    slide += n;
    HomeComponent.changeCarousel();
  }

  static changeCarousel(){
    var items = document.getElementsByClassName("carousel-items");
    for(var i=0;i<items.length;i++){
      items[i].classList.remove("active");
    }
    
    if(slide < 0){
      slide = items.length-1;
    }else if(slide > items.length-1){
      slide = 0;
    }

    items[slide].className += " active";
  }

}

function switchOS(detect){ // ubah tab OS nya
    var tab = document.getElementsByClassName("os-tab");
    var desc = document.getElementsByClassName("os-description");
  
    for(var i=0;i<tab.length;i++){
      tab[i].classList.remove("active");
      desc[i].classList.remove("active");
    }
  
    document.getElementById("tab-"+detect).className += " active";
    document.getElementById("desc-"+detect).className += " active";
}

function backHome(){ // cara back tapi tidak tahu harus ke mana
  location.replace("/");
}

function seeMore(){ // tombol see more

}

function followGame(){ // follow game

}

function unfollow(){ // batalin follow

}

function buyGame(){ // buat yang belum beli sama sekali

}

function downloadGame(){ // buat yang sudah beli dan tinggal download

}

function detailPage(id){ // buat other recommend sebenernya
  location.replace("/detail/" +id);
}
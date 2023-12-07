let txt = "ALL ABOUT COMPUTER";
let i = 0;

function add(){
    document.querySelector("#titleTxt").innerHTML += txt[i++];
    if (i >= txt.length) {
      clearInterval(intv)
      setTimeout(() => {
        document.querySelector("#titleTxt").innerHTML = "";
        i = 0;
        intv = setInterval(add, 200);
      }, 2000);
    }
}

let intv = setInterval(add, 200);

function searching(event) {
  if (event.key === "Enter") {
      window.open("https://www.google.com/search?q=" + encodeURIComponent(document.querySelector("#search").value),"_blank");
  }
}


function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = 'day';
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = 'powderblue';
      i = i + 1;
    }
  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'night';
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = 'blue';
      i = i + 1;
    }
  }
}
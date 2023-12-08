// 제목 타이핑
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

// 검색창
function searching(event) {
  if (event.key === "Enter") {
      window.open("https://www.google.com/search?q=" + encodeURIComponent(document.querySelector("#search").value),"_blank");
  }
}

// 야간모드
let clickNum = 0;
function nightDayHandler(){
  clickNum++;
  if(clickNum % 2 === 1){
    document.querySelector('body').style.backgroundImage = "url('./images/black.png')";
    for (let a of document.querySelectorAll('#main_lnb a, .main_article *, .description *, #side_title')){
      a.style.color = 'white'
    }
    for(let a of document.querySelectorAll('.main_article, .item, #goto-top')){
      a.style.backgroundColor = 'black'
    }
  } else if(clickNum % 2 === 0) {
    document.querySelector('body').style.backgroundImage = "url('./images/zxcv.png')";
    for (let a of document.querySelectorAll('#main_lnb a, .main_article p, .description *')){
      a.style.color = ''
    }
    for (let a of document.querySelectorAll('.main_article i')){
      a.style.color = '#6c5ce7'
    }
    for (let a of document.querySelectorAll('.main_article h1, #side_title')){
      a.style.color = ''
    }
    for(let a of document.querySelectorAll('.main_article, .item, #goto-top')){
      a.style.backgroundColor = ''
    }
  }
}


  
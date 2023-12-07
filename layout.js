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
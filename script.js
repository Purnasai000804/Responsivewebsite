document.getElementById("hamburger").onclick= ()=>{
    document.getElementById("links").classList.toggle("show")
    console.log("here")
}

let list = document.querySelectorAll(".q")
let ans = document.querySelectorAll(".ans")
let more = document.querySelectorAll(".more")
for (let i = 0; i < list.length; i++) {
  list[i].onclick = () => {
    ans[i].classList.toggle('show')
    if (more[i].innerHTML == '+') {
      more[i].innerHTML = "-"
    }
    else {
      more[i].innerHTML = '+'
    }
  }
}



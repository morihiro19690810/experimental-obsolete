const click_here = document.body.querySelector("div");
console.log(click_here);
let click_count = Number(click_here.innerHTML);
console.log(click_count);
function click_add(){
  if (click_count === 9) {
    click_count = 0;
  }
  else {
  click_count = click_count + 1;
}
  console.log(click_count);
  click_here.innerHTML = click_count;
}
click_here.addEventListener("click", click_add);
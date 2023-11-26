const div = document.getElementsByClassName("stars");
console.log(div);
let nst = 5;
let row = 1;
div.innerHTML = "*";
while (row != nst) {
  let cst = 0;
  while (cst <= nst) {
    cst++;
    console.log("h");
  }
  row++;
}

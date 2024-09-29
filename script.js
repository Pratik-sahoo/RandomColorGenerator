
function generateRandomColors(el) {
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
   let rcolor = `rgb(${r},${g},${b})`;
   return rcolor;
}

const boxes = document.querySelectorAll('#box');

const btn = document.querySelector('#btn');
btn.addEventListener("click", () => {
   boxes.forEach(box => {
      let x = generateRandomColors();
      box.innerText = x;
      box.style.backgroundColor = x;
   });
});
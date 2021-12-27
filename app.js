const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');

// canvas를 사용하기 위해서는 js에서도 width와 height를 지정해줘야한다.
canvas.width = 500;
canvas.height = 600;

ctx.strokeStyle = '#2c2c2c'; // 선택 된 색상
ctx.lineWidth = 2.5; // 선택 된 선 굴기

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  // console.log(x, y);
  if(!painting) {
    ctx.beginPath(); // path is a line
    ctx.moveTo(x, y);
    // console.log('creating path in', x, y);
  } else {
    ctx.lineTo(x, y); // 이전 위치에서 지금 위치 까지 선을 만드는 메소드
    ctx.stroke();
    // console.log('creating line in', x, y);
  }
}

function handleColorClick(e) {
  const color = e.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

function hadleRangeChange(e) {
  const size = e.target.value;
  ctx.lineWidth = size;
}

function hadleModeClick(e) {
  if(filling === true) {
    filling = false;
    mode.innerText = 'Fill'
  } else {
    filling = true;
    mode.innerText = 'Paint'
  }
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}

if(colors) {
  Array.from(colors).forEach(color => 
    color.addEventListener('click', handleColorClick)
  );
}

if(range) {
  range.addEventListener('input', hadleRangeChange);
}

if(mode) {
  mode.addEventListener('click', hadleModeClick);
}
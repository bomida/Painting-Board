const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const saveBtn = document.getElementById('jsSave');

const INITIAL_COLOR = '#2c2c2c';

// canvas를 사용하기 위해서는 js에서도 width와 height를 지정해줘야한다.
canvas.width = 500;
canvas.height = 600;

ctx.fillStyle = '#f2f3f7';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR; // 선택 된 색상
ctx.fillStyle = INITIAL_COLOR;
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
  ctx.fillStyle = color;
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
    mode.innerText = 'Paint';
  }
}

function hadleCanvasClick() {
  if(filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function handleCM(e) {
  e.preventDefault();
}

function handleSaveClick() {
  const image = canvas.toDataURL('image/jpeg');
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
  canvas.addEventListener('click', hadleCanvasClick);
  canvas.addEventListener('contextmenu', handleCM);
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

if(saveBtn) {
  saveBtn.addEventListener('click', handleSaveClick);
}
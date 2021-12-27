// 상수 값 설정
const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const saveBtn = document.getElementById('jsSave');

// 공통 값
const INITIAL_COLOR = '#2c2c2c'; // 기본 색상
const INITIAL_STROKE = 2.5; // 기본 색상

// canvas를 사용하기 위해서는 js에서도 width와 height를 지정해줘야한다.
canvas.width = 500;
canvas.height = 600;

ctx.fillStyle = '#f2f3f7';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = INITIAL_STROKE;

let painting = false;
let filling = false;

// 함수 정의
function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(e) {
  // offset은 canvas안에 해당하는 영역을 표시해주는 값
  const x = e.offsetX;
  const y = e.offsetY;

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
  const image = canvas.toDataURL('image/gng');
  const link = document.createElement('a');
  link.href = image;
  link.download = 'PantJS[🎨]';
  link.click();
}

// 확인 하기 위해서 if문을 사용
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
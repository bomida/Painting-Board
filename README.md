# Painting-Board

<br>

## 소개
HTML, CSS, Vanilla JS를 이용하여 그림판을 만들었습니다.

<br>

## 구현 기능
  - 캔버스에 그림 그리기
  - 색상, 굵기 조절
  - 캔버스에 선택한 색상 채우기
  - 한 버튼으로 배경 채우기와 그리기 제어
  - 그림판 그림 지우기
  - 캔버스 영역 리셋
  - png 파일 형태로 저장
  - Progressive Web App 적용
  - 미디어쿼리 적용

  ## 구현 예정 기능
  - 그라데이션 컬러팔레트 추가 및 그리기
  - 모바일 터치 구현

<br>

## 사용 기능 설명 
  - html의 canvas 테그를 사용했습니다.
  - JS를 이용해 그림판을 구현했습니다.
  - 마우스 이벤트 메소드를 사용했습니다.<br>
    (mousemove, mouseup, mousedown, mouseleave,click, contextmenu)
  - mousemove시 offsetX, offsetY로 값을 구합니다.
  - canvas.getContext('2d')로 2d 픽셀 접근합니다.
  - beginPath(), moveTo(x, y)를 마우스가 클릭되지 않았을 때 호출합니다.
  - 그리고 마우스가 클릭되었을 때 lineTo(x, y), stroke()을 호출합니다.
  - fillRect, clearRect으로 배경 채우기와 캔버스 리셋을 합니다.
  - e.preventDefault() 메소드로 오른쪽 클릭 버튼을 차단했습니다.
  - canvas.toDataURL() 메소드로 그림을 저장할 수 있습니다.

<br>

## 개발 환경
  - 개발도구: VSCode, Github
  - 사용언어: HTML, CSS, Vanilla JS

<br>

## Reference
  [노마드코더](https://www.youtube.com/channel/UCUpJs89fSBXNolQGOYKn0YQ)
# 마법의 소라고둥

![magicalConch](https://github.com/jaeeedev/pix/assets/72128840/a5d05a6c-5330-47d5-83c8-f3a44231a34b)

스폰지밥에 나오는 마법의 소라고둥을 만들었습니다.

## 사용기술

- Next.js
- typescript
- Tailwind CSS
- framer-motion
- html2canvas

## 사용 방법

질문할 내용을 타이핑하고 소라고둥의 줄을 당깁니다. 그러면 랜덤한 답변이 영화 화면처럼 나타납니다. 결과물 이미지를 저장할 수 있습니다.

## 신경 쓴 것

![string](https://github.com/jaeeedev/pix/assets/72128840/a70752a2-f77c-496f-9d3c-3f225fa12d49)

![help](https://github.com/jaeeedev/pix/assets/72128840/a560b413-a3d4-4cf0-9557-05321f680885)

간단한 프로젝트기 때문에 재미있는 요소들이 필요하겠다는 생각이 들었습니다. framer-motion을 이용해 드래그, 클릭에 따른 애니메이션을 적용했습니다.

## 겪은 문제

![image](https://github.com/jaeeedev/pix/assets/72128840/c73b2296-0231-4c5e-b1fd-0a52b49dcdda)

줄 위에 소라고둥 이미지가 올려진 형태기 때문에 줄이 아니라 소라고둥이 드래그되는 문제가 있었고 framer-motion의 `useDragControls` 훅을 통해 다른 요소와 드래그 이벤트를 연결해 문제를 해결했습니다. [문제 기록 포스트](https://jaypa.tistory.com/45)

## 알게 된 것

framer-motion을 통해 애니메이션 효과를 주는 방법을 배웠습니다.  
조건부 렌더링 혹은 `display:hidden` 을 주는 경우처럼 요소를 돔 트리에서 아예 없애는 상황에서는 css 효과를 적용하기가 어려운데, framer-motion에서는 요소가 사라지거나 생기는 시점에 효과를 적용할 수 있는 방법(`AnimatePresence`)도 제공하고 있어 부드럽게 컴포넌트가 나타나는 효과를 구현할 수 있었습니다.

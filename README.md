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

## 문제 해결

<details>
<summary>📕 줄 드래그 관련 문제</summary>

소라고둥은 이런 구조로 구현되어 있습니다.

![image](https://github.com/jaeeedev/magical-conch/assets/72128840/284932a7-3fcc-4b5e-bd71-d0e76788e3f3)

`1` 소라고둥 이미지  
`2` 튀어나온 줄을 가리기 위한 흰 박스  
`3` 당길 줄 이미지

![image](https://github.com/jaeeedev/magical-conch/assets/72128840/69d7f997-3c19-4318-9282-d1c5e741877d)

하지만 소라고둥 이미지가 더 위에있는 구조다 보니 서로 겹치는 부분에서 줄이 드래그되지 않고 소라고둥이 드래그되는 문제가 있었습니다.  
framer-motion의 공식 문서를 찾아보던 중 `useDragControls` 이라는 훅을 발견했습니다. 해당 훅은 다른 요소를 드래그 가능한 요소와 연결하여 드래그를 컨트롤할 수 있도록 하는 용도였습니다. 주로 비디어 플레이어의 조절 버튼같은 용도로 사용되는 듯 했습니다.

![image](https://github.com/jaeeedev/pix/assets/72128840/c73b2296-0231-4c5e-b1fd-0a52b49dcdda)

저는 소라고둥 이미지 위에 줄 이미지와 동일한 사이즈의 바를 하나 더 만들고 opacity를 0으로 설정한 다음, useDragControls로 줄 이미지에 연결해 주었습니다. (사진은 opacity를 50%로 올린 상태)  
이제 줄을 드래그하면 가장 상단의 바에서 드래그가 전달되면서 줄이 당겨지는 효과가 구현됩니다.

chrome의 device mode로 확인해보니 드래그가 되지 않는 문제를 확인했습니다. 다시 공식 문서를 확인해보니 터치스크린 환경에서 useDragControls를 지원하기 위해서는 컨트롤을 담당하는 요소에 `touch-action: none;` 속성을 지정해주어야 했습니다.

```jsx
<div
  className="absolute top-[200px] left-[100px] w-[320px] h-[40px] bg-red-200 opacity-0 
      z-2 touch-none"
  onPointerDown={startDrag}
/>
```

이 프로젝트는 테일윈드를 사용중이었으므로 해당 속성의 유틸리티 클래스명인 `touch-none`을 적용해 주었습니다.

</details>

<details>
<summary>📕 이미지 드래그되지 않게 하기</summary>
드래그를 할 때 상단에 있는 소라고둥이 반투명하게 클론되거나 파랗게 긁히는 현상이 있었습니다. 또한 자막이 출력된 이미지도 실수로 드래그할 경우 자막이나 이미지가 따로 긁히면서 별도의 요소로 보이는게 어색할 것 같았습니다.

html의 `draggable` 속성을 `false`로 지정해 주었고, css도 추가적으로 설정해 드래그시 발생하는 효과들을 없애주었습니다.

```css
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```

</details>

## 알게 된 것

framer-motion을 통해 애니메이션 효과를 주는 방법을 배웠습니다.  
조건부 렌더링 혹은 `display:hidden` 을 주는 경우처럼 요소를 돔 트리에서 아예 없애는 상황에서는 css 효과를 적용하기가 어려운데, framer-motion에서는 요소가 사라지거나 생기는 시점에 효과를 적용할 수 있는 방법(`AnimatePresence`)도 제공하고 있어 부드럽게 컴포넌트가 나타나는 효과를 구현할 수 있었습니다.

// 요소 식별
// const moveBtn = document.getElementById('move-btn');
const root = document.getElementById('root');
// 요소 만들기
const mainTag = document.createElement('main');
const ulTag = document.createElement('ul');
const liTag = document.createElement('li');
const asideTag = document.createElement('aside')

// aside 요소 만들기
document.children[0].children[1].appendChild(asideTag);
document.children[0].children[1].children[2].id = "move-btn";
document.children[0].children[1].children[2].innerHTML = "<h1>move!</h1>";
// console.dir(document.children[0].children[1].children[2]);
// document.children[0].children[1].children[1].id = "move-btn";
// document.getElementsByTagName('aside').id = "move-btn";
// moveBtn.innerHTML = "<h1>move!</h1>";

root.appendChild(mainTag);
for(let i = 0; i < 2; i++) {
  const sectionTag = document.createElement('section');
  root.children[0].appendChild(sectionTag);
};
// console.dir(root.children[0]);
root.children[0].children[0].id = "left-sect"
root.children[0].children[1].id = "right-sect"
root.children[0].children[0].appendChild(ulTag);

// 두번째 ul 태그를 만들때 새로운 변수를 꼭 선언해야 할까?
// 한번 선언해둔걸 다시 가져와서 쓸 수는 없을까?
const ulSecondTag = document.createElement('ul');
root.children[0].children[1].appendChild(ulSecondTag);

console.dir(document.children[0].children[1])
console.dir(root);

// 공통 style
root.parentElement.style.overflowX = "hidden";
const ulStyle = document.getElementsByTagName('ul');
// console.log(ulStyle);
// ulStyle[0].style.listStyleType = "none";
// ulStyle[1].style.listStyleType = "none";
for(let i = 0; i < ulStyle.length; i++) {
  ulStyle[i].style.listStyleType = "none";
}

// style을 단순하게 간략화 할 수 없을까? / 객체로 만들어서 활용 할 수 없을까?
// 버튼 style
const moveBtn = document.getElementById('move-btn');

const btnObj = {
  width : "200px",
  height : "200px",
  backgroundColor : "#fff",
  borderRadius : "50%",
  position : "fixed",
  bottom : "10px",
  left : "50vw",
  transform : "translate(-50%, 0)",
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
}
console.dir(btnObj);

// 작성법이 익숙치 않으니 여러번 해볼 것
let getKeyBtnObj = [];
for(let key in btnObj) {
  console.log(key);
  // 위쪽에 생성한 빈 배열에 btnObj의 key 값을 하나씩 밀어넣어라(?)
  getKeyBtnObj.push(key);
}
console.log(getKeyBtnObj);
console.log(getKeyBtnObj[0]);
for(let i = 0; i < getKeyBtnObj.length; i++) {
  // 왜 moveBtn.style.getKeyBtnObj[i]로 하면 오류가 나는가?
  // getKeyBtnObj[i]를 콘솔로 찍어보면 값이 잘 나오고, 타입도 string으로 나오는데
  moveBtn.style[getKeyBtnObj[i]] = btnObj[getKeyBtnObj[i]];
}
// moveBtn.style.width = btnObj.width;
// moveBtn.style.height = btnObj.height;
// moveBtn.style.backgroundColor = btnObj.backgroundColor;
// moveBtn.style.borderRadius = btnObj.borderRadius;
// moveBtn.style.position = btnObj.position;
// moveBtn.style.bottom = btnObj.bottom;
// moveBtn.style.left = btnObj.left;
// moveBtn.style.transform = btnObj.transform;
// moveBtn.style.display = btnObj.display;
// moveBtn.style.justifyContent = btnObj.justifyContent;
// moveBtn.style.alignItems = btnObj.alignItems;


// root style
const rootObj = {
  width : "100vw",
  height : "100vh",
  backgroundColor : "cadetblue",
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
}
let getKeyRootObj = [];
for(let key in rootObj) {
  getKeyRootObj.push(key);
}
console.log(getKeyRootObj);
for(let i=0; i < getKeyRootObj.length; i++) {
  root.style[getKeyRootObj[i]] = rootObj[getKeyRootObj[i]];
}

// root.style.width = "100vw";
// root.style.height = "100vh";
// root.style.backgroundColor = "cadetblue";
// root.style.display = "flex";
// root.style.justifyContent = "center";
// root.style.alignItems = "center";
// console.dir(root)

// main style
const mainObj = {
  width : "500px",
  height : "500px",
  border : "1px dotted black",
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
}

let getKeyMainObj = [];
for(let key in mainObj) {
  getKeyMainObj.push(key);
}
for(let i = 0; i < getKeyMainObj.length; i++) {
  root.children[0].style[getKeyMainObj[i]] = mainObj[getKeyMainObj[i]];
}

// root.children[0].style.width = "500px";
// root.children[0].style.height = "500px";
// root.children[0].style.border = "1px dotted black";
// root.children[0].style.display = "flex";
// root.children[0].style.justifyContent = "center";
// root.children[0].style.alignItems = "center";

// section style
const section = document.getElementsByTagName('section');
// const sectObj = {
//   // 공통 부분
//   display : "flex",
//   jsutifyContent : "center",
//   alignItems : "center",
//   // left-sect 부분
//   width : "200px",
//   height : "450px",
//   border : "1px solid black",
//   // right-sect 부분
//   width : "200px",
//   height : "450px",
//   border : "1px solid blue",
// }
//객체 안에서 key 값 중복이 안되는데 이걸 어떻게 각각의 section에 할당해줘야 할까?
// left-sect 따로, right-sect 따로 객체를 만들어야만 하는가?
// 공통 부분이 있을때 한번에 묶어서 처리할 수 있는 방법이 뭘까?

// let getKeySectObj = [];
// for(let key in sectObj) {
//   getKeySectObj.push(key);
// };
// console.log(getKeySectObj);
// for(let j = 0; j < section.length; j++) {
//   for(let i = 0; i < getKeySectObj.length; i++) {
//     if(j === 0 && i < 6) {
//       section[j].style[getKeySectObj[i]] = sectObj[getKeySectObj[i]];
//     } else if(j === 1 && i > 5) {
//       section[j].style[getKeySectObj[i]] = sectObj[getKeySectObj[i]]
//     }
//   }
// }

// section 공통 style
// 이걸 for in 문과 함께 어떻게 써야 깔끔하게 될 까
for(let i = 0; i < section.length; i++) {
  section[i].style.display = "flex";
  section[i].style.justifyContent = "center";
  section[i].style.alignItems = "center";
  if(i === 0) {
    section[i].style.width = "200px";
    section[i].style.height = "450px";
    section[i].style.border = "1px solid black";
  } else {
    section[i].style.width = "200px";
    section[i].style.height = "450px";
    section[i].style.border = "1px solid blue";
  }
}

// left-sect style
// section[0].style.width = "200px";
// section[0].style.height = "450px";
// section[0].style.border = "1px solid black";

// right-sect style
// section[1].style.width = "200px";
// section[1].style.height = "450px";
// section[1].style.border = "1px solid blue";

// 이벤트 핸들링용 토글 변수
let switchToggle = true;

// li 요소 만드는 부분 함수 화
function move() {
  for(let i = 1; i <= 5; i++) {
    const liTag = document.createElement('li');
    liTag.textContent = "item-" + i;
    // li tag style
    liTag.style.width = "100%";
    liTag.style.height = "50px";
    liTag.style.backgroundColor = "#fff";
    liTag.style.border = "1px solid black";
  
    if(switchToggle === true) {
      root.children[0].children[0].children[0].appendChild(liTag);
    } else {
      root.children[0].children[1].children[0].appendChild(liTag);
    }
  }
};
// 최초 페이지 로딩 시 li 요소 만들어 줌
move();
console.dir(root.children[0].children[0].children[0]);

// 버튼을 클릭할 때 마다 ul을 초기화 시켜주고 양쪽에 번갈아가며 li태그를 만듬
moveBtn.addEventListener('click', function() {
  root.children[0].children[0].children[0].innerHTML = "";
  root.children[0].children[1].children[0].innerHTML = "";
  if(switchToggle === true) {
    switchToggle = false;
    move();
  } else {
    switchToggle = true;
    move();
  }
})

// 강사 제공 연구거리
const styleExample = {
  color: "red",
  backgroundColor: "yellow",
  border : "1px solid black",
  padding: "10px",
}
console.log(styleExample);

let getKeyString = [];
for (let key in styleExample) {
  getKeyString.push(key);
}
console.log(getKeyString);
for(let i = 0; i < getKeyString.length; i++) {
  console.log(styleExample[getKeyString[i]]);
}

let exampleKey = ["color", "background", "border"];
let exampleValue = ["red", "yello", "1px solid black"];

let obj = {};
for(let i = 0; i < exampleKey.length; i++) {
  obj[exampleKey[i]] = exampleValue[i];
}
console.log(obj);

// 의문점
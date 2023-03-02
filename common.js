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

moveBtn.style.width = btnObj.width;
moveBtn.style.height = btnObj.height;
moveBtn.style.backgroundColor = btnObj.backgroundColor;
moveBtn.style.borderRadius = btnObj.borderRadius;
moveBtn.style.position = btnObj.position;
moveBtn.style.bottom = btnObj.bottom;
moveBtn.style.left = btnObj.left;
moveBtn.style.transform = btnObj.transform;
moveBtn.style.display = btnObj.display;
moveBtn.style.justifyContent = btnObj.justifyContent;
moveBtn.style.alignItems = btnObj.alignItems;

// root style
root.style.width = "100vw";
root.style.height = "100vh";
root.style.backgroundColor = "cadetblue";
root.style.display = "flex";
root.style.justifyContent = "center";
root.style.alignItems = "center";
// console.dir(root)

// main style
root.children[0].style.width = "500px";
root.children[0].style.height = "500px";
root.children[0].style.border = "1px dotted black";
root.children[0].style.display = "flex";
root.children[0].style.justifyContent = "center";
root.children[0].style.alignItems = "center";

// section style
const section = document.getElementsByTagName('section');
// console.dir(section);
// section 공통 style
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
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
console.dir(document.children[0].children[1].children[2]);
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
for(let i = 1; i <= 5; i++) {
  const liTag = document.createElement('li');
  liTag.textContent = "item-" + i;
  root.children[0].children[0].children[0].appendChild(liTag);
}

// 두번째 ul 태그를 만들때 새로운 변수를 꼭 선언해야 할까?
// 한번 선언해둔걸 다시 가져와서 쓸 수는 없을까?
const ulSecondTag = document.createElement('ul');
root.children[0].children[1].appendChild(ulSecondTag);

console.dir(document.children[0].children[1])
console.dir(root);

// style
root.parentElement.style.overflowX = "hidden";
const ulStyle = document.getElementsByTagName('ul');
// console.log(ulStyle);
// ulStyle[0].style.listStyleType = "none";
// ulStyle[1].style.listStyleType = "none";
for(let i = 0; i < ulStyle.length; i++) {
  ulStyle[i].style.listStyleType = "none";
}


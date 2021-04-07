/**
 * 动态计算Rem
 */
export function setRem() {
  let whdef = 100 / 1920; // 表示1920的设计图，使用100px的默认值
  let bodyWidth = document.body.clientWidth; // 当前视口宽度
  let rem = bodyWidth * whdef;
  (document.querySelector("html") as HTMLElement).style.fontSize = rem + "px";
}

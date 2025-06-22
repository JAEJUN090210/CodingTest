// function solution(box, n) {
//   const widthCount = Math.floor(box[0] / n);
//   const lengthCount = Math.floor(box[1] / n);
//   const heightCount = Math.floor(box[2] / n);
  
//   return widthCount * lengthCount * heightCount;
// }

function solution(box, n) {
  return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
}
// const grades = [
//     { subject: "语文", score: Number(prompt("输入语文成绩")) },
//     { subject: "数学", score: Number(prompt("输入数学成绩")) },
//     { subject: "英语", score: Number(prompt("输入英语成绩")) },
//     { subject: "物理", score: Number(prompt("输入物理成绩")) },
// ];

// const cleanScores = (list) => list.filter(g => g.score >= 0 && g.score <= 100);

// const avg = (list) => {
//     if (list.length === 0) return 0;
//     return (list.reduce((sum, g) => sum + g.score, 0) / list.length).toFixed(2);
// }

// const failed = (list) => list.filter(g => g.score < 60).map(g => g.subject);

// const report = (list) => {
//     const valid = cleanScores(list);
//     if (valid.length === 0) return '没有有效成绩';

//     return `四个科目平均${avg(valid)}分，不及格名单：${failed(valid).join('、') || '无'}`;
// }

// console.log(report(grades));

// const sort = (list) => {
//     list.sort((g1, g2) => {
//         if (g1.score != g2.score) return g2.score - g1.score;
//         const idx = { 
//             "语文" : 0,
//             "数学" : 1,
//             "英语" : 2,
//             "物理" : 3,
//         }
//         return idx[g2] - idx[g1];
//     })
//     return list;
// }

// console.table(sort(cleanScores(grades)));

// const phoneNumber = prompt("输入手机号");
// const reg = /^1[3-9]\d{9}$/;
// console.log((reg.test(phoneNumber)) ? "是手机号" : "不是手机号")

let arr = [];
for (let i = 0; i < 1000000; i++) arr.push(i);

console.time("for");

let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
}

console.timeEnd("for");
console.log("for用时：", sum1);


console.time("reduce");

const sum2 = arr.reduce((sum, v) => sum + v, 0);

console.timeEnd("reduce");
console.log("reduce用时：", sum2);


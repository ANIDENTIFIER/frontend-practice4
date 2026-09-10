const grades = [
    { subject: "语文", score: Number(prompt("输入语文成绩")) },
    { subject: "数学", score: Number(prompt("输入数学成绩")) },
    { subject: "英语", score: Number(prompt("输入英语成绩")) },
    { subject: "物理", score: Number(prompt("输入物理成绩")) },
];

const cleanScores = (list) => list.filter(g => g.score >= 0 && g.score <= 100);

const avg = (list) => {
    if (list.length === 0) return 0;
    return (list.reduce((sum, g) => sum + g.score, 0) / list.length).toFixed(2);
}

const failed = (list) => list.filter(g => g.score < 60).map(g => g.subject);

console.log(avg(cleanScores(grades)));
console.log(failed(cleanScores(grades)));
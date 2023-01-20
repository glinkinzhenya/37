// Створити програму для відображення результатів голосування.З наступними умовами:
// Як варіанти відповіді - смайлики.За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

const id1 = document.getElementById("1");
const id2 = document.getElementById("2");
const id3 = document.getElementById("3");
const id4 = document.getElementById("4");
const id5 = document.getElementById("5");

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");

id1.addEventListener("click", () => getNumber(p1));
id2.addEventListener("click", () => getNumber(p2));
id3.addEventListener("click", () => getNumber(p3));
id4.addEventListener("click", () => getNumber(p4));
id5.addEventListener("click", () => getNumber(p5));

let q = 0;
let w = 0;
let e = 0;
let r = 0;
let t = 0;

function getNumber(p) {
    if (p === p1) {
        q += 1;
        p.innerText = q;
    } 
    if (p === p2) {
        w += 1; 
        p.innerText = w;
    }  
    if (p === p3) {
        e += 1;
        p.innerText = e;
    }
    if (p === p4) {
        r += 1;
        p.innerText = r;
    }
    if (p === p5) {
        t += 1;
        p.innerText = t;
    }
};
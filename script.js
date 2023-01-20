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

let q = 0;
let w = 0;
let e = 0;
let r = 0;
let t = 0;

id1.addEventListener("click", () => {
    q += 1;
    p1.innerText = q;
});

id2.addEventListener("click", () => {
    w += 1;
    p2.innerText = w;
});

id3.addEventListener("click", () => {
    e += 1;
    p3.innerText = e;
});

id4.addEventListener("click", () => {
    r += 1;
    p4.innerText = r;
});

id5.addEventListener("click", () => {
    t += 1;
    p5.innerText = t;
});
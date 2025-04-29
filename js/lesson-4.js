// Task 1
// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якого атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

//TODO:===========1===============
const bodyElem = document.body;
console.log(bodyElem);
//TODO:===========2===============
const titleEl = document.querySelector("#title");
console.log(titleEl);
//TODO:============3==============
const listEl = document.querySelector(".list");
console.log(listEl);
//TODO:============4==============
const itemsEl = document.querySelectorAll("[data-topic]");
console.log([itemsEl]);
//TODO:===========5===============
const firstItemEl = document.querySelector("[data-topic]");
console.log(firstItemEl);
//TODO:===========6===============
const lastItemEl = itemsEl[itemsEl.length - 1];
console.log(lastItemEl);
//TODO:===========7===============
const firstSibling = titleEl.nextElementSibling;
console.log(firstSibling);
//TODO:===========8===============
const allTitles = document.querySelectorAll("h3");
allTitles.forEach((li) => console.log(li));
//TODO:===========9===============
allTitles.forEach((li) => li.classList.add("active"));
//TODO:===========10===============
const navLiEl = document.querySelector('li[data-topic="navigation"]');
console.log(navLiEl);
//TODO:===========11===============
navLiEl.style.backgroundColor = "yellow";
//TODO:===========12===============
navLiEl.lastElementChild.textContent = "Я змінив<span> тут текст</span>";
//TODO:===========13===============
const currentTopic = "manipulation";
const topicEl = document.querySelector(`[data-topic=${currentTopic}]`);
console.log(topicEl);
//TODO:===========14===============
topicEl.style.backgroundColor = `blue`;
//TODO:===========15===============
const completedEl = document.querySelector(".completed");
console.log(completedEl);
//TODO:===========16===============
completedEl.parentNode.remove();
//TODO:===========17===============
const parEl = document.createElement("p");
parEl.textContent = "Об'єктна модель документа (Document Object Model)";
titleEl.after(parEl);
//TODO:===========18===============
const liEl = document.createElement("li");

const subtitle = document.createElement("h3");
subtitle.textContent = "Властивість innerHTML";

const pEl = document.createElement("p");
pEl.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

liEl.appendChild(subtitle);
liEl.appendChild(pEl);

console.log(liEl);

listEl.append(liEl);
//TODO:===========19===============
const markup = `
<li>
  <h3>Властивість innerHTML</h3>
  <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
</li>
`;
// listEl.innerHTML = markup;
listEl.insertAdjacentHTML("beforeend", markup);
//TODO:===========20===============
listEl.innerHTML = "";

// ======================================
// Task 2
// Створіть контейнер div (з класом number-container )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// ++++++++++++++++++++++++++++++++
const BLOCKS = 100;

const divContainerEl = document.querySelector(".number-container");
const divArray = [];

for (let index = 0; index < BLOCKS; index += 1) {
  const divEl = document.createElement("div");
  divEl.classList.add("number");
  divEl.textContent = randomNumber();
  if (divEl.textContent % 2 === 0) {
    divEl.classList.add("even");
  } else {
    divEl.classList.add("odd");
  }
  divArray.push(divEl);
}
divContainerEl.append(...divArray);

// ===================================
// Task 3
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// ++++++++++++++++++++++++++++++
// find refs
const refs = {
  userInput: document.querySelector(".js-username-input"),
  form: document.querySelector(".js-contact-form"),
  span: document.querySelector(".js-username-output"),
};
// console.log(refs.userInput);

//TODO:===========1===============
refs.userInput.addEventListener("input", () => {
  if (refs.userInput.value.length > 6) {
    refs.userInput.classList.add("success");
    refs.userInput.classList.remove("error");
  } else {
    refs.userInput.classList.remove("success");
    refs.userInput.classList.add("error");
  }

  // or
  // refs.userInput.classList.toggle("success", refs.userInput.value.length > 6);
  // refs.userInput.classList.toggle("error", refs.userInput.value.length <= 6);
});

//TODO:===========2===============
refs.userInput.addEventListener("focus", () => {
  if (refs.userInput.value.trim() === "") {
    refs.userInput.style.outline = "3px solid red";
  } else {
    refs.userInput.style.outline = "3px solid green";
  }

  // or
  // refs.userInput.value.trim() === ""
  //   ? (refs.userInput.style.outline = "3px solid red")
  //   : (refs.userInput.style.outline = "3px solid green");

  // or
  // refs.userInput.style.outline =
  //   refs.userInput.value.trim() === "" ? "3px solid red" : "3px solid green";
});

//TODO:===========3===============

refs.userInput.addEventListener("blur", () => {
  if (refs.userInput.value.trim() === "") {
    refs.userInput.style.outline = "3px solid red";
  } else {
    refs.userInput.style.outline = "3px solid lime";
  }

  // or
  // refs.userInput.value.trim() === ""
  //   ? (refs.userInput.style.outline = "3px solid red")
  //   : (refs.userInput.style.outline = "3px solid lime");

  // or
  // refs.userInput.style.outline =
  //   refs.userInput.value.trim() === "" ? "3px solid red" : "3px solid lime";
});
//TODO:===========4===============

const onSubmit = (e) => {
  e.preventDefault();

  const { accept, userName } = e.target.elements;

  if (!userName.value.trim() || !accept.checked) {
    return alert("invalid arguments");
  }

  const userData = {
    userName: userName.value.trim(),
  };
  console.log(userData);

  //   e.currentTarget.reset();
  refs.form.reset();

  refs.span.textContent = "Anonymous";
};

const onInputChange = () => {
  refs.span.textContent = refs.userInput.value || "Anonymous";
};

refs.form.addEventListener("input", onInputChange);
refs.form.addEventListener("submit", onSubmit);

// =========================================
// Task 4
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// +++++++++++++++++++++++++++++++
const btnIncrease = document.querySelector(".js-increase");
const btnDecrease = document.querySelector(".js-decrease");
const divElement = document.querySelector(".box");

const onClick = (event) => {
  const { offsetWidth } = divElement;
  if (event.target.id === "increase") {
    divElement.style.width = `${offsetWidth + 20}px`;
    divElement.style.height = `${offsetWidth + 20}px`;
    return;
  }
  divElement.style.width = `${offsetWidth - 20}px`;
  divElement.style.height = `${offsetWidth - 20}px`;
};

btnIncrease.addEventListener("click", onClick);
btnDecrease.addEventListener("click", onClick);

// or
// let size = 50;

// btnDecrease.addEventListener("click", () => {
//   if (size < 20) {
//     return;
//   }
//   size -= 20;
//   divElement.style.width = `${size}px`;
//   divElement.style.height = `${size}px`;
// });

// btnIncrease.addEventListener("click", () => {
//   size += 20;
//   divElement.style.width = `${size}px`;
//   divElement.style.height = `${size}px`;
// });

// =============================

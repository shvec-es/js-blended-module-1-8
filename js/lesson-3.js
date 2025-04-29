// Task 1
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]

// +++++++++++++++++++++++++

// const newNumbers = numbers.map(num=>num*num)
// or
// const newNumbers = [];
// numbers.forEach(num=>newNumbers.push(num*num))
// console.log(newNumbers);

// or with func
// const getNewArray = (arr, pow) => arr.map((el) => Math.pow(el, pow));
// const res = getNewArray(numbers, 2);
// console.log("getNewArray :>> ", res);

// ===========================
// Task 2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// +++++++++++++++++++++++++++++++
// const newArray = data.flatMap((obj) => obj.values);
// console.log(newArray);

// or with func
// const flatArray = (arr) => arr.flatMap((item) => item.values);
// const res1 = flatArray(data);
// console.log(res1);

// ===============================
// Task 3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// ++++++++++++++++++++++++++++++
// console.log(people.some((p) => p.age < 20));

// or with func
// const checkAge = (array) => array.some((item) => item.age < 20);
// const res2 = checkAge(people);
// console.log(res2);

// ==============================
// Task 4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// ++++++++++++++++++++++++++++
// console.log(numbers.every((num) => num % 2 === 0));

// or with func
// const checkEvenArray = (array) => array.every((number) => number % 2 === 0);
// const res3 = checkEvenArray(numbers);
// console.log(res3);

// ================================
// Task 5
// Знайдіть перше непарне число

// const numbers1 = [2, 1, 6, 8, 9, 10, 12];

// +++++++++++++++++++++++++++++++
// const oddNum = numbers1.find((num) => num % 2 !== 0);
// console.log("oddNumber: ", oddNum);

// or with func
// const oddNumberInArray = (array) => array.find((number) => number % 2 !== 0);
// console.log("oddNumber: ", oddNumberInArray(numbers1));

// ===============================
// Task 6
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// +++++++++++++++++++++++++++++++
// const sortedArray = numbersArray.toSorted((a, b) => a - b);
// console.log(sortedArray);

// or with func
// const sortedArray = (array) => array.toSorted((a, b) => a - b);
// const res4 = sortedArray(numbersArray);
// console.log(res4);

// ==================================
// Task 7
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// ++++++++++++++++++++++++++++++++++
// console.log(stringArray.toSorted((a, b) => a.localeCompare(b)));

// or with func
// const sortedStringArray = (array) =>
//    array.toSorted((a, b) => a.localeCompare(b));
// const res5 = sortedStringArray(stringArray);
// console.log(res5);

// ===================================
// Task 8
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// ++++++++++++++++++++++++++++++++++
// const sortedByAge = users.toSorted((a, b) => a.age - b.age);
// console.log(sortedByAge);

// or with func
// const sortedUsers = (array) => array.toSorted((a, b) => a.age - b.age);
// const res6 = sortedUsers(users);
// console.log(res6);

// ===================================
// Task 9
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// +++++++++++++++++++++++++++++++++++
// const newArr = user.filter((el) => el.age > 20);
// console.log(newArr);

// or with func
// const filteredUsers = (array) => array.filter((item) => item.age > 20);
// const res7 = filteredUsers(user);
// console.log(res7);

// ==================================
// Task 10
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers2 = [1, 2, 3, 4, 5];

// ++++++++++++++++++++++++++++++++++
// const sum = numbers2.reduce((total, num) => total + num, 0);
// console.log(sum);

// or with func
// const sum = (array) => array.reduce((acc, item) => acc + item, 0);
// const res8 = sum(numbers2);
// console.log(res8);

// ==================================
// Task 11
// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// +++++++++++++++++++++++++++
// class Calculator {
//   constructor() {
//     this.result = 0;
//   }

//   number(num) {
//     this.result = num;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }

//   add(num) {
//     this.result += num;
//     return this;
//   }

//   substruct(num) {
//     this.result -= num;
//     return this;
//   }

//   divide(num) {
//     this.result /= num;
//     return this;
//   }

//   multiply(num) {
//     this.result *= num;
//     return this;
//   }
// }

// const calculator = new Calculator();
// console.log(calculator);

// const result = calculator
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .substruct(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// =====================================
// Task 12
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// +++++++++++++++++++++++++++++++
// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get getLogin() {
//     return this.#login;
//   }

//   set changeLogin(newLogin) {
//     this.#login = newLogin;
//   }

//   get getEmail() {
//     return this.#email;
//   }

//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client("Mango", "mango@gmail.com");

// client.login = 12343;
// console.log(client);

// client.changeEmail = "mango555@gmail.com";
// console.log(client.getEmail);
// client.changeLogin = "12345";
// console.log(client.getLogin);

// =================================
// Task 13
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
//  Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// +++++++++++++++++++++++++++++++
// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// const person = new Person("John", 30, "male", "john@hmail.com");

// console.log(person.getDetails());

// class Employee extends Person {
//   constructor(salary, department, name, age, gender, email) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//   }

//   getEmployeeDetails() {
//     return {
//       ...this.getDetails(),
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }
// const employee = new Employee(
//   5000,
//   "developer",
//   "Bob",
//   45,
//   "male",
//   "bob@hmail.com"
// );
// console.log(employee.getEmployeeDetails());

// ==================================

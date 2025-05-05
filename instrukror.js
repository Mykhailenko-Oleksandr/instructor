'use strict';  // Код у суворому режимі

// Якщо не треба змінювати значення
const username = "Mango";
console.log(username);

// Якщо треба змінювати значення
let username = "Mango";
console.log(username);

username = "Poly";
console.log(username);

// відсутність значення
let value = null;
console.log(value); // null

// невизначеність значення змінної
let value;
console.log(value); // undefined

// використовується для визначення типу даних значення або виразу
typeof operand

// Оператор (+) використовується для складання двох чисел.
// Оператор (-) використовується для віднімання одного числа від іншого.
// Оператор (*) використовується для множення двох чисел.
// Оператор (/) використовується для ділення одного числа на інше.
// Оператор (%) повертає остачу від ділення одного числа на інше.
// Оператор (**) використовується для піднесення числа до степеня.

// перетворення будь-якого значення на рядок
String()
console.log(String(5)); // "5"

// Шаблонні рядки огортаються зворотними лапками (англ. backticks) (``)
// ${змінна} дозволяють підставляти значення змінних безпосередньо всередині рядка
const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"

// дізнатися довжину рядка, використовується вбудована властивість length
const productName = "Repair droid";
console.log(productName.length); // 12

// Для доступу до певного символу рядка використовується синтаксис квадратних дужок, де вказуємо індекс потрібного символу: string[index], тобто рядок[індекс].
const product = "Repair droid";
console.log(product[0]); // 'R'
console.log(product[5]); // 'r'
console.log(product[11]); // 'd'

// Отримання останнього символу рядка можливе за його індексом string[lastIndex]. Щоб знайти індекс останнього символу рядка, треба від довжини цього рядка відняти одиницю string.length - 1
const product = "Repair droid";
const lastElementIndex = product.length - 1;
console.log(product[lastElementIndex]); // 'd'

// Для доступу до останнього символу рядка без створення проміжної змінної ми можемо вставити вираз (product.length - 1) безпосередньо у квадратні дужки при зверненні до елемента.
const product = "Repair droid";
console.log(product[product.length - 1]); // 'd'








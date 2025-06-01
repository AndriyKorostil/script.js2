// Температура: Цельсій → Фаренгейт
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);

// Кількість годин та хвилин у місяці
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(hoursInMonth);
console.log( minutesInMonth);

// Рівень здоров'я та енергії гравця
let health = 100;
let energy = 80;
health -= 20;
energy -= 15;
console.log( health);
console.log( energy);

// Знижка на покупку
let totalPrice = 250;
let discount = 0.10;
let discountedPrice = totalPrice * (1 - discount);
console.log(discountedPrice);

// Округлення числа вниз
const floatNumber = 12.78;
let roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

// Перетворення рядка у число з плаваючою комою
const floatString = "45.67";
let parsedFloat = parseFloat(floatString);
console.log(parsedFloat);

// Перетворення рядка у ціле число
const intString = "123";
let parsedInt = parseInt(intString);
console.log(parsedInt);

// Квадратний корінь з числа
let number = 144;
let sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);

// Перетворення між типами: рядок ⇄ число
const integer = 42;
const stringNumber = "256";
let convertedInt = parseInt(stringNumber);
let convertedString = integer.toString();
console.log(convertedInt);
console.log(convertedString);

// 1) Площадь треугольника
const height = 5;
const width = 8;
const triangleArea = 0.5 * width * height;
console.log('Площадь треугольника:', triangleArea, 'кв. см');

// 2) Количество минут в часах
const hours = 56;
const minutes = hours * 60;
console.log('В', hours, 'часах', minutes, 'минут');

// 3) Заработок программиста
const hourlyRate = 50;
const workDays = 8;
const earnings = hourlyRate * workDays * 8;
console.log('Заработок программиста:', earnings, '$');

// 4) Чаевые в кофейне
const billAmount = 1566;
const tipPercentage = 15;
const tips = (tipPercentage / 100) * billAmount;
console.log('Чаевые в кофейне:', tips, 'сом');

// 5) Очки баскетбольной команды
const twoPointers = 8;
const threePointers = 6;
const totalPoints = 2 * twoPointers + 3 * threePointers;
console.log('Баскетбольная команда набрала:', totalPoints, 'очков');

// 6) Пробег трактора
const fuelConsumption = 22; // литров на 100 км
const fuelAmount = 100; // литров топлива
const distance = (fuelAmount / fuelConsumption) * 100;
console.log('Трактор проедет:', distance, 'км');

// 7) Оплата за отправку посылки
const heightPackage = 23;
const widthPackage = 33;
const lengthPackage = 50;
const weightPackage = 12;
const shippingRate = 499; // сом за кг объемного веса
const volumetricWeight = (heightPackage * widthPackage * lengthPackage) / 5000;
const totalShippingCost = Math.max(weightPackage, volumetricWeight) * shippingRate;
console.log('Оплата за отправку посылки:', totalShippingCost, 'сом');

// 8) Затраты на электроэнергию
const heaterConsumption = 2.4; // кв/ч
const heaterHours = 46;
const electricityRate = 2.44; // сом за кв/ч
const electricityCost = heaterConsumption * heaterHours * electricityRate;
console.log('Затраты на электроэнергию:', electricityCost, 'сом');

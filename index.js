// 1. Напишіть функцію, яка приймає 2 числа і повертає (return) те число, яке більше.

// 2. Напишіть функцію, яка знаходить середнє арифметичне з двох чисел.

// 3. Напишіть функцію, яка приймає число та повертає, чи є число парним, чи ні.



function numberIsBigger () {
    let num1 = Number(prompt('введіть перше число'));
    let num2 = Number(prompt('введіть друге число'));
    if (num1 > num2) {
        console.log(num1 + ' більше ніж ' + num2);
        return num1;
    }
    else {
        console.log(num2 + ' більше ніж ' + num1);
        return num2;
    }
}

// numberIsBigger();


function numberMean () {
    let num1 = Number(prompt('введіть перше число'));
    let num2 = Number(prompt('введіть друге число'));
    let mean = (num1 + num2) / 2;
    console.log('Середнє арифметичне цих двох чисел ' + mean);
    return mean;
}

// numberMean();


function numberPaired () {
    let num = Number(prompt('введіть число'));
    if (num % 2 === 0) {
        console.log('Це парне число');
        num = 'paired';
        return num;
    }
    else {
        console.log('Це непарне число');
        num = 'unPaired';
        return num;
    }
}

// numberPaired();

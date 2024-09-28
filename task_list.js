//На странице words.html по нажатию кнопки:
//спросить у пользователя текст произвольной длины;
//найти во введённом тексте три самых длинных слова;
//вывести эти слова оператором alert через точку с запятой.

function findTreeLongestWord (str) {
    return str.toLowerCase().split(' ').sort((a, b) => b.length - a.length).slice(0, 3);
 }
 findTreeLongestWord('Введите текст из более чем трёх слов!');
 
 //Написать чистую функцию, эффективно удаляющую из переданной 
 //ей строки все начальные и конечные пробелы, не используя метод строки trim.
 function deleteEmptySpace (str) {
    return str.split('').filter(el => el !== ' ').join('');
 }
 console.log(deleteEmptySpace('   Котик  '));
 
 //Разработать «чистую» функцию treeSum, которая получает 
 //массив, элементы которого могут быть числами или снова массивами, 
 //и так до любого уровня.
 //Функция должна рассчитать и вернуть сумму всех числовых элементов 
 //массива со всех уровней.
 let test1 = [1, 2, [3, 4]];
 let test2 = [4, 5, [1, 3, [7, 10], [2, 8, 2]], [9, 1], 5, 30];
 
 function treeSum(arr) {
     let result = 0;
 
     for(let i = 0; i < arr.length; i++) {
         if (Array.isArray(arr[i])) {
             result += treeSum(arr[i]);
         } 
         else result += arr[i];
     }
 
     return result;
 }
 
 let sum1 = treeSum(test1);
 let sum2 = treeSum(test2);
 console.log(sum1, sum2);
 
 //Написать «чистую» функцию для эффективного подсчёта количества 
 //русских гласных букв в строке.
 //Спросить у пользователя строку. Вывести в консоль 
 //количество русских гласных букв в ней.
 
 function numOfRussianLetters (str) {
    let arr = str.toLowerCase().split('');
    let vs = "аеёиоуыэюя";
 
     return arr.reduce( (sum, cur) => {
       if (vs.indexOf (cur) !== -1) { 
          sum++;
       }
       return sum;
    }, 0);
 }
 
 numOfRussianLetters('Абракадабра');
 
 function numOfRussianLetters (str) {
   let arr = str.toLowerCase().split('');
   let vs = "аеёиоуыэюя";
   let res = 0;
 
    arr.forEach( el => {
      if (vs.includes(el)) { 
         res ++;
      }      
   });
   return res;
 }
 numOfRussianLetters('Абракадабра');
 
 function numOfRussianLetters (str) {
   let arr = str.toLowerCase().split('');
   let vs = "аеёиоуыэюя";
 
    return arr.filter(item => vs.indexOf(item)).length - 1;
 }
 
 numOfRussianLetters('Абракадабра');
 
 //Разработать чистую функцию, получающую год, 
 //и возвращающую век, к которому относится данный год. 
 //(Например, 1980 год — 20 век, 2000 год — 20 век, 2001 год — 21 век.) 
 //Функция не должна использовать if либо условную операцию, 
 //только оператор return. Спросить у пользователя год. 
 //Отобразить пользователю соответствующий году век.
 
 function getCentury (num) {
    return `${Math.ceil(num / 100)} век`;
 }
 getCentury(2001);
 
 //Написать чистую функцию, эффективно переворачивающую строку 
 //задом наперёд. Реализация функции не должна использовать циклов и рекурсии.
 function getReverseWord (str) {
    return str.split('').reverse().join('');
 }
 getReverseWord('путаница');
 
 //Функция по поверхностному клонорование объектов
 //1 - С помощью перебора//
 let user = {
    name: "John",
    age: 30,
    hobbies: {
       sports: "tennis",
       everyday: "run"
    }
  };
 
 function getClone (obj) {
    let result = {};
    for (let key in obj) {
       result[key] = obj[key];
    }
    
    return result;
 }
 getClone(user);
 
 //2 - С помощью Object.assign(result, user)//
 
 //Функция по глубокому клонорованию объектов
 
 const original = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'swimming']
  };
 
 function getDeepClone (obj) {
    let result = {};
    for (let key in obj) {
       if (typeof key === 'object') {
          result[key] = getDeepClone(obj[key]);
       } else 
       result[key] = obj[key];
    }
    
    return result;
 }
 getDeepClone(original);
 
 const deepClone = getDeepClone(original);
 deepClone.hobbies.push('cooking');
 
 console.log(original); 
 console.log(deepClone); 
 
 //Написать функцию-калькулятор вручную введённого выражения 
 //Должны работать операции + - * / и скобки,
 //числа должны приниматься целые, дробные (через точку),
 //отрицательные Например, вызываем функцию, 
 //передавая ей строку 2*(3+1), функция возвращает 8.
 
 
 
 //На странице simply.html написать javascript-код, находящий 
 //и выводящий в консоль (console.log) все простые числа в интервале от 1 до 1000.
 //Общее количество простых чисел: 168
 
 
 
 
 //Напишите функцию для оборачивания текста в тег, с которой можно 
 //было бы работать в следующем стиле:
 //var wrapH1=buildWrapper("H1"); // строим функцию для оборачивания текста в тег H1
 //var wrapP=buildWrapper("P"); // строим функцию для оборачивания текста в тег P
 //console.log( wrapH1("СТИХИ") ); // в консоль выводится строка "<H1>СТИХИ</H1>"
 //console.log( wrapP("Однажды в студёную зимнюю пору") ); // в консоль выводится строка "<P>Однажды в студёную зимнюю пору</P>"
 //Функция должна учитывать, что некоторые символы надо замеменять на HTML-мнемоники:
 //console.log( wrapP("Вкусные M&M's") ); // в консоль выводится строка "<P>Вкусные M&M's</P>"
 
 function wrapH1(text) {
    return `<H1>${text}</H1>`;
 };
 
 function wrapP(text) {
    return `<P>${text}</P>`;
 };
  
 wrapH1("СТИХИ");
 wrapP("Однажды в студёную зимнюю пору");
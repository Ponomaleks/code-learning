// ================================ ЗАДАЧИ JS ================================

// ------------------------------- Task 4 -------------------------------
// У нас есть объект, нужно создать функцию, которая будет его перебирать
// и если значение какого-то поля это массив (сделать проверку на массив),
// в таком случае добавляем к объекту obj1 поля в формате 'I like элемент массива', после вызова функции мы должны
// получить объект вот в таком виде
// {
//     'I like c++': "c++",
//     'I like java': "java",
//     'I like js': "js",
//     'i like my work': true,
//     'my name': "John",
//     'programming languages': ['js', 'java', 'c++']
// }
const obj1 = {
  'my name': 'John',
  'i like my work': true,
  'programming languages': ['js', 'java', 'c++'],
};

function searchArr(obj) {
  for (item in obj) {
    if (Array.isArray(obj[item])) {
      for (const element of obj[item]) {
        const paramName = `I like ${[element]}`;
        const newObj = { [paramName]: element };
        obj = { ...obj, ...newObj };
      }
    }
  }

  return obj;
}
console.log(searchArr(obj1));

// console.log(obj1['my name']);
// ------------------------------- Task 5 -------------------------------
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

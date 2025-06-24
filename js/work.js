//1.
const numbers = [2, 22, 222];
numbers[1] = 10;
console.log(numbers);

//2.
const string = ["манго", "ківі", "банан"];
string.push("авокадо");
console.log(string);

//3.
let arr = [23, 1, 5];
let sum = 0;
for (let num of arr) {
  sum += num;
}
console.log(sum);

//4.
let nums = [8, 42, 62, 8, 1];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

//5.
const words = ["стіл", "вікно", "телефон", "пенал", "ручка"];
for (let word of words) {
  if (word.length > 5) {
    console.log(word);
  }
}

//6.
let nimber = [9, 65, 17, 5, 1, 33, 987, 1, 3, 10];
let max = nimber[0];
for (let num of nimber) {
  if (num > max) {
    max = num;
  }
}
console.log(max);

//7.
let nomber = [9, 65, 17, 5, 22, 33, 988, 1, 3, 8];
for (let num of nomber) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

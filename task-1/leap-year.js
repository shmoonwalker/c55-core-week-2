import promptSync from 'prompt-sync';
const prompt = promptSync();


const yearInput = prompt("Enter a year: ");
const year = Number(yearInput);

if (isNaN(year) || year < 1 || year > 9999) {
  console.log("Not a valid year. Please try again.");
  return;
const isLeapYear =
  (year % 4 === 0 && year % 100 !== 0) ||
  (year % 400 === 0);

if (isLeapYear) {
  console.log("Yes," + year + "is a leap year");
} else {
  console.log("No, " + year + "is not a leap year");
}

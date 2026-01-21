import promptSync from 'prompt-sync';
const prompt = promptSync();


const year = Number(prompt("Enter a year: "));

if (isNaN(year) || year === "") {
    console.log("Not a Valid Year.Plese Tryy Again");
}
if (year <= 1 && year >= 9999) {
    console.log("Not a Valid Year.Plese Tryy Again");
}
else {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log("Yes, " + year + " is a leap year");
            }
            else console.log("No, " + year + " is not a leap year");
        }
        else console.log("Yes, " + year + " is a leap year");
    }
    else console.log("No, " + year + " is not a leap year");
}

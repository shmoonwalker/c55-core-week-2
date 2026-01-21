import promptSync from "prompt-sync";
const prompt = promptSync();

// Exchange rate for EUR/USD (How much 1 EUR is in USD)
const EUR_USD_RATE = 1.1643;

// Menu display
console.log("Hello and welcome to the currency converter. Please choose:");
console.log("1: Convert EUR to USD");
console.log("2: Convert USD to EUR");
console.log("3: Display current exchange rate");

const menuSelection = prompt("Select your option [1, 2 or 3]: ");
console.log("\n");

if (menuSelection === "") {
  console.log("Invalid option. Please choose 1, 2, or 3.");
} else if (menuSelection === "1") {
  // EUR to USD
  const eurAmountInput = prompt("Enter amount in EUR: ");

  if (eurAmountInput === "") {
    console.log("Please enter a valid positive number for the amount.");
  } else {
    const eurAmountNum = Number(eurAmountInput);

    if (Number.isNaN(eurAmountNum) || eurAmountNum <= 0) {
      console.log("Please enter a valid positive number for the amount.");
    } else {
      const usdAmount = eurAmountNum * EUR_USD_RATE;
      console.log(
        eurAmountNum.toFixed(2) +
          " EUR is equal to " +
          usdAmount.toFixed(2) +
          " USD."
      );
    }
  }

} else if (menuSelection === "2") {
  // USD to EUR
  const usdAmountInput = prompt("Enter amount in USD: ");

  if (usdAmountInput === "") {
    console.log("Please enter a valid positive number for the amount.");
  } else {
    const usdAmountNum = Number(usdAmountInput);

    if (Number.isNaN(usdAmountNum) || usdAmountNum <= 0) {
      console.log("Please enter a valid positive number for the amount.");
    } else {
      const eurAmount = usdAmountNum / EUR_USD_RATE;
      console.log(
        usdAmountNum.toFixed(2) +
          " USD is equal to " +
          eurAmount.toFixed(2) +
          " EUR."
      );
    }
  }

} else if (menuSelection === "3") {
  // Display current exchange rate
  console.log("Current exchange rate: 1 EUR = " + EUR_USD_RATE.toFixed(4) + " USD");

} else {
  console.log("Invalid option. Please choose 1, 2, or 3.");
}

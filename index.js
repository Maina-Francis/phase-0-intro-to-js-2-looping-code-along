function writeCards(names, eventName) {
  let thankYouCard = [];
  for (let i = 0; i < names.length; i++) {
    thankYouCard.push(
      `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
    );
  }
  return thankYouCard;
}

names = ["Charlie", "Samip", "Ali"];
console.log(writeCards(names, "birthday"));

function countDown(num) {
  while (num >= 0) {
    console.log(num--);
  }
}

countDown(10);

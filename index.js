// Code your solutions in this file


function writeCards(names, event) {
  let writtenCards = []
  for (let i = 0; i < names.length; i++) {
    writtenCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return writtenCards;
}


function countdown(number) {
  while (number > 0) {
    console.log(`counting down from ${number}`);
    number -= 1;
  }
  console.log(number);
  }
}

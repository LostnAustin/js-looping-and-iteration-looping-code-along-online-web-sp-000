// Code your solutions in this file


function writeCards(names, event) {
  let writtenCards = []
  for (let i = 0; i < names.length; i++) {
    writtenCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return writtenCards;
}


// let countDown = number
// while (countDown > 0) {
//   console.log(countDown--);
// }
//
function countdown(number) {
  while (number > 0) {
    console.log(number);
    number--;
  }
  console.log(countdown);
  }
}

// Code your solutions in this file


function writeCards(names, event) {
  let writtenCards = []
  for (let i = 0; i < names.length; i++) {
    writtenCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return writtenCards;
}


let countdown = number
while (countdown > 0) {
  console.log(countdown--);
}
//
// function countdown(number) {
//   while (countdown(number) > 0) {
//     console.log(number);
//     countdown(number) -= 1;
//   }
//   console.log(countdown(number));
//   }
// }

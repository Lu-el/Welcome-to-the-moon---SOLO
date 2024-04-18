//создание колоды

const changeType = (word, code) => {
  for (let key in code) {
    if (word == key) {
      return code[key]
    }
  }
}

const deckCreate = (signs, date) => {

  const cardList = date.split(' ');

  const deck = cardList.map((item) => {
    const oneCard = {
      type: changeType(item.substring(0, 1), signs),
      number: +item.replace(/[^0-9]/g, ""),
      usedSolo: false,
      countUses: 0
    }
    return oneCard;
  })

  return deck;
}

// проверка на правильность заполнения

// перемештвание

export const shuffle = (deck) => {
  const newArray = Array.from(deck);
  let currentIndex = newArray.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]];
  }
  return newArray;

}

// добавление карт Астра  и перемешивание

const addAstra = (deck) => {
  const deckWithAstra = Array.from(deck);
  const firstPart = deckWithAstra.slice(0, deck.length / 3 * 2);
  const secondPart = deckWithAstra.slice(deck.length / 3 * 2, deck.length);
  const astraA = {
    type: 'Astra',
    number: 'A',
    usedSolo: false,
    countUses: 0
  };
  const astraB = {
    type: 'Astra',
    number: 'B',
    usedSolo: false,
    countUses: 0
  };
  const astraC = {
    type: 'Astra',
    number: 'C',
    usedSolo: false,
    countUses: 0
  };
  secondPart.push(astraA, astraB, astraC);
  const deckAstra = shuffle(secondPart);

  deckAstra.forEach(item => firstPart.push(item))

  return firstPart;
}

export const getNewDeck = (signs, example) => {
  const deck = deckCreate(signs, example);
  const shuffledDeck = shuffle(deck);
  const readyDeck = addAstra(shuffledDeck);

  return readyDeck;
}


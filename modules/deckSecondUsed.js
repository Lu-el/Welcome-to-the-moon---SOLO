const shuffle = (array) => {
  const newArray = Array.from(array);
  let currentIndex = newArray.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]];
  }
  return newArray;
}

export const deckSecondUsed = (deckFirst) => {
	const deckForUse = deckFirst.filter(item => !item.usedSolo);
	const deckSecond = shuffle(deckForUse);

	return deckSecond;
}


import { deck, signs } from "./deck2.js";
import { getNewDeck } from "./modules/getNewDeck.js";
import { changeSoloTotal, choosingSolo, soloTableLayot } from './modules/choosingSolo.js'
import { cardLayot } from "./modules/cardLayot.js";
import { deckSecondUsed } from "./modules/deckSecondUsed.js";
import { getCardsCount } from "./modules/getCardsCount.js";
import { startGameSettings, startGame } from "./modules/startGame.js";



const buttonNewDeckAction = (deck, tableCard, soloTotal, tableSolo, setGame) => {
  const button = document.querySelector('.button-next__link_second');
  const checkEnd = deck.filter(item => item.countUses == 2);

  if (checkEnd.length === deck.length) {
    button.textContent = 'Конец игры';
    return;
  }

  const deckSecond = deckSecondUsed(deck);
  console.log(deckSecond);

  if (tableCard.innerHTML == "") {
    nextCardsFirstUse(deckSecond, tableCard, soloTotal, tableSolo, setGame, button, 2);
  }
  button.addEventListener('click', () => {
    const soloCard = document.querySelector('.table-card__column_solo');

    if (!soloCard) { return }

    const index = [...tableCard.children].indexOf(soloCard);

    if (deckSecond[index].type === "Astra") { return }
    deckSecond[index].usedSolo = true;

    changeSoloTotal(soloCard, soloTotal);
    soloTableLayot(tableSolo, soloTotal, setGame.level);
    removeUsedCard(tableCard);
    nextCardsFirstUse(deckSecond, tableCard, soloTotal, tableSolo, setGame, button, 2);
  })
}

const changeButtonName = () => {
  const buttonNext = document.querySelector('.button-next');
  const buttonNewDeck = document.querySelector('.button__new-deck');
  buttonNext.classList.remove('visually-hidden');
  buttonNewDeck.classList.add('visually-hidden');
  buttonNewDeck.textContent = 'Новая колода';
}

const changeButtonDeck = (button, shufledDeck, tableCard, soloTotal, tableSolo, setGame) => {
  tableCard.innerHTML = "";
  if (button) {
    button.classList.add('visually-hidden');
    const buttonNewDeck = document.querySelector('.button-next__link_second');
    buttonNewDeck.classList.remove('visually-hidden');

    buttonNewDeckAction(shufledDeck, tableCard, soloTotal, tableSolo, setGame);
  } else {
    return
  }
}

const removeUsedCard = (tableCard) => {
  if (!tableCard) { return }
  const columns = tableCard.querySelectorAll('.cards__item');

  for (let column of columns) {
    column.classList.add('visually-hidden');
    column.classList.remove('cards__item_active');
    if (column.classList.contains('table-card__column_solo')) {
      column.classList.remove('table-card__column_solo');
    }
  }
}

const nextCardsFirstUse = (deck, tableCard, soloTotal, tableSolo, setGame, button, used = 1) => {
  let count = 3;
  const newArray = deck.filter(item => item.countUses < used);
  getCardsCount(newArray, 'rest-cards__word_animation');

  if ((newArray.length <= 6 && newArray.length)
    && (newArray[newArray.length - 1].type === 'Astra')) {
    count++;
    if (newArray[newArray.length - 2].type === 'Astra') {
      count++;
      if (newArray[newArray.length - 3].type === 'Astra') {
        count++;
      }
    }
  }

  if (!newArray.length) {
    changeButtonDeck(button, deck, tableCard, soloTotal, tableSolo, setGame);
    return;
  }
  newArray.forEach((element, index) => {
    if ((index < count) && (element.type == "Astra")) {
      count++;
    }
  });

  const arrayForScreen = newArray.slice(0, count)
  cardLayot(arrayForScreen, count, tableCard);
}

const buttonNextCard = (shufledDeck, tableCard, soloTotal, tableSolo, setGame) => {
  const button = document.querySelector('.button-next__link_first');
  button.addEventListener('click', () => {
    const soloCard = document.querySelector('.table-card__column_solo');

    if (!soloCard) { return }

    const index = [...tableCard.children].indexOf(soloCard);

    if (shufledDeck[index].type === "Astra") { return }
    shufledDeck[index].usedSolo = true;

    changeSoloTotal(soloCard, soloTotal);
    soloTableLayot(tableSolo, soloTotal, setGame.level);
    removeUsedCard(tableCard);
    nextCardsFirstUse(shufledDeck, tableCard, soloTotal, tableSolo, setGame, button);
  })
}

const game = (shufledDeck, tableCard, soloTotal, tableSolo, setGame) => {
  nextCardsFirstUse(shufledDeck, tableCard, soloTotal, tableSolo, setGame);
  choosingSolo(tableCard);
  buttonNextCard(shufledDeck, tableCard, soloTotal, tableSolo, setGame);
}

const init = () => {
  const newDeck = getNewDeck(signs, deck);
  const tableCard = document.querySelector('.cards__overloy');
  const tableSolo = document.querySelector('.table-solo__body');
  const soloCards = document.querySelector('solo-cards');
  const soloTotal = [];
  const setGame = {
    level: 1,
    scenario: 1,
  };
  const level = document.querySelector('.start-game__select_bot');
  const scenario = document.querySelector('.start-game__select_scenario');
  const buttonStart = document.querySelector('.start-game__button');
  startGameSettings(level);
  startGameSettings(scenario);
  startGame(buttonStart, level, scenario, setGame, soloCards);

  game(newDeck, tableCard, soloTotal, tableSolo, setGame);
}

init();

// Выберите миссию и уровень сложности бота



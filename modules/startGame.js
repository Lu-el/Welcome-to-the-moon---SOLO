import { bot, scenarios } from "../deck2.js";
import { getBot, soloCardsScenario } from "./choosingSolo.js";

export const startGameSettings = (wrapper) => {
  const defaultEle = wrapper.querySelector(".select__default");
  const defaultEleLi = defaultEle.querySelector("li");
  defaultEle.addEventListener('click', () => {
    defaultEle.parentNode.classList.toggle("active");
  })

  const selectElems = wrapper.querySelectorAll("li");
  for (let selectEle of selectElems) {
    selectEle.addEventListener('click', (e) => {
      const target = e.target;
      const activeElem = target.closest('li').innerHTML;

      defaultEleLi.innerHTML = activeElem;
      defaultEle.closest(".select__wrap").classList.remove("active");
    })
  }
}

const getNumberString = (selectContainer) => {
  const botChoice = selectContainer.querySelector('.select__default');
  const botName = botChoice.querySelector('.select__text');
  const number = botName.innerHTML.replace(/[^0-9]/g, "");
  return number;
}

export const startGame = (button, level, scenario, setGame) => {
  button.addEventListener('click', () => {
    const container = document.querySelector('.solo-cards');
    const botLevel = getNumberString(level);
    const scenarioLevel = getNumberString(scenario);
    setGame.level = +botLevel;
    setGame.scenario = +scenarioLevel;
    const botObj = getBot(bot, setGame.level);
    const scenarioObj = getBot(scenarios, setGame.scenario);
    const start = document.querySelector('.start-game');
    start.classList.add('visually-hidden');
    soloCardsScenario(container, botObj, scenarioObj);
  })
}
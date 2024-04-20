import { signs, signColor, bot } from "../deck2.js";

const getTotal = (result) => {
  const res = result.reduce((acc, i) => {
    if (acc.hasOwnProperty(i)) {
      acc[i] += 1;
    } else {
      acc[i] = 1;
    }
    return acc;
  }, {})

  return res;
}

const getRandomNumber = (min, max) => {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export const getBot = (array, level) => {
  const result = array.filter(item => item.level == level);
  return result[0];
}


export const soloTableLayot = (container, cards, level, scenario) => {
  container.innerHTML = "";
  let total = 0;

  const totalCards = getTotal(cards);
  const botLevel = getBot(bot, level);

  for (let key in totalCards) {
    const row = document.createElement('tr');
    row.classList.add('table-solo__row-data');
    row.style.backgroundColor = signColor[key];

    const tdImage = document.createElement('td');
    tdImage.classList.add('table-solo__data', 'table-solo__data_image');
    const img = document.createElement('img');
    img.classList.add('table-solo__img');
    img.alt = key,
      img.src = signs[key];
    tdImage.append(img);

    const tdType = document.createElement('td');
    tdType.classList.add('table-solo__data', 'table-solo__data_type');
    tdType.innerHTML = key;

    const tdCount = document.createElement('td');
    tdCount.classList.add('table-solo__data', 'table-solo__data_count');
    tdCount.innerHTML = totalCards[key];

    const tdLevel = document.createElement('td');
    tdLevel.classList.add('table-solo__data', 'table-solo__data_level');
    tdLevel.innerHTML = botLevel.cards[key];
    total = total + totalCards[key] * botLevel.cards[key];

    row.append(tdImage, tdType, tdCount, tdLevel);
    container.append(row);
  }

  const row = document.createElement('tr');
  row.classList.add('table-solo__row-data');
  const td1 = document.createElement('td');
  const tdName = document.createElement('td');
  tdName.classList.add('table-solo__data', 'table-solo__data_type')
  tdName.innerHTML = "Итого"
  const td3 = document.createElement('td');
  const tdTotal = document.createElement('td');
  tdTotal.classList.add('table-solo__data', 'table-solo__data_level');
  tdTotal.innerHTML = total;
  
  if (scenario == 1) {
    td3.classList.add('table-solo__data', 'table-solo__data_level');
    tdName.innerHTML = "Максимум/Итого"
    if (level === 1) {
      td3.innerHTML = 81 - 15 
    } else {
      td3.innerHTML = 81 - (2 * (8 - level))
    }
    if (total >= +td3.innerHTML) {
      tdTotal.style.color = 'red';
    }
  }

  row.append(td1, tdName, td3, tdTotal);

  container.append(row);
}

export const choosingSolo = (container) => {
  container.addEventListener('click', (e) => {
    const target = e.target;
    const soloColumn = target.closest('.cards__item');
    const columns = document.querySelectorAll('.cards__item');

    columns.forEach((item, index) => {
      if (item.classList.contains('table-card__column_solo')) {
        item.classList.remove('table-card__column_solo')
      }
    });
    soloColumn.classList.add('table-card__column_solo')
  })
}

export const changeSoloTotal = (solocard, soloTotal) => {
  const imgCard = solocard.firstChild;
  const typeCard = imgCard.getAttribute("alt");
  soloTotal.push(typeCard);
}

export const soloCardsScenario = (container, bot, scenario) => {
  const imgLevel = document.createElement('img');
  imgLevel.classList.add('solo-cards__img');
  imgLevel.src = bot.url;

  const imgScenario = document.createElement('img');
  imgScenario.classList.add('solo-cards__img');
  imgScenario.src = scenario.urlBot;

  container.append(imgLevel, imgScenario);
  footerLayot(scenario);
}

const footerLayot = (scenario) => {
  const container = document.querySelector('.mission__container');

  scenario.missions.forEach(item => {
    const index = getRandomNumber(0, (item.mission.length - 1));
    const goal = item.mission[index];

    const card = document.createElement('div');
    card.classList.add('mission__card');
    card.style = '--clr: #009688';

    const imgBox = document.createElement('div');
    imgBox.classList.add('mission__img-box');

    const img = document.createElement('img');
    img.classList.add('mission__img');
    img.src = goal.url;
    imgBox.append(img);

    const content = document.createElement('div');
    content.classList.add('mission__content');

    const title = document.createElement('h2');
    title.classList.add('mission__title');
    title.innerHTML = item.type;

    const parag = document.createElement('p');
    parag.classList.add('mission__text');
    parag.innerHTML = goal.description;

    content.append(title, parag);

    const points = document.createElement('div');
    points.classList.add('mission__points');

    const point1 = document.createElement('div');
    point1.classList.add('mission__point', 'mission__point_first');
    point1.innerHTML = goal.points[0];

    const point2 = document.createElement('div');
    point2.classList.add('mission__point', 'mission__point_second');
    point2.innerHTML = goal.points[1];

    points.append(point1, point2);

    card.append(imgBox, content, points);
    container.append(card);
  })
}

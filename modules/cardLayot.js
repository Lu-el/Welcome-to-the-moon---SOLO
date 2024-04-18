import { signs } from "../deck2.js";

const getImgCard = (typeCard, signs) => {
  return signs[typeCard];
}

export const cardLayot = (deck, count, container) => {
  for (let i = 0; i < count; i++) {
    const item = document.createElement('div');
    item.classList.add('cards__item', 'cards__item_active');

    const img = document.createElement('img');
    img.classList.add('cards__img');
    if (!deck[i]) { return }
    img.src = getImgCard(deck[i].type, signs);
    img.alt = deck[i].type;

    const divNumber = document.createElement('div');
    divNumber.classList.add('cards__title');
    divNumber.textContent = deck[i].number;

    item.append(img, divNumber);
    deck[i].countUses++;

    container.append(item)
  }

  // return cardsScreen;
}




/* <div class="table-card__column">
  <img class="table-card__picture" data-type="picture" src="https://i.pinimg.com/236x/f8/8c/c3/f88cc3ba785683dd6a1cda3fd04b5a1f.jpg" alt="">
  <div class="table-card__number" data-type="number">1</div>
</div> */
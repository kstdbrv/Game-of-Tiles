import { FLIP_CARD, RESTART_GAME } from '../actions/actionTypes'
import generateCards from '../../data/cards'


const initialState = {
  round : 1,
  guess1 : null,
  guess2 : null,
  cards : generateCards()
};

const memory = (state = initialState, action) => {
  switch (action.type) {

      case FLIP_CARD:

          let newState = { round : state.round + 1 };
                  // четный раунд (открыты две карты)
          if (state.round % 2 == 1) {
              
              let cardClicked = state.cards.find((card) => {
                  return card.id === action.id;
              });

              Object.assign(newState, {
                  guess1 : cardClicked.id,
                  guess2 : null,
                  cards: state.cards.map((card) => {
                      return card.id === action.id ?
                      Object.assign({}, card, { flipped : true }) :
                      Object.assign({}, card, { flipped : false })
                  })
              })
          } else {  // нечетный раунд (открыта одна карта)
              let cardClicked = state.cards.find((card) => {
                  return card.id === action.id;
              });
                    // если карточки совпали
              if(cardClicked.rel === state.guess1) {
                  Object.assign(newState, {
                      guess1 : state.guess1,
                      guess2 : cardClicked.rel,
                      cards: state.cards.map((card) => {
                          return (card.id === action.id || card.id === state.guess1) ?
                          Object.assign({}, card, { flipped : true, discovered : true }) :
                          card
                      })
                  })
              } else { // если карточки не совпали
                  Object.assign(newState, {
                      guess1 : state.guess1,
                      guess2 : cardClicked.rel,
                      cards: state.cards.map((card) => {
                          return card.id === action.id ?
                          Object.assign({}, card, { flipped : true }) :
                          card
                      })
                  })
              }
          }

          return newState;

      case RESTART_GAME :

          return {
              round : 1,
              guess1 : null,
              guess2 : null,
              cards : generateCards()
          };

      default:
          return state;
  }
}

export default memory
import { FLIP_CARD, RESTART_GAME } from './actionTypes';

export function restartGame() {
  return {
    type: RESTART_GAME
  }
}

export function setFlipCard(id) {
  return {
    type: FLIP_CARD,
    id
  }
}
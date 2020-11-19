import React from 'react'
import './card-listitem.css'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import { setFlipCard } from '../../store/actions/quiz'

const CardListItem = ({ card }) => {
    
  const dispatch = useDispatch()

  let cardClass = classNames({
    'grid__item' : true,
    'flipper' : true,
    'flipped' : card.flipped || card.discovered
    });

  return (
      <div className={cardClass}>
        <div className="front" onClick={() => dispatch(setFlipCard(card.id))}></div>
        <div className="back">
          <img src={card.url} />
        </div>
      </div>
    );
}

export default CardListItem

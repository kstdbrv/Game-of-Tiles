import React from 'react'
import {  useSelector } from 'react-redux'
import './quiz.css'
import CardListItem from '../../components/card-listitem/CardListItem'


const Quiz = () => {

  const { cards } = useSelector(state => state.memory)

  return (
    <div className="grid">
    {
      cards.map(card =>
        <CardListItem
          key={card.id}
          card={card}
        />
      )
    }
  </div>
  )
}

export default Quiz
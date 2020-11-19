import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { restartGame } from '../../store/actions/quiz'
import './counter.css'


const Counter = () => {

  const { round } = useSelector(state => state.memory)
  const dispatch = useDispatch()

  return (
    <div className="counter">
      <h2>Round: {round}</h2>
      <a className="waves-effect waves-light btn"
        onClick={() => dispatch(restartGame())}
        disabled={round === 0}
      >
        Restart
      </a>
    </div> 
  )
}

export default Counter
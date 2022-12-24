import React, { useState } from 'react';

const History = (props) => {
  if(props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      the button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)
  const [ allClicks, setAll ] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button text={'left'} handleClick={handleLeftClick} />
      <Button text={'right'} handleClick={handleRightClick} />
      {right}
      <History allClicks={allClicks} />         
    </div>
  )
}

export default App;

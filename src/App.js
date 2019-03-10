import React from 'react'
import GameOfLife from './GameOfLife'
import { generateGrid } from './game'

const App = () => (
  <GameOfLife
    width={60}
    height={59}
    initialGrid={generateGrid(60, 59)}
  />
)

export default App

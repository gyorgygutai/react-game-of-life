import React, { useState, useEffect } from 'react'
import { number, array } from 'prop-types'
import { tick } from './game'
import { Stage, Layer, Rect } from 'react-konva'
import Konva from 'konva'

const GameOfLife = ({ width, height, speed, initialGrid }) => {
  const [grid, setGrid] = useState(initialGrid)

  const update = () => setGrid(tick(grid))

  useEffect(() => {
    const timerId = setTimeout(update, speed)

    return () => {
      clearTimeout(timerId)
    }
  })

  const { innerWidth, innerHeight } = window
  const stageWidth = innerWidth < innerHeight ? innerWidth : innerHeight
  const stageHeight = innerHeight

  const cellWidth = stageWidth / width
  const cellHeight = innerHeight / height

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Stage
        width={stageWidth}
        height={stageHeight}
      >
        <Layer>
          {grid.map((row, y) => (
            row.map((isAlive, x) => (
              <Rect
                key={`${y}${x}`}
                x={x * cellWidth}
                y={y * cellHeight}
                width={cellWidth}
                height={cellHeight}
                stroke="rgba(0, 0, 0, .009)"
                strokeWidth={1}
                fill={isAlive && Konva.Util.getRandomColor()}
              />
            ))
          ))}
        </Layer>
      </Stage>
    </div>
  )
}

GameOfLife.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  speed: number.isRequired,
  initialGrid: array.isRequired
}

export default GameOfLife

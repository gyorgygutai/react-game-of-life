export const tick = (grid) => (
  grid.map((row, y) => (
    row.map((isAliveNow, x) => (
      Number(isAliveNext(
        isAliveNow,
        countLiveNeighbours(grid, y, x)
      ))
    ))
  ))
)

const neighbourPositions = [
  [-1, -1], [-1, 0], [-1, 1],
  [0, - 1], [0, 1],
  [1, -1], [1, 0], [1, 1]
]

const countLiveNeighbours = (grid, y, x) => {
  return neighbourPositions.reduce((count, coord) => {
    const row = grid[y + coord[0]]

    return count + (row && row[x + coord[1]] || 0)
  }, 0)
}

const isAliveNext = (isAlive, numLiveNeighbours) => {
  return numLiveNeighbours === 3 || (isAlive && numLiveNeighbours === 2)
}

export const generateGrid = (width, height) => (
  new Array(height)
    .fill([])
    .map(() => (
      new Array(width)
        .fill(0)
        .map(() => Math.floor((Math.random() * 2)))
    ))
)

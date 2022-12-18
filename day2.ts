import { readFileSync } from 'fs'

const INPUT = './inputs/day2.txt'

enum Shape {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
}

enum Score {
  Loss = 0,
  Draw = 3,
  Win = 6,
}

const ABC = {
  A: Shape.Rock,
  B: Shape.Paper,
  C: Shape.Scissors,
}

const XYZ = {
  X: Shape.Rock,
  Y: Shape.Paper,
  Z: Shape.Scissors,
}

function getScore(a: Shape, b: Shape): Score {
  if (a == b) return Score.Draw
  if (
    (a == Shape.Rock && b == Shape.Paper) ||
    (a == Shape.Paper && b == Shape.Scissors) ||
    (a == Shape.Scissors && b == Shape.Rock)
  )
    return Score.Win
  else return Score.Loss
}

function main(): void {
  const lines = readFileSync(INPUT).toString().split('\n')
  const values: number[] = []
  lines.forEach((line) => {
    const [a, b] = line.split(' ') as [keyof typeof ABC, keyof typeof XYZ]
    const shapeA = ABC[a]
    const shapeB = XYZ[b]
    const score = getScore(shapeA, shapeB)
    values.push(shapeB + score)
  })
  console.log(values.reduce((a, b) => a + b, 0))
}

main()

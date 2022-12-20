import { readFileSync } from 'fs'

const INPUT = './inputs/day2.txt'

const scoreMap = {
  'A X': 4,
  'A Y': 8,
  'A Z': 3,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 7,
  'C Y': 2,
  'C Z': 6,
}

type key = keyof typeof scoreMap

const strategyMap = {
  'A X': 'A Z',
  'A Y': 'A X',
  'A Z': 'A Y',
  'B X': 'B X',
  'B Y': 'B Y',
  'B Z': 'B Z',
  'C X': 'C Y',
  'C Y': 'C Z',
  'C Z': 'C X',
}

function main(): void {
  const lines = readFileSync(INPUT).toString().split('\n')
  const part1: number[] = []
  const part2: number[] = []
  lines.forEach((line) => {
    const key = line as key
    part1.push(scoreMap[key])
    part2.push(scoreMap[strategyMap[key] as key])
  })
  console.log(part1.reduce((a, b) => a + b, 0))
  console.log(part2.reduce((a, b) => a + b, 0))
}

main()

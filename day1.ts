import { readFileSync } from 'fs'

const INPUT = './inputs/day1.txt'

function part1(lines: string[]): number[] {
  const values: number[] = []
  let _values: number[] = []
  lines.forEach((line) => {
    if (line === '') {
      values.push(_values.reduce((a, b) => a + b, 0))
      _values = []
    } else _values.push(parseInt(line))
  })

  console.log(Math.max(...values))
  return values
}

function part2(values: number[]): void {
  const maxValues: number[] = []
  for (let i = 0; i < 3; i++) {
    const max = Math.max(...values)
    maxValues.push(max)
    values = values.filter((v) => v != max)
  }

  console.log(maxValues.reduce((a, b) => a + b, 0))
}

function main(): void {
  const lines = readFileSync(INPUT).toString().split('\n')
  const values = part1(lines)
  part2(values)
}

main()

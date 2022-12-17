import { readFileSync } from 'fs'

const INPUT = './inputs/day1.txt'

function main(): void {
  const lines = readFileSync(INPUT).toString().split('\n')
  const values: number[] = []
  let _values: number[] = []
  lines.forEach((line) => {
    if (line === '') {
      values.push(_values.reduce((a, b) => a + b, 0))
      _values = []
    } else _values.push(parseInt(line))
  })
  console.log(Math.max(...values))
}

main()

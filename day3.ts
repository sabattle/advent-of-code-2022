import { readFileSync } from 'fs'

const INPUT = './inputs/day3.txt'

function getPriority(char: string): number {
  if (char === char.toUpperCase()) return char.charCodeAt(0) - 38
  else return char.charCodeAt(0) - 96
}

function part1(lines: string[]): void {
  const values: number[] = []
  lines.forEach((line) => {
    const compartment1 = line.slice(0, line.length / 2).split('')
    const compartment2 = line.slice(line.length / 2, line.length).split('')
    const intersection = new Set(
      compartment1.filter((item) => compartment2.includes(item)),
    )
    intersection.forEach((char) => values.push(getPriority(char)))
  })
  console.log(values.reduce((a, b) => a + b, 0))
}

function part2(lines: string[]): void {
  const values: number[] = []
  for (let i = 0; i < lines.length; i += 3) {
    const elf1 = lines[i].split('')
    const elf2 = lines[i + 1].split('')
    const elf3 = lines[i + 2].split('')
    const intersection = new Set(
      elf1.filter((item) => elf2.includes(item) && elf3.includes(item)),
    )
    intersection.forEach((char) => values.push(getPriority(char)))
  }
  console.log(values.reduce((a, b) => a + b, 0))
}

function main(): void {
  const lines = readFileSync(INPUT).toString().split('\n')
  part1(lines)
  part2(lines)
}
main()

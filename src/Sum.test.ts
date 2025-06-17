// sum.test.ts
import { describe, expect, test } from 'vitest'
import { sum } from './sum'

describe('sum()', () => {
  test('adds two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5)
    expect(sum(-1, 1)).toBe(0)
  })
})

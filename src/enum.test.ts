import { expect, it } from 'vitest'

import { getColorName } from './enum'

it('adds 1 + 2 to equal 3', () => {
  expect(getColorName('red')).toBe('Red')
})

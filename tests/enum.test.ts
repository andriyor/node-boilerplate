import { expect, it } from 'vitest'

import { getColorName } from '../src/enum'

it('adds 1 + 2 to equal 3', () => {
  expect(getColorName('red')).toBe('Red')
})

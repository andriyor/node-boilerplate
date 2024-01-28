const Color = {
  Red: 'red',
  Green: 'green',
  Blue: 'blue',
} as const

type Color = typeof Color[keyof typeof Color]

export function getColorName(c: Color): string {
  switch (c) {
    case Color.Red:
      return 'Red'
    case Color.Green:
      return 'Green'
    case Color.Blue:
      return 'Blue'
    default:
      // https://stackoverflow.com/a/75217377/5774395
      // to be sure that all enums is used at compile time
      c satisfies never
      return ''
  }
}

// handled by [switch-exhaustiveness-check | typescript-eslint](https://typescript-eslint.io/rules/switch-exhaustiveness-check)
export function getColorNameEslint(c: Color) {
  switch (c) {
    case Color.Red:
      return 'Red'
    case Color.Green:
      return 'Green'
    case Color.Blue:
      return 'Blue'
  }
}

import Typography from 'typography'
import theme from 'typography-theme-noriega'

theme.scaleRatio = 2.4

theme.headerColor = 'hsl(24, 30%, 35%)'
theme.bodyColor = 'hsl(24, 30%, 25%)'

theme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: 'hsl(240, 30%, 35%)',
  },
  'a:visited': {
    color: 'hsl(240, 30%, 15%)',
  },
  'pre, code': {
    'font-variant-ligatures': 'none',
    'overflow-x': 'scroll',
  },
})

const typography = new Typography(theme)

export default typography

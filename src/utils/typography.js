import Typography from 'typography';
import theme from 'typography-theme-noriega';

import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

theme.scaleRatio = 2.4;

theme.headerColor = 'hsl(220, 50%, 20%)';
theme.bodyColor = 'hsl(220, 50%, 10%)';

theme.overrideThemeStyles = () => ({
  a: {
    color: 'hsl(240, 10%, 30%)',
  },
  'a:visited': {
    color: 'hsl(240, 10%, 45%)',
  },
  'pre, code': {
    'font-variant-ligatures': 'none',
    'overflow-x': 'scroll',
  },
  blockquote: {
    'border-left': '3px solid',
    'padding-left': '1rem',
  },
});

const typography = new Typography(theme);

export default typography;

import styled from 'styled-components'

const Divider = styled.hr`
  margin: ${props => props.scale}rem 0;
  color: hsl(24, 30%, 35%);
`

Divider.defaultProps = { scale: 1.0 }

export default Divider

import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import typography from '../../utils/typography'

const StyledCommento = styled.div`
  &.commento-root img {
    margin-bottom: 0;
  }

  &.commento-root .commento-card {
    border-top: none;
  }

  &.commento-root .commento-submit-button {
    width: 110px;
  }

  &.commento-root .commento-card .commento-option-button,
  &.commento-root .commento-submit-button {
    background: ${typography.options.headerColor};
  }

  &.commento-root *,
  &.commento-root .commento-login .commento-login-text,
  &.commento-root .commento-card .commento-name,
  &.commento-root .commento-card .commento-score,
  &.commento-root .commento-card .commento-timeago {
    color: ${typography.options.bodyColor};
    font-family: 'Lato', sans-serif;
  }

  &.commento-root
    .commento-anonymous-checkbox-container
    input[type='checkbox']
    + label:before {
    box-sizing: initial;
  }

  &.commento-root .commento-footer {
    border-top: none;
  }
`
const Commento = () => (
  <StyledCommento id="commento">
    <Helmet>
      <script defer src="https://commento.underyx.me/js/commento.js" />
    </Helmet>
  </StyledCommento>
)

export default Commento

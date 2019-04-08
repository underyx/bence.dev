import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
`

const FooterContent = styled.div`
  flex: auto;
  display: inline-block;
  font-size: 0.8rem;
  text-align: ${props => props.side};
`

const Footer = () => (
  <>
    <StyledFooter>
      <FooterContent side="left">
        <div>Bence Nagy (underyx)</div>
        <div>
          Software Platform Lead @{' '}
          <OutboundLink href="https://code.kiwi.com/">Kiwi.com</OutboundLink>
        </div>
        <div>
          <OutboundLink href="https://goo.gl/maps/FGajx5oh2N42">
            Brno, Czechia
          </OutboundLink>
        </div>
      </FooterContent>

      <FooterContent side="right">
        <div>
          <OutboundLink href="mailto:bence@underyx.me">
            bence@underyx.me
          </OutboundLink>
        </div>
        <div>
          <OutboundLink href="tel:+420-725-511-793">
            +420&nbsp;725&nbsp;511&nbsp;793
          </OutboundLink>
        </div>
        <div>
          underyx on{' '}
          <OutboundLink href="ircs://irc.freenode.net">Freenode</OutboundLink>
        </div>
      </FooterContent>
    </StyledFooter>
  </>
)

export default Footer

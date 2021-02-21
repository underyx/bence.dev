import React from 'react';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
`;

const FooterContent = styled.div`
  flex: auto;
  display: inline-block;
  font-size: 0.8rem;
  line-height: 2;
  text-align: ${(props) => props.side};
`;

const Footer = () => (
  <>
    <StyledFooter>
      <FooterContent side="left">
        <div>Bence Nagy (underyx)</div>
        <div>
          Founder &amp; CEO @{' '}
          <OutboundLink href="https://under.ee/">Under</OutboundLink>
        </div>
        <div>
          <OutboundLink href="https://nomadlist.com/@underyx">
            Nomad, Worldwide
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
          <OutboundLink href="tel:+44-7426-418674">
            +44&nbsp;7426&nbsp;418674
          </OutboundLink>
        </div>
        <div>
          underyx on{' '}
          <OutboundLink href="ircs://irc.freenode.net">Freenode</OutboundLink>
        </div>
      </FooterContent>
    </StyledFooter>
  </>
);

export default Footer;

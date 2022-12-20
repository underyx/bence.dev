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
          Senior SWE @{' '}
          <OutboundLink href="https://r2c.dev/">r2c</OutboundLink>
        </div>
        <div>
          <OutboundLink href="https://nomadlist.com/@underyx">
            New York City
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
          <OutboundLink href="tel:+1-312-3244236">
            +1&nbsp;(312)&nbsp;324-4236
          </OutboundLink>
        </div>
        <div>
          <OutboundLink rel="me" href="https://mastodon.social/@underyx">
            @underyx@mastodon.social
          </OutboundLink>
        </div>
      </FooterContent>
    </StyledFooter>
  </>
);

export default Footer;

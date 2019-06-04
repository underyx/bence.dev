import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TalkContext from './talkcontext'

const TalkLink = styled(OutboundLink)`
  text-decoration: none;
`

const StyledTalkCard = styled.section`
  opacity: ${props => (props.isPrivate ? 0.7 : 1.0)};
`

const SubTitle = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4;
`

const TalkCard = ({ talk }) => (
  <StyledTalkCard isPrivate={talk.is_private}>
    <TalkContext talk={talk} />
    <TalkLink href={talk.video_url}>
      <h2>
        {talk.title}
        {talk.subtitle && <SubTitle>{talk.subtitle}</SubTitle>}
      </h2>
    </TalkLink>
    <p>{talk.description}</p>
    {talk.is_private && (
      <p>
        This talk was only ever held privately. Contact me if you would like me
        to publish the slides after a quick review for sensitive contents.
      </p>
    )}
    {(talk.video_url || talk.slides_url) && (
      <p>
        {talk.video_url && (
          <OutboundLink href={talk.video_url}>
            Watch the recording ➜
          </OutboundLink>
        )}
        <br />
        {talk.slides_url && (
          <OutboundLink href={talk.slides_url}>Check the slides ➜</OutboundLink>
        )}
      </p>
    )}
    {talk.is_private && (
      <p>
        This talk was only ever held privately. Contact me if you would like me
        to publish the slides after a quick review for sensitive contents.
      </p>
    )}
  </StyledTalkCard>
)

TalkCard.propTypes = { talk: PropTypes.object.isRequired }

export default TalkCard

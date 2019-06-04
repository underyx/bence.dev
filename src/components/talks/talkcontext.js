import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy'
import EventList from './eventlist'

const WhereButton = styled.button`
  margin-left: 4px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    background: rgba(200, 200, 200, 0.3);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  }
`
const StyledTalkContext = styled.div`
  margin-bottom: 0.5rem;
  font-style: italic;
`

const TalkContext = ({ talk }) => {
  let content = `Held on ${talk.date}`

  if (talk.events && talk.events.length > 1) {
    const timesText =
      talk.events.length === 2 ? 'twice' : `${talk.events.length} times`
    content += ` most recently; ${timesText} in total`
  }

  return (
    <StyledTalkContext>
      {content}{' '}
      <Tooltip
        trigger="click"
        interactive
        html={<EventList events={talk.events} />}
      >
        <WhereButton>Where?</WhereButton>
      </Tooltip>
    </StyledTalkContext>
  )
}

TalkContext.propTypes = {
  talk: PropTypes.object.isRequired,
}

export default TalkContext

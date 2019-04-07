import React from 'react'
import styled from 'styled-components'

const StyledPublishInfo = styled.div`
  margin-bottom: 0.5rem;
  font-style: italic;
`

const PublishInfo = ({ publishDate, revisionDate }) => (
  <StyledPublishInfo>
    Published on {publishDate}
    {revisionDate ? `, last revised on ${revisionDate}` : ''}
  </StyledPublishInfo>
)

export default PublishInfo

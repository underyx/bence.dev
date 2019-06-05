import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledPublishInfo = styled.div`
  margin-bottom: 0.5rem;
  font-style: italic;
`

const PublishInfo = ({ publishDate, revisionDate, publication }) => (
  <StyledPublishInfo>
    Published on {publishDate}
    {revisionDate && `, last revised on ${revisionDate}`}
    {publication && `, in ${publication}`}
  </StyledPublishInfo>
)

PublishInfo.propTypes = {
  publishDate: PropTypes.string.isRequired,
  revisionDate: PropTypes.string,
  publication: PropTypes.string,
}
PublishInfo.defaultProps = {
  revisionDate: null,
  publication: null,
}

export default PublishInfo

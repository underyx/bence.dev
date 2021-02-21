import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import typography from '../../utils/typography';

const StyledLabels = styled.div``;

const Label = styled.span`
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
  border: 1px solid ${typography.options.bodyColor};
  border-radius: 4px;
  padding: 0 4px;
  margin-top: 4px;
  margin-right: 4px;
  white-space: nowrap;
  opacity: ${(props) => (props.primary ? '1.0' : '0.7')};

  &:last-child {
    margin-right: 0;
  }
`;

Label.propTypes = { primary: PropTypes.bool.isRequired };
Label.defaultProps = { primary: true };

const Labels = ({ primary, secondary }) => (
  <StyledLabels>
    {primary.map((text) => (
      <Label primary>{text}</Label>
    ))}
    {secondary.map((text) => (
      <Label primary={false}>{text}</Label>
    ))}
  </StyledLabels>
);

Labels.propTypes = {
  primary: PropTypes.arrayOf(PropTypes.string),
  secondary: PropTypes.arrayOf(PropTypes.string),
};
Labels.defaultProps = { primary: [], secondary: [] };

export default Labels;

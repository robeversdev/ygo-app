import styled from '@emotion/styled';
import {Box} from '@workday/canvas-kit-react/layout';
import {type} from '@workday/canvas-kit-react/tokens';

export const StyledCardInfoHeading = styled(Box.as('h3'))({
    ...type.levels.body.large,
    ...type.variants.inverse,
    margin: 0,
    width: "100%",
    fontWeight: type.properties.fontWeights.bold,
    textAlign: "left"
  });
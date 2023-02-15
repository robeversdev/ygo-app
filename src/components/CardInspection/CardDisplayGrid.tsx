import * as React from 'react';
import {Grid, GridProps, Box} from '@workday/canvas-kit-react/layout';
import {type} from '@workday/canvas-kit-react/tokens';
import styled from '@emotion/styled';
import { StyledHeading } from '../CustomStyles/StyledHeading';
import { CardDisplaySidebar } from './CardDisplaySidebar';
import { CardInspectBody } from './CardInspectBody';

// temporary placeholder until type components are added to canvas-kit

const borderPadProps = {
  borderRadius: 'm',
  padding: 's',
};

const Header = ({children, ...props}: GridProps) => (
  <Grid gridArea="Header" depth={1} {...props} {...borderPadProps}>
    {children}
  </Grid>
);

const Footer = ({children, ...props}: GridProps) => (
  <Grid gridArea="Footer" depth={1} {...props} {...borderPadProps}>
    {children}
  </Grid>
);

export const CardDisplayGrid = (props: any) => {
  const parentCont = {
    gridTemplateAreas:
      "'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",
    gridGap: 's',
    gridTemplateColumns: '3fr 9fr',
    gridTemplateRows: 'auto 500px auto',
  };
  return (
    <Grid as="section" padding="s">
      <Grid {...parentCont}>
        <Header backgroundColor="blueberry400">
          <StyledHeading>{props.CardProps.name}</StyledHeading>
        </Header>
        <CardDisplaySidebar borderPadProps={borderPadProps} imageURL={props.CardProps.imageURL}/>
        <CardInspectBody borderPadProps={borderPadProps}/>
        <Footer backgroundColor="berrySmoothie300">
          <StyledHeading>Footer</StyledHeading>
        </Footer>
      </Grid>
    </Grid>
  );
};
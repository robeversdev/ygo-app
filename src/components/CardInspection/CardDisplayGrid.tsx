import {Grid, GridProps} from '@workday/canvas-kit-react/layout';
import { StyledHeading } from '../CustomStyles/StyledHeading';
import { CardDisplaySidebar } from './CardDisplaySidebar';
import { CardDetailGrid } from './CardDetailGrid';

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
      "'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",
    gridGap: 's',
    gridTemplateColumns: '3fr 9fr',
    gridTemplateRows: 'auto 550px auto',
  };
  return (
    <Grid as="section" padding="s">
      <Grid {...parentCont}>
        <Header backgroundColor="blueberry400">
          <StyledHeading>{props.cardData.data[0].name}</StyledHeading>
        </Header>
        <CardDisplaySidebar borderPadProps={borderPadProps} imageURL={props.cardData.data[0].id + ".avif"}/>
        <CardDetailGrid cardData={props.cardData}/>
        <Footer backgroundColor="berrySmoothie300">
          <StyledHeading>Footer</StyledHeading>
        </Footer>
      </Grid>
    </Grid>
  );
};
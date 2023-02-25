import {Grid, GridProps} from '@workday/canvas-kit-react/layout';
import { StyledHeading } from '../CustomStyles/StyledHeading';
import { CardDisplaySidebar } from './CardDisplaySidebar';
import { CardDetailGrid } from './CardDetailGrid';

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

// DetailContent = CardDetailGrid gridArea
export const CardDisplayGrid = (props: any) => {
  const parentCont = {
    gridTemplateAreas:
      "'Header Header Header Header' 'SideBar DetailContent DetailContent DetailContent' 'SideBar DetailContent DetailContent DetailContent' 'Footer Footer Footer Footer'",
    gridGap: 's',
    gridTemplateColumns: '3fr 9fr',
    gridTemplateRows: 'auto 550px auto',
  };

  return (
    <Grid as="section" padding="s">
      <Grid {...parentCont}>
        <Header backgroundColor="blueberry400">
          <StyledHeading>{props.cardData.name}</StyledHeading>
        </Header>
        <CardDisplaySidebar borderPadProps={borderPadProps} imageURL={props.cardData.id + ".avif"}/>
        <CardDetailGrid cardData={props.cardData}/>
        <Footer backgroundColor="berrySmoothie300">
          <StyledHeading>Footer</StyledHeading>
        </Footer>
      </Grid>
    </Grid>
  );
};
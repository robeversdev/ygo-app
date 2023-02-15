import * as React from 'react';
import { Card, Grid, GridProps } from '@workday/canvas-kit-react';
import { StyledHeading } from '../CustomStyles/StyledHeading';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
// eslint-disable-next-line no-duplicate-imports

const Cell = (props: {children: React.ReactNode}) => {
  return (
    <Grid
      alignContent="center"
      padding="xs"
      justifyContent="center"
      backgroundColor="soap500"
      color="blackPepper500"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
};

const CardDetail = () => {

  return (
    <Grid gridAutoFlow="row" padding="xs">
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridTemplateRows="repeat(3, 1fr)"
        gridGap="xs"
        padding="xs"
        border="5px solid #c860d1"
      >
        <Cell>
            <StyledHeading>Type</StyledHeading>
            <span className="card-data-cost card-data-subheader">
                <i className="fa-solid fa-book"></i> <a href="/card-database/?&amp;type=Effect%20Monster">Effect Monster</a>
            </span>
        </Cell>
        <Cell>
        <StyledHeading>Attribute</StyledHeading>
          <div style={{"display" : "table" }}>
            <div style={{"display" : "table-row"}}>
              <img style={{"display" : "table-cell"}} src={process.env.PUBLIC_URL + '/attributes/' + 'WATER.png'}></img> <div style={{"display" : "table-cell"}}>WATER</div>
            </div>
          </div>
        </Cell>
        <Cell>
          <StyledHeading>Typing</StyledHeading>
          <span className="card-data-cost card-data-subheader">
          <img src={process.env.PUBLIC_URL + '/types/' + 'Dragon.png'}></img> <div>DRAGON</div>
          </span>
        </Cell>
        <Cell>
            <StyledHeading>Level/Rank</StyledHeading>
            <span className="card-data-cost card-data-subheader">
            <img src={process.env.PUBLIC_URL + '/' + 'level.png'}></img> <div>2</div>
            </span>
        </Cell>
        <Cell>
            <StyledHeading>ATK</StyledHeading>
            <span className="card-data-cost card-data-subheader">
                <i className="fa-solid fa-book"></i> <div>500</div>
            </span>
        </Cell>
        <Cell>
            <StyledHeading>DEF</StyledHeading>
            <span className="card-data-cost card-data-subheader">
                <i className="fa-solid fa-book"></i> <div>1600</div>
            </span>
        </Cell>
        <Cell>
            <StyledHeading>Archetype</StyledHeading>
            <span className="card-data-cost card-data-subheader">
                <i className="fa-solid fa-book"></i> <a href="/card-database/?&amp;type=Effect%20Monster">Dragonmaid</a>
            </span>
        </Cell>
        <Cell>
            <StyledHeading>TCG Date</StyledHeading>
            <span className="card-data-cost card-data-subheader">
                <i className="fa-solid fa-book"></i> <div>2019-11-21</div>
            </span>
        </Cell>
        <Cell>
            <StyledHeading>OCG Date</StyledHeading>
            <span className="card-data-cost card-data-subheader">
                <i className="fa-solid fa-book"></i> <div>2019-08-03</div>
            </span>
        </Cell>
      </Grid>
    </Grid>
  );
};



export const CardInspectBody = ({children, ...BodyProps}: any) => {
    const BodyContent = ({children, ...props}: GridProps) => (
        <Grid gridArea="BodyContent" depth={1} {...props} {...BodyProps.borderPadProps}>
          {children}
        </Grid>
      );
    return (
      <div>
        <BodyContent backgroundColor="plum300">
          <CardDetail />
        </BodyContent>
        <BodyContent backgroundColor="berrySmoothie100">
          <StyledHeading>Card Text</StyledHeading>
          <div> If this card is Normal or Special Summoned: You can send the top 3 cards of your Deck to the GY.
                At the start of the Battle Phase: You can return this card to the hand, and if you do, Special Summon 1 Level 7 "Dragonmaid"
                monster from your hand or GY. You can only use each effect of "Laundry Dragonmaid" once per turn.

          </div>
        </BodyContent>
      </div>
    );
}
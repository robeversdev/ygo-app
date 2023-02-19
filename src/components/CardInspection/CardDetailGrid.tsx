import * as React from 'react';
import {Flex, Grid, GridProps} from '@workday/canvas-kit-react/layout';
import { CardCellDetail } from './CardCellDetail';
import { AttributeEnum, CardDetailEnum, TypingEnum } from '../../Utils/Enums';
import { CardData } from '../../Interfaces/CardData';


const borderPadProps = {
    borderRadius: 'm',
    padding: 's'
};

const Cell = (props: {children: React.ReactNode}) => {
    return (
      <Flex
        alignContent="center"
        padding="xs"
        justifyContent="center"
        backgroundColor="soap500"
        color="blackPepper500"
        borderRadius="m"
      >
        {props.children}
      </Flex>
    );
  };

const CardDetail = (dataProps : CardData) => {
  
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
              <CardCellDetail detailHeading="Type" value={dataProps.type} id={CardDetailEnum.TYPE}/>
          </Cell>
          <Cell>
            <CardCellDetail detailHeading="Attribute" attribute={AttributeEnum.WATER} value={dataProps.attribute} id={CardDetailEnum.ATTRIBUTE}/>
          </Cell>
          <Cell>
            <CardCellDetail detailHeading="Typing" typing={TypingEnum.DRAGON} value={dataProps.race} id={CardDetailEnum.TYPING}/>
          </Cell>
          <Cell>
              <CardCellDetail detailHeading="Level/Rank" value={dataProps.level} id={CardDetailEnum.LEVEL}/>
          </Cell>
          <Cell>
              <CardCellDetail detailHeading="ATK" value={dataProps.atk} id={CardDetailEnum.ATK}/>
          </Cell>
          <Cell>
              <CardCellDetail detailHeading="DEF" value={dataProps.def} id={CardDetailEnum.DEF}/>
          </Cell>
          <Cell>
              <CardCellDetail detailHeading="Archetype" value={dataProps.archetype} id={CardDetailEnum.ARCHETYPE}/>
          </Cell>
          <Cell>
              <CardCellDetail detailHeading="TCG Date" value={dataProps.misc_info[0].tcg_date} id={CardDetailEnum.TCGDATE}/>
          </Cell>
          <Cell>
              <CardCellDetail detailHeading="OCG Date" value={dataProps.misc_info[0].ocg_date}  id={CardDetailEnum.OCGDATE}/>
          </Cell>
        </Grid>
      </Grid>
    );
  };

const BodyContent = ({children, ...props}: GridProps) => (
    <Grid gridArea="BodyContent"  depth={1} {...props} {...borderPadProps}>
      {children}
    </Grid>
  );




const CardTextTitle = ({children, ...props}: GridProps) => (
    <Grid gridArea="CardTextTitle" textAlign='left'  {...props} {...borderPadProps}>
        {children}
    </Grid>
    );
    
  
  const CardText = ({children, ...props}: GridProps) => (
    <Grid gridArea="CardText" textAlign='left'  {...props} {...borderPadProps}>
      {children}
    </Grid>
  );


export const CardDetailGrid = ({children, ...props}: any) => {

    const cardData = props.cardData.data[0] as CardData;

    const parentCont = {
      gridTemplateAreas: "'BodyContent BodyContent BodyContent BodyContent' 'CardTextTitle CardTextTitle CardTextTitle CardTextTitle' 'CardText CardText CardText CardText'",
      gridGap: '0',
      gridTemplateRows: 'auto auto auto',
    };
    return (
    <Grid gridArea="DetailContent" as="section" padding="s">
        <Grid depth={1} {...parentCont}>
            <BodyContent>
                <CardDetail {...cardData}/>
            </BodyContent>
            <CardTextTitle>Card Text</CardTextTitle>
            <CardText>{cardData.desc}</CardText>
        </Grid>
    </Grid>
    );
}
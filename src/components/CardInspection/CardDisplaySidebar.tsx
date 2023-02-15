import * as React from 'react';
import { GridProps, Grid } from '@workday/canvas-kit-react';




export const CardDisplaySidebar = (ImageProps: any) => {
    const SideBar = ({children, ...props}: GridProps) => (
        <Grid gridArea="SideBar" depth={1} {...props} {...ImageProps.borderPadProps}>
          {children}
        </Grid>
      );
    return (
      <SideBar backgroundColor="blueberry300">
        <img src={process.env.PUBLIC_URL + '/' + ImageProps.imageURL}/>
      </SideBar>
    );
}
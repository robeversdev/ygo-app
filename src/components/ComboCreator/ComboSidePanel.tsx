import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  SidePanel,
  useSidePanel,
  SidePanelTransitionStates,
} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
// local helper hook for setting content direction;

export const ComboSidePanel = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();
  const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
    expanded ? 'expanded' : 'collapsed'
  );

  const  toggleSidePanelState = () => {
    return (
      (expanded ? 'expanded' : 'collapsed')
    ) as SidePanelTransitionStates
  }

  return (
        <SidePanel {...panelProps} onStateTransition={() => setPanelState(toggleSidePanelState)} variant="alternate">
          <SidePanel.ToggleButton {...controlProps} />
          {panelState === 'expanded' && (
            <Flex alignItems="center" paddingY="s" paddingX="s">
              <Text
                as="h3"
                typeLevel="body.large"
                color="licorice500"
                fontWeight="bold"
                {...labelProps}
              >
                Cards & Zones
              </Text>
            </Flex>
          )}
        </SidePanel>
  );
};
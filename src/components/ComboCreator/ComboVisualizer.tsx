import { Flex, SecondaryButton } from "@workday/canvas-kit-react";

export const ComboVisualizer = () => {

    const initializeCombo = () => {
        console.log("Initialize Combo");
    }

    return (
        <Flex
          as="main"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          flex={1}
          flexBasis="auto"
        >
          <p>Click the button to start building your combo</p>
          <SecondaryButton onClick={initializeCombo} role="button">
           Start Combo
          </SecondaryButton>
        </Flex>
    );
}
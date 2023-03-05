import { CanvasProvider, Flex } from "@workday/canvas-kit-react"
import { ComboSidePanel } from "./ComboSidePanel"
import { ComboVisualizer } from "./ComboVisualizer"

export const ComboStudio = () => {

    return (
        <div>
            <CanvasProvider>
                <Flex height={320} backgroundColor="soap100">
                    <ComboSidePanel />
                    <ComboVisualizer />
                </Flex>
            </CanvasProvider>
        </div>
    )
}
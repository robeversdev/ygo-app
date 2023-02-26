import update from 'immutability-helper'
import type { CSSProperties, FC } from 'react'
import { useCallback, useState } from 'react'
import type { XYCoord } from 'react-dnd'
import { useDrop } from 'react-dnd'

import { Box } from './Box'
import type { DragItem } from '../../Interfaces/DragItem'
import { ItemTypes } from './ItemTypes'  
import LineTo, { Line, SteppedLineTo } from 'react-lineto'

const styles: CSSProperties = {
  width: "100%",
  height: 300,
  border: '1px solid black',
  position: 'relative',
}

export interface ContainerProps {
  hideSourceOnDrag: boolean
}

export interface ContainerState {
  boxes: { [key: string]: { top: number; left: number; title: string } }
}

export const Container: FC<ContainerProps> = ({ hideSourceOnDrag }) => {

    const useContainerState = () => {
        const [boxes, setBoxes] = useState<{
            [key: string]: {
              top: number
              left: number
              title: string
              connectedBox: string
            }
          }>({
            a: { top: 20, left: 80, title: 'Drag me around', connectedBox: 'b' },
            b: { top: 180, left: 20, title: 'Drag me too', connectedBox: '' },
          })
        
          const [linesToDraw, setLinesToDraw] = useState<{
            [key: string]: {
                from: string
                to: string
            }
          }>({
            a: { from: 'a', to: 'b'}
          })

        const moveBox = useCallback(
        (id: string, left: number, top: number, from: string, to: string) => {
            setBoxes(
            update(boxes, {
                [id]: {
                $merge: { left, top },
                },
            }),
            )
    
            setLinesToDraw(
            update(linesToDraw, {
                ['a']: {
                    $merge: {from, to},
                }
            }),
        )
        },
        [boxes, linesToDraw, setBoxes, setLinesToDraw],
        )
    
    
        const setContainerState = (id: string, left: number, top: number, from: string, to: string) => {
            moveBox(id, left, top, 'a', 'b')
        };
        return { boxes, linesToDraw, setContainerState };
    };

    const stateOfContainer = useContainerState();

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)
        stateOfContainer.setContainerState(item.id, left, top, 'a', 'b')
        return undefined
      },
    }),
    [stateOfContainer.setContainerState],
  )

  return (
    <div>
        <div ref={drop} style={styles}>
        {Object.keys(stateOfContainer.boxes).map((key) => {
            const { left, top, title } = stateOfContainer.boxes[key] as {
            top: number
            left: number
            title: string
            }
            return (
            <div>
                <Box
                    key={key}
                    id={key}
                    left={left}
                    top={top}
                    hideSourceOnDrag={hideSourceOnDrag}
                >
                    {
                        <div className={key}>{title}</div>
                    }
                </Box>
                <LineTo delay={true} from={key} to={stateOfContainer.boxes[key].connectedBox} />
            </div>
            )
        })}
        
        </div>
    </div>
  )
}

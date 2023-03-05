

import { useState, useEffect, useRef } from "react";

import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef
} from "react-zoom-pan-pinch";

export const PannableContainer = ({children} : any) => {
  const [zoom, setZoom] = useState(1.0);
  const ref = useRef<ReactZoomPanPinchRef | null>(null);

  useEffect(() => {
    if (ref.current?.state) {
      console.log("state exists");
      ref.current.setTransform(
        ref.current.state.positionX,
        ref.current.state.positionY,
        zoom
      );
    }
  }, [zoom]);

  return (
    <TransformWrapper
      ref={ref}
      initialScale={1}
      initialPositionX={200}
      initialPositionY={100}
      onZoomStop={(ref, event) => {
        setZoom(ref.state.scale);
      }}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <div className="tools">
            <button onClick={() => zoomIn()}>+</button>
            <button onClick={() => zoomOut()}>-</button>
            <button onClick={() => resetTransform()}>x</button>
          </div>
          <TransformComponent>
            {children}
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
}

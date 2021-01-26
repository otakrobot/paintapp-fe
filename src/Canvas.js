import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";
import { subscribeToDrawClick } from "./utils/openSocket"

export function Canvas({ isEraser }) {
    const {
      canvasRef,
      prepareCanvas,
      startDrawing,
      finishDrawing,
      draw,
    } = useCanvas();
  
    useEffect(() => {
      subscribeToDrawClick()
      prepareCanvas();
    }, []);
  
    return (
      <div>
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={ e => {
            draw(e, isEraser)
          }}
          ref={canvasRef}
        />
        <p>AJG</p>
      </div>
    );
  }
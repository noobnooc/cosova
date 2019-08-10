import React, { CSSProperties, useState, useMemo, useEffect } from 'react';
import { convertDurationToTransitionAvilableDuration } from './utils';

export interface Bubble {
  id: number;
  text: string;
  top: number;
  left: number;
  duration: number;
  initialStyle: CSSProperties;
  transitionStyle: CSSProperties;
  timing: string;
}

export interface BubbleComponentProps {
  className?: string;
  bubble: Bubble;
}

export const BubbleComponent: React.SFC<BubbleComponentProps> = ({
  bubble: {
    text,
    top,
    left,
    duration,
    initialStyle,
    transitionStyle: toTransitionStyle,
    timing,
  },
}) => {
  const baseStyle = useMemo<CSSProperties>(() => {
    return {
      ...initialStyle,
      transition: `all ${convertDurationToTransitionAvilableDuration(
        duration,
      )} ${timing}`,
    };
  }, [duration, initialStyle, timing]);

  const [transitionStyle, setTransitionStyle] = useState<CSSProperties>({});

  useEffect(() => {
    setTransitionStyle(toTransitionStyle);
  }, [toTransitionStyle]);

  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        wordBreak: 'keep-all',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        style={{
          ...baseStyle,
          ...transitionStyle,
        }}
      >
        {text}
      </div>
    </div>
  );
};

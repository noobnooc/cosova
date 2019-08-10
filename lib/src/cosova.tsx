import React, {
  useCallback,
  MouseEvent,
  useReducer,
  CSSProperties,
} from 'react';

import { BubbleComponent, Bubble } from './bubble';
import { getNextId, getRandomItemFormArray } from './utils';
import { cosovaReducer } from './reducer';

const DEFAULT_COSOVAS = [
  '富强',
  '民主',
  '文明',
  '和谐',
  '自由',
  '平等',
  '公正',
  '法治',
  '爱国',
  '敬业',
  '诚信',
  '友善',
];

const DEFAULT_DURATION = 800;
const DEFAULT_TIMING = 'ease-out';
const DEFAULT_INITIAL_STYLE: CSSProperties = {};
const DEFAULT_TRANSITION_STYLE: CSSProperties = {
  opacity: 0,
  transform: 'translate(0, -30px)',
};

type CosovaPropType<T> = T | (() => T);

function getProp<T>(prop: CosovaPropType<T>): T {
  if (typeof prop === 'function') {
    return (prop as Function)();
  } else {
    return prop;
  }
}

export interface CosovaProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  cosovas?: CosovaPropType<string[]>;
  duration?: CosovaPropType<number>;
  initialStyle?: CosovaPropType<CSSProperties>;
  transitionStyle?: CosovaPropType<CSSProperties>;
  timing?: CosovaPropType<string>;
  bubbleClassName?: string;
}

export const Cosova: React.FC<CosovaProps> = function({
  cosovas: cosovaProp = DEFAULT_COSOVAS,
  duration: durationPorp = DEFAULT_DURATION,
  initialStyle: initialStyleProp = DEFAULT_INITIAL_STYLE,
  transitionStyle: transitionStyleProp = DEFAULT_TRANSITION_STYLE,
  timing: timmingProp = DEFAULT_TIMING,
  bubbleClassName,

  children,
  style,
  onClick,

  ...restProps
}) {
  const [state, dispatch] = useReducer(cosovaReducer, { bubbles: [] });

  const onWrapperClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const cosovas = getProp(cosovaProp);
      const duration = getProp(durationPorp);
      const initialStyle = getProp(initialStyleProp);
      const transitionStyle = getProp(transitionStyleProp);
      const timing = getProp(timmingProp);

      const target = event.currentTarget;

      const left = event.pageX - target.offsetLeft;
      const top = event.pageY - target.offsetTop;

      const bubble: Bubble = {
        id: getNextId(),
        text: getRandomItemFormArray(cosovas),
        left,
        top,
        duration,
        initialStyle,
        transitionStyle,
        timing,
      };

      dispatch({
        type: 'add-bubble',
        bubble,
      });

      setTimeout(() => {
        dispatch({
          type: 'remove-bubble',
          id: bubble.id,
        });
      }, duration);

      if (onClick) {
        onClick(event);
      }
    },
    [
      cosovaProp,
      durationPorp,
      initialStyleProp,
      onClick,
      timmingProp,
      transitionStyleProp,
    ],
  );

  return (
    <div
      style={{ ...style, position: 'relative' }}
      onClick={onWrapperClick}
      {...restProps}
    >
      {children}
      {state.bubbles.map(bubble => (
        <BubbleComponent
          className={bubbleClassName}
          key={bubble.id}
          bubble={bubble}
        />
      ))}
    </div>
  );
};

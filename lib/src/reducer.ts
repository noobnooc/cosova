import { Bubble } from './bubble';

export interface CosovaState {
  bubbles: Bubble[];
}

export type CosovaAction = CosovaAddBubbleAction | CosovaRemoveBubbleAction;

export interface CosovaAddBubbleAction {
  type: 'add-bubble';
  bubble: Bubble;
}

export interface CosovaRemoveBubbleAction {
  type: 'remove-bubble';
  id: number;
}

export function cosovaReducer(
  preState: CosovaState,
  action: CosovaAction,
): CosovaState {
  let { bubbles, ...rest } = preState;

  switch (action.type) {
    case 'add-bubble':
      return {
        bubbles: [...bubbles, action.bubble],
        ...rest,
      };
    case 'remove-bubble':
      return {
        bubbles: bubbles.filter(item => item.id !== action.id),
        ...rest,
      };
  }
}

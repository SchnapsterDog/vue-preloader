import {
  TRANSITION_FADE_LEFT,
  TRANSITION_FADE_RIGHT,
  TRANSITION_FADE_UP,
  TRANSITION_FADE_DOWN
} from '../constants';

export const transitionMap = {
  [TRANSITION_FADE_LEFT]: { transform: 'translate(-100%, 0)' },
  [TRANSITION_FADE_RIGHT]: { transform: 'translate(100%, 0)' },
  [TRANSITION_FADE_UP]: { transform: 'translate(0, -100%)' },
  [TRANSITION_FADE_DOWN]: { transform: 'translate(0, 100%)' },
  default: { transform: 'transform(-100%, 0)' }
}
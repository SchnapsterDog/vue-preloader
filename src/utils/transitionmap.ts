enum Transition {
  FADE_LEFT = 'fade-left',
  FADE_RIGHT = 'fade-right',
  FADE_UP = 'fade-up',
  FADE_DOWN = 'fade-down',
}

export const transitionMap: Record<Transition | 'default', { transform: string }> = {
  [Transition.FADE_LEFT]: { transform: 'translate(-100%, 0)' },
  [Transition.FADE_RIGHT]: { transform: 'translate(100%, 0)' },
  [Transition.FADE_UP]: { transform: 'translate(0, -100%)' },
  [Transition.FADE_DOWN]: { transform: 'translate(0, 100%)' },
  default: { transform: 'transform(-100%, 0)' },
};
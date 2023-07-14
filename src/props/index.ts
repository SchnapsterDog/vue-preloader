import { PropType } from "vue";

const definedProps = {
  backgroundColor: {
    type: String as PropType<string>,
    default: '#091a28'
  },
  color: {
    type: String as PropType<string>,
    default: '#ffffff'
  },
  loadingSpeed: {
    type: Number as PropType<number>,
    default: 15
  },
  overflowActive: {
    type: Boolean,
    default: true
  },
  transitionSpeed: {
    type: Number as PropType<number>,
    default: 1400
  },
  transitionType: {
    type: String as PropType<string>,
    default: 'fade-left'
  }
};

export default definedProps;
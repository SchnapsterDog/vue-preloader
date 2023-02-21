export default {
  backgroundColor: {
    type: String,
    default: () => {
      return '#091a28';
    },
  },
  color: {
    type: String,
    default: () => {
      return "#ffffff";
    },
  },
  loadingSpeed: {
    type: Number,
    default: () => {
      return 15;
    },
  },
  transitionSpeed: {
    type: Number,
    default: () => {
      return 1400;
    },
  }
}
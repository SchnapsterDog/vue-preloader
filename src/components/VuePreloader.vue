<script setup>
import { computed, onMounted, onBeforeMount, ref, watchEffect } from "vue";
import { transitionMap } from '../utils/transitionmap'
import definedProps from '../props';

const emit = defineEmits(['loading-is-over', 'transition-is-over']);
const props = defineProps(definedProps);

const loadingbar = ref(null);
var percent = ref(0);

const preloaderBackgroundColor = computed(() => {
  return { backgroundColor: props.backgroundColor }
});

const preloaderTransitionSpeed = computed(() => {
  return { transition: `all ${props.transitionSpeed}ms ease-in-out` }
});

const preloaderTransitionType = computed(() => {
  if (percent.value >= 100) {
    return transitionMap[props.transitionType] || transitionMap.default
  }
  return
})

watchEffect(() => {
  if (percent.value < 100) {
    setTimeout(() => {
      percent.value += 1;
      if (loadingbar.value) {
        loadingbar.value.style.width = `${percent.value}%`;
      }
    }, props.loadingSpeed);
  } else {
    loadingIsOver();
    transitionIsOver();
  }
});

onBeforeMount(() => {
  setOverflowHidden()
});

onMounted(() => {
  percent.value = percent.value += 1
});

function loadingIsOver() {
  emit('loading-is-over');
}

function setOverflowAuto() {
  document.body.style.overflow = 'auto'
}

function setOverflowHidden() {
  document.body.style.overflow = 'hidden'
}

function transitionIsOver() {
  setTimeout(() => {
    emit('transition-is-over')
    setOverflowAuto()
  }, props.transitionSpeed)
}
</script>

<template>
  <div
    :class="$style.preloader"
    :style="[
      preloaderBackgroundColor,
      preloaderTransitionSpeed,
      preloaderTransitionType
    ]"
  >
    <slot v-bind="{ color, percent }">
      <div
        v-if="percent < 100"
        :class="$style.percentBar"
        :style="{ color }"
      >
        {{ percent }} %
      </div>
      <div
        v-show="percent < 100"
        :class="$style.loadingWrapper"
      >
        <div
          ref="loadingbar"
          :class="$style.loadingBar"
          :style="{ backgroundColor: color }"
        />
      </div>
    </slot>
  </div>
</template>
<style lang="css" module>
.preloader {
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 100;
}

.percentBar {
  transition: all 0.2s ease-in-out;
}

.loadingWrapper {
  width: 60%;
  margin-top: 20px;
}

.loadingBar {
  width: 1%;
  padding: 1px 0;
}
</style>
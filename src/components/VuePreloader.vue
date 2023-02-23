<script setup>
import { computed, onMounted, onBeforeMount, ref, watchEffect } from "vue";
import definedProps from './props';

const emit = defineEmits(['transition-is-over'])
const props = defineProps(definedProps);

const loadingbar = ref(null);
var percent = ref(0);

const preloaderBackgroundColor = computed(() => {
  return { backgroundColor: props.backgroundColor }
});

const preloaderTransition = computed(() => {
  return { transition: `all ${props.transitionSpeed}ms ease-in-out` }
});

const preloaderWidth = computed(
  () => percent.value >= 100 ? { width: '0%' } : ''
);

watchEffect(() => {
  if (percent.value < 100) {
    setTimeout(() => {
      percent.value += 1;
      loadingbar.value.style.width = `${percent.value}%`;
    }, props.loadingSpeed);
  } else {
    transitionIsOver();
  }
});

onBeforeMount(() => {
  setOverflowHidden()
});

onMounted(() => {
  percent.value = percent.value += 1
});

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
      preloaderTransition,
      preloaderWidth
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
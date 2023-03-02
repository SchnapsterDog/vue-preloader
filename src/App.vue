<script setup>
import { VuePreloader } from "./components/";
import { ref } from 'vue';

const showAnimation = ref(true)
</script>

<template>
  <div>
    <vue-preloader @loading-is-over="showAnimation = false" transition-type="fade-up">
      <template v-slot="{ color, percent }">
        <transition name="loading-animation" mode="in-out">
          <span v-if="showAnimation" :style="{ color }">{{ percent }} %</span>
        </transition>
      </template>
    </vue-preloader>
  </div>
</template>
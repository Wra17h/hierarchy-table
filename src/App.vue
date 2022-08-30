<template>
  <main-page />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainPage from "@/MainPage.vue";

export default defineComponent({
  name: "App",
  components: {
    MainPage,
  },
});
</script>

<style lang="scss"></style>

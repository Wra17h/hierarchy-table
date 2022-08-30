<script setup lang="ts">
import { PropType, defineProps } from "vue";
import { IPersonDto } from "@/services/types";

defineProps({
  itemData: {
    type: Object as PropType<IPersonDto>,
    default: undefined,
  },
});
</script>

<template>
  <div class="hierarchy-table__item" @click="showRow">
    <p class="hierarchy-table-item-text">{{ itemData.name }}</p>
    <p class="hierarchy-table-item-text">{{ itemData.balance }}</p>
    <p class="hierarchy-table-item-text">{{ itemData.email }}</p>
    <p class="hierarchy-table-item-text">
      {{ itemData.isActive ? "Активен" : "Не активен" }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/assets/styles/vars";

.hierarchy-table__item {
  display: flex;
  justify-content: space-between;
}

.hierarchy-table-item-text {
  width: 100%;
  border: 1px solid black;
  padding: $default-padding;
  margin: 0;
}
</style>

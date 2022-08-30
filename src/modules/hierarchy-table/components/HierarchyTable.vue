<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchDataFromServer } from "@/services/api";
import HierarchyItem from "@/modules/hierarchy-table/components/HierarchyItem.vue";
import { IPersonDto } from "@/services/types";
import { transformServerDataToTable } from "@/modules/hierarchy-table/components/helpers";
import HierarchyTableContent from "@/modules/hierarchy-table/components/HierarchyTableContent.vue";

const tableData = ref<IPersonDto[]>();

onMounted(() => {
  tableData.value = transformServerDataToTable(fetchDataFromServer());
});
</script>

<template>
  <div class="hierarchy-table__header">
    <p class="hierarchy-table-header__text">Имя</p>
    <p class="hierarchy-table-header__text">Баланс</p>
    <p class="hierarchy-table-header__text">Почта</p>
    <p class="hierarchy-table-header__text">Статус</p>
  </div>
  <div class="hierarchy-table__body">
    <hierarchy-table-content v-if="tableData" :table-items="tableData" />
  </div>
</template>

<style lang="scss" scoped>
@import "./src/assets/styles/vars";
.hierarchy-table__header {
  display: flex;
  justify-content: space-around;
}

.hierarchy-table-header__text {
  border: 1px solid black;
  width: 100%;
  padding: $default-padding;
  margin: 0;
}
</style>

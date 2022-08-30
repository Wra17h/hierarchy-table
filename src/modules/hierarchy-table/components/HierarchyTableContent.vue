<script setup lang="ts">
import { PropType, defineProps } from "vue";
import { IPersonDto } from "@/services/types";
import HierarchyItem from "@/modules/hierarchy-table/components/HierarchyItem.vue";

const props = defineProps({
  tableItems: {
    type: Object as PropType<IPersonDto[]>,
    default: undefined,
  },
});
</script>

<template>
  <template v-for="tableItem in tableItems" :key="tableItem.id">
    <div class="hierarchy-table__content">
      <hierarchy-item :item-data="tableItem" />
    </div>
    <div v-if="tableItem.children" class="hierarchy-table__row-body">
      <hierarchy-table-content
        v-if="tableItem.children"
        :table-items="tableItem.children"
      />
    </div>
  </template>
</template>

<style lang="scss" scoped>
.hierarchy-table__row-body {
  .hierarchy-table__content {
    margin-left: 2rem;
    & ~ .hierarchy-table__row-body {
      .hierarchy-table__content {
        margin-left: 4rem;
      }
    }
  }
}

.hierarchy-table__content ~ .hierarchy-table__row-body {
  margin-bottom: 10px;
}
</style>

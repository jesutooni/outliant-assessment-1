<template>
  <main class="px-8 max-w-screen-xl mx-auto py-14 flex justify-between items-start">
    
      <ProductTable />
      <ProductForm class="w-2/5 mt-20" />
  </main>
</template>

<script>
import ProductTable from "@/components/ProductTable.vue";
import ProductForm from "@/components/ProductForm.vue";
export default {
  components: { ProductTable, ProductForm },
};
</script>

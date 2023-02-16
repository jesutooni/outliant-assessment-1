<template>
  <div>
    <AppHeader />
    <ProductPage />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import ProductPage from "@/components/ProductPage.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: { AppHeader, ProductPage, AppFooter },
};
</script>

<template>
  <div>
    <AppHeader />
    <HomePage />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import HomePage from "@/components/HomePage.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: { AppHeader, HomePage, AppFooter },
};
</script>

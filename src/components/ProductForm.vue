<template>
  <div class="bg-secondary py-14 px-8 text-center">
    <h3 class="font-semibold text-xl">Header Text</h3>
    <p class="text-primary mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
    </p>

    <form action="" class="mt-8 space-y-6">
      <input
        type="text"
        placeholder="Name"
        v-model="name"
        class="bg-white rounded py-2 px-4 w-full focus:outline-none"
      />
      <input
        type="text"
        placeholder="Price"
        v-model="price"
        class="bg-white rounded py-2 px-4 w-full focus:outline-none"
      />
      <AppButton :disabled="!name || !price"
        @click.prevent="addProduct"
        theme="black"
        text="Create"
        class="w-full"
      />
    </form>
  </div>
</template>

<script>
import { products } from "../data/products";
import AppButton from "./AppButton.vue";
export default {
  components: { AppButton },
  data() {
    return {
      name: "",
      price: "",
    };
  },
  methods: {
    addProduct() {
      products.push({ name: this.name, price: this.price });
      this.name = "";
      this.price = "";
    },
  },
};
</script>

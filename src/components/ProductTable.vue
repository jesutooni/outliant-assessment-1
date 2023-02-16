<template>
  <div>
    <div class="flex gap-14">
      <h1 class="font-bold text-4xl">Products</h1>

      <input
        type="text"
        placeholder="Search for keywords..."
        v-model="search"
        @input="filterProducts"
        class="border border-black rounded py-2 px-3 w-80 focus:outline-none"
      />
    </div>

    <table class="mt-10">
      <thead>
        <tr
          class="bg-secondary text-center border-t border-l border-r border-black"
        >
          <td class="w-48 py-2 text-sm">Name</td>
          <td class="w-48 py-2 text-sm">Price</td>
          <td class="w-48 py-2 text-sm">Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-if="filteredProducts.length === 0" class="text-primary text-xs border border-black py-4">
          No product with that name
        </tr>
        <tr
          v-else
          v-for="(item, index) in filteredProducts"
          :key="index"
          class="text-center"
        >
          <td class="py-2 text-primary text-sm border-b border-l border-black">
            <input
              v-if="item.editing"
              type="text"
              v-model="item.name"
              class="focus:outline-none bg-secondary rounded px-2 py-1"
            />
            <span v-else>
              {{ item.name }}
            </span>
          </td>
          <td class="py-2 text-primary text-sm border-b border-l border-black">
            <input
              v-if="item.editing"
              type="text"
              v-model="item.price"
              class="focus:outline-none bg-secondary rounded px-2 py-1"
            />
            <span v-else>
              {{ item.price }}
            </span>
          </td>
          <td
            class="space-x-2 justify-center py-1.5 border-b border-l border-r border-black"
          >
            <AppButton
              @click="change(index)"
              :text="item.editing ? 'Save' : 'Edit'"
              theme="black"
              size="sm"
            />
            <AppButton
              @click="deleteProduct(index)"
              text="Delete"
              theme="white"
              size="sm"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
import { products } from "../data/products";
export default {
  components: { AppButton },
  data() {
    return {
      search: "",
      items: products,
    };
  },
  computed: {
    filteredProducts() {
      return this.items.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    deleteProduct(index) {
      this.items.splice(index, 1);
    },
    change(index) {
      this.items[index].editing = !this.items[index].editing;
    },
  },
};
</script>

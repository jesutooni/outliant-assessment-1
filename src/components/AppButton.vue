<template>
  <button
    v-on="$listeners"
    :class="[themeComputed, sizeComputed, `rounded text-sm font-semibold`]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    theme: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  computed: {
    themeComputed() {
      switch (this.theme) {
        case "black":
          return "bg-black text-white";

        case "white":
          return "border border-black text-black";
        default:
          return "";
      }
    },
    sizeComputed() {
      switch (this.size) {
        case "sm":
          return "px-3 py-1.5 text-xs";

        default:
          return "px-5 py-2.5 text-sm";
      }
    },
  },
};
</script>

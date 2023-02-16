<template>
  <footer
    class="bg-secondary mt-40"
  >
    <div class="px-8 max-w-screen-xl mx-auto relative w-full md:h-96 flex flex-col md:flex-row items-center py-7">
      <div class="bg-image-100 h-96 w-96 md:absolute left-0 -top-14"></div>
      <div class="md:w-2/3 ml-auto relative z-10 mt-14">
        <div class="md:max-w-lg">
          <h3 class="font-semibold text-5xl">
            Lorem ipsum dolor sit consectetur
          </h3>
          <p class="text-primary mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus
          </p>
          <AppButton text="Call to Action" theme="black" class="mt-8" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
  components: { AppButton },
};
</script>

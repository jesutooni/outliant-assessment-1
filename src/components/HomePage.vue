<template>
  <main class="px-8 max-w-screen-xl mx-auto">
    <section class="flex flex-col-reverse md:flex-row justify-between py-14">
      <div class="md:max-w-xs lg:max-w-md text-center md:text-left pt-14">
        <h1 class="font-semibold text-5xl lg:text-6xl">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p class="text-primary mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus
        </p>

        <div class="flex justify-center md:justify-start gap-2 mt-8">
          <AppButton text="Call to Action" theme="black" />
          <AppButton text="See Workspace" theme="white" />
        </div>
      </div>

      <div class="relative flex">
        <div class="bg-image-200 h-48 w-44 mx-auto md:mx-0 relative z-10"></div>
        <div
          class="h-72 w-72 lg:h-96 lg:w-96 bg-image-100 md:absolute top-12 -left-1/3 lg:-left-1/2 -translate-x-1/2"
        ></div>
      </div>
    </section>

    <section
      class="flex flex-col md:flex-row justify-between gap-8 mt-8 md:mt-20 py-16"
    >
      <div class="md:w-1/4 text-center md:text-left">
        <h2 class="font-semibold">Header Text</h2>
        <p class="text-primary mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna, porttior
          rhoncus dolor purus non enim dolor
        </p>
      </div>

      <div class="h-96 w-80 mx-auto md:mx-0 bg-image-100 self-stretch"></div>

      <div class="md:self-end md:w-1/4 text-center md:text-left">
        <h2 class="font-semibold">Header Text</h2>
        <p class="text-primary mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna, porttior
          rhoncus dolor purus non enim dolor
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
  components: { AppButton },
};
</script>

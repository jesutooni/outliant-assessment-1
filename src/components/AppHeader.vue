<template>
  <header
    class="flex justify-between items-center px-8 max-w-screen-xl mx-auto py-6 sticky top-0 bg-white z-50"
  >
    <AppLogo />
    <nav class="hidden sm:flex text-black hover:text-primary duration-200 text-sm gap-12">
      <router-link :to="nav.link" v-for="nav in navs" :key="nav.name">{{
        nav.name
      }}</router-link>
    </nav>
    <AppButton class="hidden md:block" text="Call to Action" theme="black" />
    <div class="sm:hidden">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        style="enable-background: new 0 0 377 377"
        xml:space="preserve"
        width="24"
        height="24"
      >
        <g>
          <path
            x="75"
            y="73.5"
            width="302"
            height="30"
            d="M4.775 4.679H24V6.589H4.775V4.679z"
          />
          <path
            y="73.5"
            width="30"
            height="30"
            d="M0 4.679H1.91V6.589H0V4.679z"
          />
          <path
            y="273.5"
            width="30"
            height="30"
            d="M0 17.411H1.91V19.321H0V17.411z"
          />
          <path
            x="75"
            y="273.5"
            width="302"
            height="30"
            d="M4.775 17.411H24V19.321H4.775V17.411z"
          />
          <path
            y="173.5"
            width="30"
            height="30"
            d="M0 11.045H1.91V12.955H0V11.045z"
          />
          <path
            x="75"
            y="173.5"
            width="302"
            height="30"
            d="M4.775 11.045H24V12.955H4.775V11.045z"
          />
        </g>
      </svg>
    </div>
  </header>
</template>

<script>
import AppLogo from "./AppLogo.vue";
import AppButton from "./AppButton.vue";
export default {
  components: { AppLogo, AppButton },
  data() {
    return {
      navs: [
        { name: "Home", link: "/" },
        { name: "About", link: "#" },
        { name: "Services", link: "#" },
        { name: "Products", link: "/products" },
      ],
    };
  },
};
</script>

<style scoped>
.router-link-exact-active {
 font-weight: 700;
}
</style>
<template>
  <div
    class="
      flex flex-col
      sticky-top
      bg-zemakech
      font-bold
      h-24
      p-3
      text-lg
      justify-center
    "
  >
    <div class="flex items-center justify-center">
      <router-link to="/">
        <img class="h-16" alt="" src="@/assets/logo-all-white.svg" />
      </router-link>
    </div>
    <div class="flex items-center justify-center">
      <Icon @click="displayDropdown" icon="fe:arrow-down" class="text-white" />
    </div>
    <div
      v-show="dropdown"
      class="flex flex-col w-screen bg-zemakech absolute top-24 left-0"
    >
      <router-link @click="displayDropdown" to="/">Home</router-link>
      <router-link @click="displayDropdown" to="/dial-a-soup"
        >Dial a Soup</router-link
      >
      <router-link @click="displayDropdown" to="/menu">Our Menu</router-link>
      <router-link @click="displayDropdown" to="/services"
        >What We Offer</router-link
      >
      <router-link @click="displayDropdown" to="/get-estimate"
        >Get an Estimate</router-link
      >
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Nav",
  data: function () {
    return {
      dropdown: false,
    };
  },
  methods: {
    displayDropdown: function () {
      if (this.dropdown === false) {
        this.dropdown = true;
      } else {
        this.dropdown = false;
      }
    },
  },
  components: { Icon },
};
</script>

<style>
a.router-link-exact-active {
  color: white;
}
.dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
  background-color: #eb7025;
  padding: 7px;
  top: 75px;
  right: 0px;
  width: 70vw;
}
</style>

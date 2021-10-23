<template>
  <div class="flex sticky-top bg-zemakech h-24 p-4 text-lg justify-around">
    <router-link to="/">Zemakech Cuisine</router-link>
    <router-link to="/dial-a-soup">Dial a Soup</router-link>
    <router-link to="/menu">Our Menu</router-link>
    <router-link to="/services">What We Offer</router-link>
    <router-link to="/get-estimate">Get an Estimate</router-link>
  </div>
</template>

<script>
// import { Icon } from "@iconify/vue";
export default {
  name: "Nav",
  // components: { Icon },
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

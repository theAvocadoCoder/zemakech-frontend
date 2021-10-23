<template>
  <div class="home bg-white min-h-screen">
    <Hero />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";

export default {
  name: "Home",
  components: {
    Hero,
  },
};
</script>

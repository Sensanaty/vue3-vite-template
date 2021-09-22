<template>
  <div class="page">
    <img :src="logo" alt="" />
  </div>
</template>

<script lang="ts">
  import logo from "@/assets/logos.svg";

  export default {
    setup() {
      return { logo };
    }
  };
</script>

<style lang="scss" scoped>
  img {
    margin: auto 0 auto 0;
    width: 600px;
  }
</style>

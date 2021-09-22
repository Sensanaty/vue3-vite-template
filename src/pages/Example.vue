<template>
  <div class="page">
    <h1>Example Route</h1>
    <p>This page showcases some of the defaults of the template.</p>

    <h2>Axios Requests</h2>
    <p>Click the button to make an Axios request</p>
    <p>User's Name: {{ userName }}</p>
    <button style="margin: 0 0 15px 0" @click.prevent="getName">Make Request</button>

    <h2>Pinia</h2>
    <p>Click the buttons to modify the <code>count</code> state</p>
    <code>count: {{ count }}</code>
    <div class="button-wrapper">
      <button @click.prevent="count++">Increment</button>
      <button @click.prevent="count--">Decrement</button>
      <button @click.prevent="count = count ** 2">Square</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import { storeToRefs } from "pinia";
  import $axios from "@/lib/axios";
  import useExampleStore from "@/store/example";

  const store = useExampleStore();
  const { count } = storeToRefs(store);
  const userName = ref("Unknown");

  interface User {
    username: string;
  }

  async function getName() {
    userName.value = "Fetching username...";

    await $axios.get<User>("/users/1").then((response) => {
      userName.value = response.data.username;
    });
  }
</script>

<style lang="scss" scoped>
  button {
    background: $main;
    color: $secondary;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 90ms ease-in-out;

    &:active {
      transform: scale(0.95);
    }
  }

  .button-wrapper {
    display: flex;
    margin: 10px 0 0 0;

    button {
      margin: 0 5px;
    }
  }
</style>

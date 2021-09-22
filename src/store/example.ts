import { defineStore } from "pinia";

const state = () => {
  return {
    count: 0
  };
};

const useExampleStore = defineStore("example", {
  state
});

export default useExampleStore;

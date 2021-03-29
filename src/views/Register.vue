<template>
  <div class="wrapper">
    <header>完美匹配·注册信息</header>
    <main></main>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
import { useStore } from "vuex";

export default {
  name: "Register",
  setup() {
    const store = useStore();
    console.log(store.getters.getList);

    return {};
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
  }
}
</style>

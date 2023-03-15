<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <div class="bg-dark">
    <AppHeader />
  </div>
  <div>
    <router-view></router-view>
  </div>
  <div class="bg-dark">
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use "./style/app.scss" as *;
@use "./style/partials/mixins" as *;
@use "./style/partials/variables" as *;
</style>

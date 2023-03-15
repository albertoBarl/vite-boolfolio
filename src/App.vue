<script>
import ProjectMain from "./components/ProjectMain.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    ProjectMain,
  },
};
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss">
@use "./style/app.scss" as *;
@use "./style/partials/mixins" as *;
@use "./style/partials/variables" as *;
</style>

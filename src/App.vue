<script>
import ProjectMain from "./components/ProjectMain.vue";
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";

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
  <ProjectMain />
  <AppFooter />
</template>

<style lang="scss">
@use "./style/app.scss" as *;
@use "./style/partials/mixins" as *;
@use "./style/partials/variables" as *;
</style>

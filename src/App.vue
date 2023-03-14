<script>
import ProjectMain from "./components/ProjectMain.vue";

export default {
  components: {
    ProjectMain,
  },
};
</script>

<template>
  <ProjectMain />
</template>

<style lang="scss">
@use "./style/app.scss" as *;
@use "./style/partials/mixins" as *;
@use "./style/partials/variables" as *;
</style>

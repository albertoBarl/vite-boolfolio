<template lang="">
  <main class="text-center p-5">
    <h1 class="pb-5">BOOLPRESS</h1>
    <div
      class="container justify-content-center d-flex flex-wrap gap-5"
      id="projectMain"
    >
      <div v-if="store.loading" class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div v-else v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
  </main>
</template>

<!-- script -->
<script>
import axios from "axios";
import { store } from "../store";

import ProjectCard from "../components/elements/ProjectCard.vue";

export default {
  name: "ProjectMain",
  data() {
    return {
      store,
      projects: [],
    };
  },
  components: {
    ProjectCard,
  },
  methods: {
    getProjects() {
      this.store.loading = true;

      //   axios call to recover API from back-end
      axios.get(`${this.store.baseUrl}/api/projects`).then((response) => {
        if (response.data.success) {
          this.projects = response.data.results;
          this.store.loading = false;
        } else {
          //   alert for a bad axios call
        }
      });
    },
  },
  mounted() {
    this.getProjects();
  },
};
</script>

<!-- style -->
<style lang="scss" scoped></style>

<template lang="">
  <h1>BOOLPRESS</h1>
  <div
    class="container justify-content-center d-flex flex-wrap gap-5"
    id="projectMain"
  >
    <div v-if="loading" class="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div v-else v-for="project in projects" :key="project.id">
      <ProjectCard :project="project" :baseUrl="`${baseUrl}`" />
    </div>
  </div>
</template>

<!-- script -->
<script>
import axios from "axios";
import ProjectCard from "./elements/ProjectCard.vue";

export default {
  name: "ProjectMain",
  data() {
    return {
      projects: [],
      loading: true,
      baseUrl: "http://127.0.0.1:8000",
    };
  },
  components: {
    ProjectCard,
  },
  methods: {
    getProjects() {
      this.loading = true;

      //   axios call to recover API from back-end
      axios.get(`${this.baseUrl}/api/projects`).then((response) => {
        if (response.data.success) {
          this.projects = response.data.results;
          this.loading = false;
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

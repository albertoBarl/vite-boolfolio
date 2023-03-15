<template lang="">
  <div class="container d-flex flex-wrap gap-3" id="projectMain">
    <div v-if="loading" class="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div
      v-else
      class="card"
      style="max-width: 200px; min-height: 250px"
      v-for="item in projects"
      :key="item.id"
    >
      <div class="card-img-top">
        <img
          :src="`${baseUrl}/storage/${item.cover_image}`"
          :alt="item.title + '<- image non available'"
        />
      </div>
      <div class="card-title">{{ item.title }}</div>
      <a href="#" class="btn btn-success">Visualizza dettaglio</a>
    </div>
  </div>
</template>

<!-- script -->
<script>
import axios from "axios";

export default {
  name: "ProjectMain",
  data() {
    return {
      projects: [],
      loading: true,
      baseUrl: "http://127.0.0.1:8000",
    };
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

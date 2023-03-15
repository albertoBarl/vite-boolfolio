<template lang="">
  <div class="container d-flex flex-wrap gap-3" id="projectMain">
    <div v-if="loading" class="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div
      v-else
      class="card justify-content-between"
      style="max-width: 200px; min-height: 250px"
      v-for="item in projects"
      :key="item.id"
    >
      <div class="card-img-top">
        <img
          :src="
            item.cover_image != null
              ? `${baseUrl}/storage/${item.cover_image}`
              : 'https://picsum.photos/200/300'
          "
          class="w-100"
        />
      </div>
      <div class="card-title text-uppercase">{{ item.title }}</div>
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

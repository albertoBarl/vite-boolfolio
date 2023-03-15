<template lang="">
  <div v-if="store.loading" class="lds-facebook">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <div class="container">
    <h2>{{ project.title }}</h2>
    <div class="w-50">
      <img
        :src="
          project.cover_image != null
            ? `${store.baseUrl}/storage/${project.cover_image}`
            : 'https://picsum.photos/200/300'
        "
        alt="not available"
        class="w-50"
      />
    </div>
    <p>{{ project.content }}</p>
  </div>
</template>
<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "ProjectDetail",
  data() {
    return {
      store,
      project: [],
    };
  },
  mounted() {
    this.store.loading = true;
    axios
      .get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`)
      .then((response) => {
        if (response.data.success) {
          this.project = response.data.project;
        }
      });
  },
};
</script>
<style lang="scss"></style>

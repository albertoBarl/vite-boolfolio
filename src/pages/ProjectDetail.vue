<template lang="">
  <div>DETTAGLIO PROGETTO</div>
</template>
<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "ProjectDetail",
  data() {
    return {
      store,
      project: null,
    };
  },
  mounted() {
    this.store.laoding = true;
    axios
      .get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`)
      .then((response) => {});
  },
};
</script>
<style lang="scss"></style>

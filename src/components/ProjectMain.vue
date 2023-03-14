<template lang="">
  <div></div>
</template>

<!-- script -->
<script>
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
          this.project = response.data.results;
          this.loading = false;
        } else {
          //   alert for a bad axios call
        }
      });
    },
  },
};
</script>

<!-- style -->
<style lang="scss" scoped></style>

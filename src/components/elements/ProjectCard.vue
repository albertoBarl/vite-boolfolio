<template lang="">
  <div class="card" style="width: 200px; min-height: 500px">
    <div class="card-img-top">
      <img
        :src="
          project.cover_image != null
            ? `${baseUrl}/storage/${project.cover_image}`
            : 'https://picsum.photos/200/300'
        "
        class="w-100"
      />
    </div>
    <div class="card-body text-uppercase">{{ project.title }}</div>
    <a href="#" class="card-footer btn btn-success">Visualizza dettaglio</a>
  </div>
</template>
<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object,
    baseUrl: String,
  },
};
</script>
<style lang="scss"></style>

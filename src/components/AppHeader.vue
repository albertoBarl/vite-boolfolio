<template lang="">
  <header class="text-center">
    <h2 class="text-success">MENU</h2>
    <nav class="d-flex justify-content-center gap-5">
      <ul class="list-unstyled" v-for="(item, index) in menuItems" :key="index">
        <li>
          <router-link
            :to="{ name: item.routeName }"
            class="text-white text-decoration-none"
            >{{ item.label }}</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<!-- script -->
<script>
export default {
  data() {
    return {
      menuItems: [
        { label: "Homepage", routeName: "home" },
        { label: "Projects", routeName: "projects" },
        { label: "Contacts", routeName: "contacts" },
      ],
    };
  },
};
</script>

<!-- style -->
<style lang="scss"></style>

<template>
  <div>
    <div id="nav-links">
      <!--links to different parts of the sites-->
      <span class="nav-link">
        <router-link to="/">Home</router-link>
      </span>

      <span class="nav-links">
        <router-link to="/about">About this site</router-link>
      </span>
    </div>

    <div class="credits">
      <p>
        Map image by
        <a href="https://unsplash.com/photos/KpBXAOs80YI"
          >@chrislawton on Unsplash</a
        >
      </p>
      <p>
        <a target="_blank" href="https://icons8.com/icon/pack/maps/dusk"
          >Map icon</a
        >
        icon by <a href="https://icons8.com" target="_blank">icons8</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>

<style scoped>
/* #nav-links {
} */
.nav-links {
  margin: 1rem;
}
</style>
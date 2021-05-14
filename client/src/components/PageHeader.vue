<template>
  <div id="block-header">
    <h1 id="title">Have you visited every state?</h1>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<!--CSS-->
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#block-header {
  padding: 6rem 1rem;
  margin-bottom: 3rem;
  border-radius: 0.3rem;
  background-color: saddlebrown;
  background-image: url("~@/assets/map.jpg");
  background-position: center;
  background-size: cover;
}
#titel {
  font-weight: 500;
  color: ghostwhite;
}
</style>
<template>
  <div class="state-info">
    <span class="state-name">{{ state.name }}</span>
    <div>
      <input type="checkbox" class="visit-state" v-model="visited" />
    </div>
    <!-- map icon-->
    <router-link
      v-bind:to="{ name: 'StateMap', params: { state: state.name } }"
    >
      <img src="@/assets/icon-map.png" class="map-icon" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "StateDetail",
  emits: ["update-visited"],
  props: {
    state: Object,
  },
  data() {
    return {
      visited: this.state.visited, // New data visited, copied from state prop
    };
  },
  watch: {
    //if the checkbox changes, emit a message to parent
    visited() {
      this.$emit("update-visited", this.state.name, this.visited);
    },
  },
};
</script>

<style scoped>
.state-info {
  padding: 1rem;
  height: 8rem;
  width: 10rem;
  border: 1px gainsboro solid;
  border-radius: 0.3rem;
  background-color: whitesmoke;
}
.visited-state {
  margin: 1rem;
}
</style>
<template>
  <div v-if="states.length > 0">
    <h3>You have visited {{ totalVisited }} {{ units }}</h3>
    <p id="all-visited-msg" v-if="areAllVisited">
      You have visited every state!
    </p>
  </div>
</template>

<script>
export default {
  name: "StateSummary",
  props: {
    states: Array,
  },
  computed: {
    totalVisited() {
      //displaying the total states visited
      let visitedCount = 0;
      this.states.forEach((state) => {
        if (state.visited) {
          visitedCount++; //increment
        }
      });
      return visitedCount;
    },
    areAllVisited() {
      //it is a computed property,
      return this.totalVisited === this.states.length; //if true, displays msg
    },
    units() {
      if (this.totalVisited === 1) {
        return "state";
      } else {
        return "states";
      }
    },
  },
};
</script>

<style scoped>
#all-visited-msg {
  color: brown;
  font-weight: 600;
}
</style>
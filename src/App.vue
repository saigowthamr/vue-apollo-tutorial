<template>
  <div id="app">
    <div v-if="$apollo.loading">Loading..</div>
    <div v-else>
      <h1>Name: {{viewer.name}}</h1>
      <p>Email: {{viewer.email }}</p>
    </div>
    <Myrepos/>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
import Myrepos from "./components/my-repos";
export default {
  data: function() {
    return {
      viewer: {}
    };
  },
  components: { Myrepos },
  apollo: {
    viewer: {
      query: gql`
        {
          viewer {
            name
            email
          }
        }
      `
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
}

button {
  margin-top: 12px;
  background-color: rgb(241, 241, 44);
  color: black;
  padding: 6px;
  font-size: 0.9rem;
  border: 1px solid;
  cursor: pointer;
}
</style>

<template>
  <div class="addStar">
    <ApolloMutation :mutation="addStar" :variables="{repoid:id}" @done="onDone">
      <template slot-scope="{ mutate, loading, error }">
        <div v-if="loading">Loading</div>
        <button :disabled="loading" @click="mutate()">Add star</button>
        <p v-if="error">An error occured: {{ error }}</p>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
export default {
  props: ["id", "refetch"],
  data: function() {
    return {
      addStar: gql`
        mutation AddStar($repoid: ID!) {
          addStar(input: { starrableId: $repoid }) {
            starrable {
              viewerHasStarred
            }
          }
        }
      `
    };
  },
  methods: {
    onDone: function() {
      this.refetch();
    }
  }
};
</script>

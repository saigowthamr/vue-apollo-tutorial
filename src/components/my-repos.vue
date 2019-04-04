<template>
  <div class="repos">
    <div v-if="loading">loading</div>
    <div v-else>
      <h2>First 10 repositories</h2>
      <!-- looping through viewer repos -->
      <ul v-for="repo in viewer.repositories.edges" :key="repo.node.id">
        <li>{{repo.node.name}}</li>
        <li>Stars : {{repo.node.stargazers.totalCount}}</li>
        <li v-if="!repo.node.viewerHasStarred">
          <AddStar :id="repo.node.id" :refetch="refetch"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
import AddStar from "./add-star";
export default {
  data: function() {
    return {
      viewer: [],
      loading: true
    };
  },
  components: {
    AddStar
  },
  apollo: {
    viewer: {
      query: gql`
        query MyRepos($first: Int!) {
          viewer {
            repositories(first: $first) {
              edges {
                node {
                  id
                  name
                  viewerHasStarred
                  stargazers {
                    totalCount
                  }
                }
              }
            }
          }
        }
      `,
      result: function({ data }) {
        if (data) {
          this.loading = false;
        }
      },
      variables: { first: 10 }
    }
  },
  methods: {
    refetch: function() {
      this.$apollo.queries.viewer.refetch();
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  border: 1px solid;
  padding: 1rem;
}
</style>

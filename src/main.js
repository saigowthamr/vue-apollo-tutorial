import Vue from 'vue'
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost'
import App from './App.vue'
/* eslint-disable */

Vue.use(VueApollo);

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer 56f5502009f363713d449cc9752a84b7a8720adc`
      },
    });
  }
});

const apolloProvider = new VueApollo({
  defaultClient: client
})




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  apolloProvider,
}).$mount('#app')

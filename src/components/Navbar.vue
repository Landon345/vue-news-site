<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/articles">Articles</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  data() {
    return {
      api_key: process.env.VUE_APP_API_KEY,
      url_base: "http://newsapi.org/v2/top-headlines?country=us&",
      news: [],
    };
  },
  methods: {
    async fetchNews() {
      const response = await fetch(`${this.url_base}apiKey=${this.api_key}`);
      const data = await response.json();
      console.log(data.articles);
      this.news = data.articles;
    },
  },
  created() {
    this.fetchNews();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
  position: sticky;
}
</style>

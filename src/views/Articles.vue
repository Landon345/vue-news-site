<template>
  <div class="hello">
    <h1 class="title">Top Headlines</h1>
    <div class="articles-container">
      <div v-for="article in news" :key="article" class="card">
        <ArticleCard v-bind:article="article" />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from "../components/ArticleCard";
export default {
  props: {
    msg: String,
  },
  components: {
    ArticleCard,
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

<style scoped>
.articles-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  background-color: #eee;
}
.title {
  background-color: #eee;
  font-size: 60px;
  font-weight: 800;
  text-align: center;
  padding: 60px;
}
</style>
<template>
  <div class="home">
    <header class="page-header">
      <h1>Search for a news article</h1>
    </header>
    <div class="search-bar-container">
      <input type="text" class="search" placeholder="Search..." v-model="query" />
    </div>
    <div class="found-articles">
      <div v-for="article in news" :key="article" class="card">
        <ArticleCard v-bind:article="article" />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from "../components/ArticleCard";
import _ from "lodash";
export default {
  name: "Home",
  components: {
    ArticleCard,
  },
  data() {
    return {
      query: "",
      debouncedQuery: "",
      api_key: process.env.VUE_APP_API_KEY,
      url_base: "http://newsapi.org/v2/everything?",
      news: [],
    };
  },
  methods: {
    async fetchNews() {
      const response = await fetch(
        `${this.url_base}q=${this.query || "hollywood"}&apiKey=${this.api_key}`
      );
      const data = await response.json();
      console.log(data.articles);
      this.news = data.articles;
    },
    search: _.debounce((fetch) => {
      fetch();
    }, 600),
  },
  watch: {
    query: function () {
      this.search(this.fetchNews);
    },
  },
  created() {
    this.fetchNews();
  },
};
</script>

<style>
.home {
  background-color: #eee;
}
.page-header {
  font-size: 45px;
  font-weight: 800;
  text-align: center;
  padding: 60px;
}

@media (max-width: 1200px) {
  .page-header {
    font-size: 30px;
  }
}
.search-bar-container {
  display: flex;
  justify-content: center;
  margin: 10px 10%;
}
.search {
  width: 100%;
  border: none;
  outline: none;
  padding: 5px;
  padding-left: 20px;
  font-size: 25px;
  border-radius: 40px;
  border: 2px solid black;
}
.search:focus {
  border: 2px solid lime;
}
.search-button {
  border: 2px solid black;
  cursor: pointer;
  outline: none;
  color: white;
  font-size: 20px;

  background: linear-gradient(180deg, lime, green);
}
.search-button:active {
  background: linear-gradient(180deg, green, lime);
}
</style>

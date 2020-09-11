<template>
  <div class="hello">
    <div>
      <div v-for="article in news" :key="article">
        <div>
          <h3>Author</h3>
          <p>{{ article.author }}</p>
        </div>
        <div>
          <h3>Description</h3>
          <p>{{ article.description }}</p>
        </div>
        <div>
          <h3>Content</h3>
          <p>{{ article.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
<style scoped></style>

<template>
  <div class="inner-card">
    <div class="text">
      <h3>Title</h3>
      <p>{{article.title || "no title found"}}</p>
    </div>
    <div class="text">
      <h3>Author</h3>
      <p>{{article.author || "no author found"}}</p>
    </div>
    <div class="text">
      <h3>Description</h3>
      <p>{{article.description || "no description found"}}</p>
    </div>

    <button class="read-more" @click="readmore(article)">{{expanded ? "Read Less" : "Read More"}}</button>

    <div class="expanded-card" v-if="expanded">
      <div class="image">
        <img :src="article.urlToImage" alt="image" class="img" />
      </div>
      <div class="text">
        <h3>Content</h3>
        <p>{{splicedArticleContent() || "no content found"}}</p>
      </div>
      <div class="text">
        <a :href="article.url" target="_blank">Full Article</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
    };
  },
  props: {
    article: Object,
  },
  methods: {
    readmore(publishedAt) {
      this.expanded = !this.expanded;
      console.log("read more", publishedAt);
    },
    splicedArticleContent() {
      const content = this.article.content;
      if (content.length >= 200) {
        return content.slice(0, content.length - 20) + "...";
      } else {
        return content;
      }
    },
  },
};
</script>

<style scoped>
.inner-card {
  padding: 30px 50px;
}
.text {
  margin-bottom: 20px;
}
h3 {
  font-size: 30px;
}
p {
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.read-more {
  font-size: 20px;
  background-color: #23ff90;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 20px;
  margin: 20px 0px;
}
.read-more:hover {
  background-color: #88ff55;
  transition: background-color 0.2s ease-in-out;
}
.read-more:active {
  transform: translate(1px, 1px);
}
.image {
}
img {
  object-fit: contain;
  height: 250px;
}
</style>
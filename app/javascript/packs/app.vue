<template>
  <div>
    <textarea :name="name" v-model="body"></textarea>
    <div v-html="markdownBody"></div>
  </div>
</template>

<script>
import marked from 'marked'

export default {

  // Just setup the component with empty content so we have something to start with
  data: function () {
    return {
      name: "",
      body: ""
    }
  },

  // This is the magic part where we populate the Vue widget with the data from the Rails input
  // We also get the name of the field to use as the name of the text area so that we can reuse this on any model!
  beforeMount: function() {
    this.name = this.$el.name
    this.body = this.$el.value
  },

  // Obviously this would generate the Markdown preview here, so you can reference like the 'marked' js library or whatever instead
  computed: {
    markdownBody: function () {
      return marked(this.body, { sanitize: true })
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>

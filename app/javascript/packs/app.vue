<template>
  <div>
    <textarea name="post[body]" v-model="body"></textarea>
    <div>{{ markdownBody }}</div>
  </div>
</template>

<script>
export default {

  // Just setup the component with empty content so we have something to start with
  data: function () {
    return {
      body: ""
    }
  },

  // This is the magic part where we populate the Vue widget with the data from the Rails input
  beforeMount: function() {
    this.body = this.$el.value
  },

  // Obviously this would generate the Markdown preview here, so you can reference like the 'marked' js library or whatever instead
  computed: {
    markdownBody: function () {
      return this.body.split('').reverse().join('')
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

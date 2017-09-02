/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you set extractStyles to true
// in config/webpack/loaders/vue.js) to the head of your layout file,
// like app/views/layouts/application.html.erb.

import Vue from 'vue'
import App from './app.vue'

document.addEventListener('turbolinks:load', () => {
  var el = document.querySelector("#post_body")
  if (el) {
    const app = new Vue(App).$mount(el)
  }
})

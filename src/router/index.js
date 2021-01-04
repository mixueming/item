import Vue from 'vue'
import VueRouter from 'vue-router'

import center from "./routes/center"
import cinema from "./routes/cinema"
import film from "./routes/film"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/film/nowPlaying"
  },
  ...film,
  cinema,
  center,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

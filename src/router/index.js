import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About/about.vue'
import Gallery from '../views/About/Gallery/gallery.vue'
import Aboutview from '../views/About/aboutview.vue'
import Kolkatta from '../views/About/Gallery/kolkatta.vue'
import Bangalore from '../views/About/Gallery/bangalore.vue'
import Kerala from '../views/About/Gallery/kerala.vue'
import Bhopal from '../views/About/Gallery/bhopal.vue'
import Achievements from '../views/About/achievements.vue'
import Project from '../views/project.vue'
import Experience from '../views/experience.vue'
import Skills from '../views/skills.vue'
import Contact from '../views/contact.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutView',
    component: Aboutview,
    children: [
      {path: '',component: About},
      {path: '/about/gallery',component: Gallery},
      {path: '/about/gallery/kolkatta',component: Kolkatta},
      {path: '/about/gallery/bangalore',component: Bangalore},
      {path: '/about/gallery/kerala',component: Kerala},
      {path: '/about/gallery/bhopal',component: Bhopal},
      {path: '/about/achievements',component: Achievements}
    ]
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

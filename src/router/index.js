import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
    }, {
      path: '/user/:id',
      name: 'TodoList',
      component: TodoList
    }
  ]
})

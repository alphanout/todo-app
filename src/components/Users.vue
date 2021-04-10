<template>
  <div>
    <h1>Users</h1>
    <ul style="list-style-type: none">
      <li v-for="task in tasks" v-bind:key="task">
        <button class="user" type="submit" v-on:click="submit(task)">
          {{ task }}
          <span class="close" v-on:click.stop="remove(task)">x</span>
        </button>
      </li>
      <li>
        <input
          class="user add"
          v-on:keyup.enter="addUser"
          v-model="message"
          placeholder="Add New User"
        />
      </li>
    </ul>
  </div>
</template>

<script type = 'text/javascript' >
export default {
  name: 'TodoList',
  data () {
    return {
      tasks: [],
      message: ''
    }
  },
  created () {
    if (localStorage.getItem('users') === null) {
      localStorage.removeItem('users')
      localStorage.setItem('users', JSON.stringify({ user: [] }))
    }
    this.getData()
  },
  methods: {
    getData () {
      this.tasks = []
      let todos = this.tasks
      let user = JSON.parse(localStorage.getItem('users'))
      if (todos.length === 0) {
        user.user.forEach((element) => {
          todos.push(element)
        })
      }
    },
    submit (user) {
      this.$router.push('/user/' + user)
    },
    remove (id) {
      let user = JSON.parse(localStorage.getItem('users'))
      this.tasks = user.user.filter((item) => {
        if (item !== id) return item
        return false
      })
      user.user = this.tasks
      localStorage.removeItem('users')
      localStorage.setItem('users', JSON.stringify(user))
    },
    addUser () {
      if (this.message && this.message !== '') {
        let user = JSON.parse(localStorage.getItem('users'))
        for (let i in user.user) {
          if (this.message.localeCompare(user.user[i]) === 0) return
        }
        user.user.push(this.message)
        localStorage.removeItem('users')
        localStorage.setItem('users', JSON.stringify(user))
        this.message = ''
      }
      this.getData()
    }
  }
}
</script>

<style>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.user {
  position: relative;
  align-self: center;
  width: 50%;
  margin: 0.75vw;
  align-items: center;
  padding: 10px 16px;
  text-align: center;
  font-size: 125%;
  display: inline-block;
  border: 1px solid #4caf50;
  border-radius: 8px;
  background-color: lightcoral;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition-duration: 0.4s;
}
.user:hover {
  background-color: #4caf50; /* Green */
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.close {
  cursor: pointer;
  position: absolute;
  right: 0%;
  top: 50%;
  padding: 12px 16px;
  transform: translate(0%, -50%);
}
.close:hover {
  background: #bbb;
}
.add {
  margin: 20px;
}
</style>

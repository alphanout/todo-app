<template>
  <div>
    <h1>
      {{ $route.params.id }}
    </h1>
    <h2>Tasks to be accomplished</h2>

    <ul style="list-style-type: none">
      <li v-for="task in tasks" v-bind:key="task">
        <button class="use" type="submit" v-on:click="submit(task)">
          {{ task }}
          <span class="clos" v-on:click.stop="remove(task)">X</span>
        </button>
      </li>
      <li>
        <textarea
          class="use ad"
          type="textarea"
          v-on:keyup.enter="addUser"
          v-model="message"
          placeholder="Add New Task"
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
      reload: true,
      message: '',
      id: this.$route.params.id
    }
  },
  created () {
    // localStorage.clear()
    if (localStorage.getItem(this.id) === null) {
      localStorage.setItem(this.id, JSON.stringify({ user: [] }))
    }
    this.getData()
  },
  methods: {
    getData () {
      this.tasks = []
      let todos = this.tasks
      let user = JSON.parse(localStorage.getItem(this.id))
      if (todos.length === 0) {
        user.user.forEach((element) => {
          todos.push(element)
        })
      }
    },
    remove (id) {
      let user = JSON.parse(localStorage.getItem(this.id))
      this.tasks = user.user.filter((item) => {
        if (item !== id) return item
        return false
      })
      user.user = this.tasks
      localStorage.removeItem(this.id)
      localStorage.setItem(this.id, JSON.stringify(user))
    },
    addUser () {
      if (this.message && this.message !== '') {
        let user = JSON.parse(localStorage.getItem(this.id))
        for (let i in user.user) {
          if (this.message.localeCompare(user.user[i]) === 0) return
        }
        user.user.push(this.message)
        localStorage.removeItem(this.id)
        localStorage.setItem(this.id, JSON.stringify(user))
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
.use {
  overflow: hidden;
  overflow-wrap: break-word;
  display: block;
  position: relative;
  align-self: center;
  width: 50%;
  margin: 0.75vw;
  align-items: center;
  padding: 10px 16px;
  padding-right: 5.5%;
  text-align: center;
  font-size: 125%;
  display: inline-block;
  border: 1px solid #4caf50;
  border-radius: 8px;
  background-color: rgb(86, 186, 204);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition-duration: 0.4s;
}
.use:hover {
  background-color: #4c63af; /* Green */
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.clos {
  cursor: pointer;
  display: inline-block;
  position: absolute;

  height: 100%;
  top: 0;
  right: 0;
  padding: 0 12px;
  text-align: center;
}
.clos:hover {
  background: rgb(12, 5, 5);
}
.ad {
  margin: 20px;
  font-size: 2vw;
}
::placeholder { /* Most modern browsers support this now. */
   color:    rgb(3, 1, 3);
}
</style>

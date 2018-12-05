<template>
  <section>
    <div v-show="errored">
      <p class="alert alert-danger">I don't feel so good</p>
    </div>
    <span v-if="loading" class="badge secondary">
      Loading
    </span>
    <users-tabel v-if="!loading" v-bind:users="usersArray" v-on:delete-user="deleteUser"></users-tabel>
  </section>
</template>

<script>
import axios from 'axios'
import UsersTabel from '@/components/UsersTabel.vue'

export default {
  name: 'UsersPage',
  components: {
    'users-tabel': UsersTabel
  },
  data() {
    return {
      loading: true,
      updatingUser: false,
      errored: false,
      usersArray: [],
      singleUser: []
    }
  },
  mounted() {
    axios
      .get(`http://localhost:3004/users`)
      .then(response => {
        this.usersArray = response.data
        // eslint-disable-next-line
        console.log('Data has been loaded')
      })
      .catch(error => {
        this.errored = true
        // eslint-disable-next-line
        console.log(error)
      })
      .finally(() => {
        this.loading = false
      })
  },
  methods: {
    deleteUser(id) {
      var userIndexInArray = this.usersArray.findIndex(user => {
        return user.id === id
      })

      this.usersArray.splice(userIndexInArray, 1)
    }
  }
}
</script>

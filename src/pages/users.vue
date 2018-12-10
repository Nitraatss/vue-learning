<template>
  <section>
    <div v-show="errored"><p class="alert alert-danger">I don't feel so good</p></div>
    <span v-if="loading" class="badge secondary"> Loading </span>
    <users-per-select
      v-model="usersPerPage"
      v-on:change-users-per-page-number="changeUsersPerPageNumber"
    ></users-per-select>
    <users-tabel
      v-if="!loading"
      v-model="users"
      v-bind:usersPage="usersPage"
      v-on:delete-user="deleteUser"
      v-on:refresh-list="refreshList"
    ></users-tabel>
    <users-pagination
      v-if="!loading"
      v-model="usersPage"
      v-bind:pagesNumber="totalPages"
      v-on:swap-page="swapPage"
    ></users-pagination>
  </section>
</template>

<script>
import axios from 'axios'
import UsersTabel from '@/components/UsersTabel.vue'
import UsersPagination from '@/components/UsersPagination.vue'
import UsersNumberPerPage from '@/components/UsersNumberPerPage.vue'

export default {
  name: 'UsersPage',
  components: {
    'users-tabel': UsersTabel,
    'users-pagination': UsersPagination,
    'users-per-select': UsersNumberPerPage
  },
  data: () => {
    return {
      loading: true,
      updatingUser: false,
      errored: false,
      users: [],
      singleUser: [],
      usersPerPage: 3,
      usersPage: 1,
      totalPages: 0
    }
  },
  computed: {
    totalPages() {
      return Math.floor(this.users.length / this.usersPerPage)
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      this.loading = true
      this.errored = false

      axios
        .get(`http://localhost:3004/users`)
        .then(response => {
          this.totalPages = Math.ceil(response.data.length / this.usersPerPage)
        })
        .catch(error => {
          this.errored = true
          // eslint-disable-next-line
          console.log(error)
        })

      const url = `http://localhost:3004/users?_page=${this.usersPage}&_limit=${this.usersPerPage}`
      console.log(url)

      axios
        .get(url)
        .then(response => {
          this.users = response.data
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
    deleteUser(id) {
      axios
        .delete(`http://localhost:3004/users/${id}`)
        .then(() => {
          var userIndexInArray = this.users.findIndex(user => {
            return user.id === id
          })

          this.users.splice(userIndexInArray, 1)
        })
        .catch(error => {
          this.errored = true
          // eslint-disable-next-line
          console.log(error)
        })
    },
    refreshList() {
      this.loadUsers()
    },
    swapPage() {
      this.loadUsers()
    },
    changeUsersPerPageNumber() {
      this.loadUsers()
    }
  },
  watch: {
    usersPage: 'loadUsers'
  }
}
</script>

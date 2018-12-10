<template>
  <section>
    <div v-show="errored"><p class="alert alert-danger">I don't feel so good</p></div>
    <div v-show="updated"><p class="alert alert-success">You git gud</p></div>
    <span v-if="loading" class="badge secondary"> Loading </span>
    <pre>{{ singleUser }}</pre>
    <user-form v-if="!loading" v-model="singleUser" v-on:update-user="updateUser"></user-form>
  </section>
</template>

<script>
import axios from 'axios'
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'UserUpdatePage',
  components: {
    'user-form': UserForm
  },
  data: () => {
    return {
      loading: true,
      errored: false,
      updated: false,
      singleUser: []
    }
  },
  mounted() {
    axios
      .get(`http://localhost:3004/users/${this.$route.params.id}`)
      .then(response => {
        this.singleUser = response.data
        // eslint-disable-next-line
        console.log('User has been loaded')
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
    updateUser(updatedUser) {
      axios
        .patch(`http://localhost:3004/users/${this.$route.params.id}`, updatedUser)
        .then(response => {
          this.updated = true
          // eslint-disable-next-line
          console.log(response)
        })
        .catch(error => {
          this.errored = true
          // eslint-disable-next-line
          console.log(error)
        })
    }
  }
}
</script>

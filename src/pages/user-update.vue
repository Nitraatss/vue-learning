<template>
  <section>
    <div v-show="errored">
      <p class="alert alert-danger">I don't feel so good</p>
    </div>
    <span v-if="loading" class="badge secondary">
      Loading
    </span>
    <user-form v-if="!loading" v-bind:user="singleUser"></user-form>
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
  data() {
    return {
      loading: true,
      errored: false,
      singleUser: []
    }
  },
  mounted() {
    axios
      .get(`http://localhost:3000/users/${this.$route.params.id}`)
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
  }
}
</script>

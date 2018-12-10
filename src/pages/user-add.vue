<template>
  <section>
    <div v-show="errored">
      <p class="alert alert-danger">
        I don't feel so good
      </p>
    </div>
    <div v-show="added">
      <p class="alert alert-success">
        You git gud
      </p>
    </div>
    <UserAddForm @add-user="addUser" />
  </section>
</template>

<script>
import axios from 'axios'
import UserAddForm from '@/components/UserAddForm.vue'

export default {
  name: 'UserAddPage',
  components: {
    UserAddForm
  },
  data: () => {
    return {
      errored: false,
      added: false
    }
  },
  mounted() {
    console.log(`Ready to add`)
  },
  methods: {
    addUser(newUser) {
      axios
        .post('http://localhost:3004/users/', newUser)
        .then(response => {
          this.added = true
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

<template>
  <section>
    <p>{{ userData.name }}</p>
    <input v-model="userData.name" type="text">
    <p>{{ userData.username }}</p>
    <input v-model="userData.username" type="text">
    <p>{{ userData.email }}</p>
    <input v-model="userData.email" type="email">
    <br>
    <button class="btn-success" type="button" v-on:click="submitUpdate">Submit</button>
    <button class="btn-warning" type="button" v-on:click="resetUserData">Reset</button>
    <router-link tag="button" to="/users" class="btn-danger">
      Decline
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      userData: []
    }
  },
  mounted() {
    this.userData = Object.assign({}, this.user)
    // eslint-disable-next-line
    console.log('Component UserForm has been mounted')
  },
  methods: {
    submitUpdate() {
      // eslint-disable-next-line
      console.log(`Lul`)
    },
    resetUserData() {
      this.userData = Object.assign({}, this.user)
    }
  }
}
</script>

<template>
  <section>
    <p>{{ userData.name }}</p>
    <input v-model="userData.name" type="text" />
    <p>{{ userData.username }}</p>
    <input v-model="userData.username" type="text" />
    <p>{{ userData.email }}</p>
    <input v-model="userData.email" type="email" /> <br />
    <button class="btn-success" type="button" v-on:click="submitUpdate">Submit</button>
    <button class="btn-warning" type="button" v-on:click="resetUserData">Reset</button>
    <button class="btn-danger" type="button" v-on:click="canselUpdate">Cansel</button>
  </section>
</template>

<script>
export default {
  name: 'UserForm',
  model: {
    prop: 'singleUser'
  },
  props: {
    singleUser: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
      userData: [],
      defaultData: []
    }
  },
  watch: {
    userData: {
      deep: true,
      handler() {
        this.$emit('input', this.userData)
      }
    }
  },
  mounted() {
    console.log(this.singleUser)
    this.userData = Object.assign({}, this.singleUser)
    this.defaultData = Object.assign({}, this.singleUser)
    // eslint-disable-next-line
    console.log('Component UserForm has been mounted')
  },
  methods: {
    submitUpdate() {
      this.$emit('update-user', Object.assign({}, this.userData))
    },
    resetUserData() {
      this.userData = Object.assign({}, this.defaultData)
    },
    canselUpdate() {
      this.$router.push('/users')
    }
  }
}
</script>

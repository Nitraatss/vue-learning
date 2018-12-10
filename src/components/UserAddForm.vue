<template>
  <section>
    <p v-bind:class="{ alert: errorName, 'alert-danger': errorName }">Name: {{ userData.name }}</p>
    <input v-model="userData.name" type="text" />
    <p v-bind:class="{ alert: errorUsername, 'alert-danger': errorUsername }">
      Username: {{ userData.username }}
    </p>
    <input v-model="userData.username" type="text" />
    <p v-bind:class="{ alert: errorEmail, 'alert-danger': errorEmail }">
      Email: {{ userData.email }}
    </p>
    <input v-model="userData.email" type="email" /> <br />
    <button class="btn-success" type="button" v-on:click="submitAdding">Submit</button>
    <button class="btn-warning" type="button" v-on:click="resetFields">Reset</button>
    <button class="btn-danger" type="button" v-on:click="canselAdding">Cansel</button>
  </section>
</template>

<script>
export default {
  name: 'UserAddForm',
  data: () => {
    return {
      userData: {
        name: ``,
        username: ``,
        email: ``
      },

      errorName: false,
      errorUsername: false,
      errorEmail: false
    }
  },
  mounted() {
    // eslint-disable-next-line
    console.log('Component UserAddForm has been mounted')
  },
  methods: {
    submitAdding() {
      this.checkFields()

      if (!this.errorName || !this.errorUsername || !this.errorEmail) {
        this.userData.id = this.getUniqueID()
        this.$emit('add-user', Object.assign({}, this.userData))
      }
    },
    checkFields() {
      if (!this.userData.name.length) {
        this.errorName = true
      } else {
        this.errorName = false
      }

      if (!this.userData.username.length) {
        this.errorUsername = true
      } else {
        this.errorUsername = false
      }

      if (!this.userData.email.length || !this.validEmail(this.userData.email)) {
        this.errorEmail = true
      } else {
        this.errorEmail = false
      }
    },
    validEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    getUniqueID(length = 15) {
      if (typeof length !== 'number') {
        throw new Error('The function argument should be a number!')
      }

      let text = ''
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }

      return text
    },
    resetFields() {
      this.userData.name = ``
      this.userData.username = ``
      this.userData.email = ``
    },
    canselAdding() {
      this.$router.push('/users')
    }
  }
}
</script>

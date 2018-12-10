<template>
  <section>
    <label for="usersPerPage">
      Choose number of users per page
    </label>
    <select
      id="usersPerPage"
      ref="selectUsers"
      @change="changeUsersPerPage"
    >
      <option value="1">
        1
      </option>
      <option value="2">
        2
      </option>
      <option
        value="3"
        selected
      >
        3
      </option>
      <option value="4">
        4
      </option>
    </select>
  </section>
</template>

<script>
export default {
  name: 'UsersNumberPerPage',
  model: {
    prop: 'usersPerPage'
  },
  props: {
    usersPerPage: {
      type: Number,
      required: true
    }
  },
  watch: {
    usersPerPage: {
      deep: true,
      handler () {
        this.$emit('input', this.usersPerPage)
        this.$emit('change-users-per-page-number', this.usersPerPage)
      }
    }
  },
  mounted () {
    // eslint-disable-next-line
    console.log('Component UsersPagination  has been mounted')
  },
  methods: {
    changeUsersPerPage () {
      this.usersPerPage = this.$refs.selectUsers.value
    }
  }
}
</script>

<template>
  <section>
    <div
      v-for="page in pagesNumber"
      :key="page"
      class="pagination"
    >
      <button
        class="active"
        type="button"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UsersNumberPerPage',
  model: {
    prop: 'usersPage'
  },
  props: {
    usersPage: {
      type: Number,
      required: true
    },
    pagesNumber: {
      type: Number,
      required: true
    }
  },
  data: () => {
    return {
      currentPage: 1
    }
  },
  watch: {
    usersPage: {
      deep: true,
      handler () {
        this.$emit('input', this.usersPage)
        this.$emit('swap-page', this.usersPage)
      }
    }
  },
  mounted () {
    // eslint-disable-next-line
    console.log('Component UsersPagination  has been mounted')
  },
  methods: {
    changePage (pageNumber) {
      this.usersPage = pageNumber
    }
  }
}
</script>

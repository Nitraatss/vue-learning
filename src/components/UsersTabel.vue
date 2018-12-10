<template>
  <section>
    <button
      v-show="tableIsVisible"
      @click="refreshList"
    >
      Refresh List
    </button>
    <table
      v-show="tableIsVisible"
      v-if="users.length > 0"
      class="users-tabel"
    >
      <caption class="users-tabel__total-users">
        Service Users
      </caption>
      <thead>
        <tr class="users-tabel__row users-tabel__row--header">
          <th v-for="headerText in thead">
            {{ headerText }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user, number) in users"
          :key="user.id"
          class="users-tabel__row users-tabel__row--body"
        >
          <td class="users-tabel__data users-tabel__data--number">
            {{ user.id }}
          </td>
          <td
            v-copy="user.name"
            class="users-tabel__data users-tabel__data--name"
          >
            {{ user.name | capitalize }} <br>
            <RouterLink
              tag="button"
              :to="'/update/' + user.id"
              class="btn-secondary"
            >
              Update
            </RouterLink>
            <button
              class="btn-danger"
              @click="deleteUser(user.id)"
            >
              Delete
            </button>
          </td>
          <td
            v-copy="user.username"
            class="users-tabel__data users-tabel__data--username"
          >
            {{ user.username }}
          </td>
          <td
            v-copy="user.email"
            class="users-tabel__data users-tabel__data--email"
          >
            {{ user.email }}
          </td>
          <td
            v-if="user.address"
            class="users-tabel__data users-tabel__data--address"
          >
            <ul>
              <li><span>Street: </span>{{ user.address.street }}</li>
              <li><span>Suite: </span>{{ user.address.suite }}</li>
              <li><span>City: </span>{{ user.address.city }}</li>
              <li><span>Zipcode: </span>{{ user.address.zipcode }}</li>
            </ul>
          </td>
          <td
            v-if="user.phone"
            v-copy="user.phone"
            class="users-tabel__data users-tabel__data--phone"
          >
            {{ user.phone }}
          </td>
          <td
            v-if="user.website"
            v-copy="user.website"
            class="users-tabel__data users-tabel__data--website"
          >
            <a
              :href="user.website"
              target="_blank"
            >
              {{ user.website }}
            </a>
          </td>
          <td
            v-if="user.company"
            v-copy="user.company.name"
            class="users-tabel__data users-tabel__data--company"
          >
            {{ user.company.name }}
          </td>
        </tr>
      </tbody>
    </table>

    <section v-if="users.length > 0">
      <span>Total Users Number:</span> <span class="badge success">
        {{ totalUsersNumber }}
      </span>
    </section>

    <button
      v-if="users.length > 0"
      v-tooltip.top-center="tooltipMessage"
      @click="toggleTableState()"
    >
      <span v-if="tableIsVisible">
        Hide tabel
      </span> <span v-else>
        Show tabel
      </span>
    </button>

    <span
      v-if="users.length === 0"
      class="badge"
    >
      No Avengers left...
    </span>
  </section>
</template>

<script>
export default {
  name: 'UsersTabel',
  filters: {
    capitalize (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  },
  model: {
    prop: 'users'
  },
  props: {
    users: {
      type: Array,
      required: true
    },
    usersPage: {
      type: Number,
      required: true
    }
  },
  data: () => {
    return {
      tooltipToHide: 'Click to hide',
      tooltipToShow: 'Click to show',
      tableIsVisible: true,
      thead: ['№', 'Name', 'Username', 'Email', 'Address', 'Phone', 'Website', 'Company']
    }
  },
  computed: {
    totalUsersNumber () {
      return this.users.length
    },
    tooltipMessage () {
      if (this.tableIsVisible) {
        return this.tooltipToHide
      } else {
        return this.tooltipToShow
      }
    }
  },
  watch: {
    users: {
      deep: true,
      handler () {
        this.$emit('input', this.users)
      }
    }
  },
  mounted () {
    // eslint-disable-next-line
    console.log('Component UsersTabel has been mounted')
  },
  methods: {
    toggleTableState () {
      this.tableIsVisible = !this.tableIsVisible
    },
    deleteUser (id) {
      // eslint-disable-next-line
      console.log('I want to delete user with id:', id)
      this.$emit('delete-user', id)
    },
    refreshList () {
      this.$emit('refresh-list')
    }
  }
}
</script>

<template>
  <div>
    <nav
      id="nav"
      class="border"
    >
      <ul class="inline">
        <RouterLink
          tag="li"
          to="/"
          exact
          active-class="active"
        >
          <a href="#">
            Home
          </a>
        </RouterLink>
        <RouterLink
          tag="li"
          to="/users"
          exact
          active-class="active"
        >
          <a
            class="nav-link"
            href="#"
          >
            Users Tabel
          </a>
        </RouterLink>
        <RouterLink
          tag="li"
          to="/add"
          exact
          active-class="active"
        >
          <a
            class="nav-link"
            href="#"
          >
            Add User
          </a>
        </RouterLink>
      </ul>
    </nav>
    <main
      id="app"
      role="main"
    >
      <RouterView />
    </main>
  </div>
</template>

<script>
import 'papercss/dist/paper.css'

export default {
  name: 'App'
}
</script>

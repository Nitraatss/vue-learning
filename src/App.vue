<template>
  <div>
    <nav class="border" id="nav">
      <ul class="inline">
        <router-link tag="li" to="/" exact active-class="active">
          <a href="#">Home</a>
        </router-link>
        <router-link tag="li" to="/users" exact active-class="active">
          <a class="nav-link" href="#">Users Tabel</a>
        </router-link>
        <router-link tag="li" to="/add" exact active-class="active">
          <a class="nav-link" href="#">Add User</a>
        </router-link>
      </ul>
    </nav>
    <main id="app" role="main"><router-view /></main>
  </div>
</template>

<script>
import 'papercss/dist/paper.css'

export default {
  name: 'App'
}
</script>

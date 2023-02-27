<template>
   <nav class="navbar navbar-expand-md navbar-dark" >
    <a class="navbar-brand ml-5 " style="color: black;">ITxChange</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link ml-1" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
<div class= "searchbar">
      <form class="form-inline my-2 my-lg-0 mx-auto">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
      <div class="search">
        <button class="btn btn-outline-success " type="submit">
          Search
        </button>
      </div>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            v-bind:class="{active: isProfileOpen}"
            v-on:click.prevent="isProfileOpen = !isProfileOpen"
          >
            <img
              src="https://cdn.discordapp.com/attachments/883221363316375583/1079743566240301097/blank-profile-picture-973460__340.png"
              class="rounded-circle"
              alt="Profile"
              style="width: 70px; height: 70px;"
            />
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
            v-bind:class="{show: isProfileOpen}"
            style="width: 200px; padding: 10px; margin-top: 5px;"
          >
            <a class="dropdown-item" href="#">Profile</a>
            <div class="dropdown-divider"></div>
            <router-link to="/">
            <a class="dropdown-item" href="#">Logout</a>
          </router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isProfileOpen: false,
    };
  },
};
</script>

<style scoped>
.navbar {
  background-color: #a5c2e2;
  box-shadow: 0px 0px 10px rgba(158, 246, 6, 0.1);
}
.nav-link {
  color: #333;
  font-weight: 500;
  margin-right: 20px;
}
.nav-link:hover {
  color: #e9edf2;
}
.dropdown-menu {
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.dropdown-item {
  color: #333;
  font-weight: 500;
}
.dropdown-item:hover {
  color: #007bff;
}

.search{
  margin-right: 200px;
}


.searchbar{
  margin-right: 20px;
}
</style>

<template>
   <nav class="navbar navbar-expand-md navbar-dark mb-8" >
    <a class="navbar-brand ml-5" style="color: black;">ITxChange</a>
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
          <router-link to="/home">
          <a class="nav-link ml-1" href="#">Home</a>
        </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">My Fav Post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">My Post</a>
        </li>
      </ul>
      <div class="seachbar mr-8">
      <Dropdown  v-model="selectedCity2" :options="cities" optionLabel="name" :editable="true"/>
    </div>

      <div class="search m">
        <button class="btn btn-outline-primary" type="submit">
          Search
        </button>
      </div>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown mr-6">
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
              style="width: 65px; height: 65px;"
            />
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
            v-bind:class="{show: isProfileOpen}"
           
          ><router-link to="/profile">
            <a class="dropdown-item ">Edit Profile</a>
          </router-link>
            
          <div class="dropdown-divider"></div>
            <router-link to="/">
            <a class="dropdown-item">Logout</a>
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
  background-color: #a4ccdb;
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
  margin-right: 250px;
}
</style>

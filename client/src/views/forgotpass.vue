<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="text-center">Forgot Password</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" class="form-control" id="username" v-model="username" required>
          </div>
          <div class="form-group">
            <label for="password">New Password:</label>
            <input type="password" class="form-control" id="password" v-model="password" required>
          </div>
          <div class="form-group">
            <label for="confirm-password">Confirm New Password:</label>
            <input type="password" class="form-control" id="confirm-password" v-model="confirmPassword" required>
            <span v-if="!passwordsMatch" class="text-danger">Passwords do not match.</span>
          </div>
          <button type="submit" class="btn btn-primary btn-block" :disabled="!formValid">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    passwordsMatch() {
      return this.password === this.confirmPassword;
    },
    formValid() {
      return this.username && this.password && this.confirmPassword && this.passwordsMatch;
    }
  },
  methods: {
    submitForm() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.username === this.username) {
        user.password = this.password;
        localStorage.setItem('user', JSON.stringify(user));
        alert('Password updated successfully.');
        this.$router.push('/');
      } else {
        alert('Username not found.');
      }
    }
  }
}
</script>

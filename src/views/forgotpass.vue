<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="card mt-5">
          <div class="card-header">
            <h3 class="text-center">Reset Password</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="resetPassword">
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" v-model="username" required>
              </div>
              <div class="form-group">
                <label for="newPassword">New Password</label>
                <input type="password" class="form-control" id="newPassword" v-model="newPassword" required>
              </div>
              <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
            <p class="mt-3 text-center">{{ message }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: '',
      newPassword: '',
      confirmPassword: '',
      message: ''
    }
  },
  methods: {
    resetPassword() {
      const storedUsername = localStorage.getItem('username');
      if (this.username === storedUsername) {
        if (this.newPassword === this.confirmPassword) {
          localStorage.setItem('password', this.newPassword);
          this.message = 'Password changed successfully!';
        } else {
          this.message = 'New password and confirm password do not match.';
        }
      } else {
        this.message = 'Username does not match.';
      }
    }
  }
}
</script>

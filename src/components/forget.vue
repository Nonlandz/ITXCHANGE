<template>
    <div class="container">
      <div class="form-wrap">
        <h2>Forget Password</h2>
        <form>
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="username" class="form-control" id="username" v-model="username">
          </div>
          <button type="submit" class="btn btn-primary btn-block" @click.prevent="submit">{{ buttonLabel }}</button>
        </form>
        <p class="text-center mt-3">{{ message }}</p>
        <p class="text-center mt-3">
          <i class="fas fa-arrow-left mr-1"></i>
          <router-link to="/">
          <a >Back to login</a>
        </router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        isSubmitted: false
      }
    },
    computed: {
      buttonLabel() {
        return this.isSubmitted ? 'Password changed!' : 'Submit';
      },
      message() {
        return this.isSubmitted ? 'Check your username for further instructions.' : '';
      }
    },
    methods: {
      submit() {
        // Handle form submission
        this.isSubmitted = true;
      }
    }
  }
  </script>
  
  <style scoped>
  body {
    background-color: #f8f9fa;
    font-family: 'Roboto', sans-serif;
  }
  
  .container {
    max-width: 500px;
    margin: 0 auto;
    padding-top: 100px;
  }
  
  .form-wrap {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 30px;
  }
  
  .form-wrap h2 {
    font-size: 28px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .form-group label {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    display: block;
  }
  
  .form-control {
    font-size: 16px;
    border-radius: 5px;
    padding: 10px 15px;
    border: none;
    box-shadow: none;
    background-color: #f8f9fa;
    border: 1px solid #ced4da;
  }
  
  .form-control:focus {
    box-shadow: none;
    border-color: #80bdff;
  }
  
  .btn-primary {
    background-color: #007bff;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 15px;
  }
  
  .btn-primary:hover {
    background-color: #0069d9;
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  
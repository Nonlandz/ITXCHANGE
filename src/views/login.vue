<template lang="">
  <div class="body">
    <div class="container">
      <input type="checkbox" id="flip" />
      <div class="cover">
        <div class="front">
          <img
            src="https://cdn.discordapp.com/attachments/883221363316375583/1079743566240301097/blank-profile-picture-973460__340.png"
            alt=""
          />
          <div class="text">
            <span class="text-1 text-dark">ITxChange<br /> </span>
            <span class="text-2 text-dark">Let's Change Something New! </span>
          </div>
        </div>
        <div class="back">
          <!--<img class="backImg" src="images/backImg.jpg" alt="">-->
          <div class="text">
            <span class="text-1"
              >Complete miles of journey <br />
              with one step</span
            >
            <span class="text-2">Let's get started</span>
          </div>
        </div>
      </div>
      <div class="forms">
        <div class="form-content">
          <div class="login-form">
            <div class="title">Login</div>
            <form action="#">
              <div class="input-boxes">
                <div class="input-box">
                  <i class="pi pi-envelope"></i>
                  <input type="text" v-model="username" placeholder="Enter your username" />
                </div>
                <div class="input-box">
                  <i class="fas fa-lock"></i>
                  <input type="password" v-model="password" placeholder="Enter your password" />
                </div>
                <router-link to="/forgotpass">
                  <div class="text"><a href="#">Forgot password?</a></div>
                </router-link>
                <div class="button input-box">
                  <input type="submit" value="Submit" @click="signin()" />
                </div>
                <div class="text sign-up-text">
                  Don't have an account?
                  <router-link to="/signup"><label for="flip">Signup now</label> </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script src="./data.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  methods:{
    confirm(){
          if(!this.prename || !this.fname || !this.lname || !this.score){
            alert("Please enter all inputs")
          }
          else{
            this.students.push({
              name: this.prename + this.fname + " " +this.lname,
              score: this.score
              })
          }
    }
</script> -->

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      user: []
    }
  },
  mounted() {
    var retrievedObject = JSON.parse(localStorage.getItem('user'))
    this.user = retrievedObject
  },
  methods: {
    signin: function () {
      console.log('sa')

      // if (this.username != "user.username") {
      //   alert("asdsad")
      // }
      // if (this.password == "user.password") {
      //   alert("asdsad")
      // }
    }
  }
}
</script>

<style scoped>
.body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1e4f79;
  padding: 30px;
}

.container {
  position: relative;
  max-width: 850px;
  width: 100%;
  background: #fff;
  padding: 40px 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  perspective: 2700px;
}

.container .cover {
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 50%;
  z-index: 98;
  transition: all 1s ease;
  transform-origin: left;
  transform-style: preserve-3d;
}

.container #flip:checked ~ .cover {
  transform: rotateY(-180deg);
}

.container .cover .front,
.container .cover .back {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cover .back {
  transform: rotateY(180deg);
  backface-visibility: hidden;
}

.container .cover::before,
.container .cover::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background: #f5e1ca;
  opacity: 0.5;
  z-index: 12;
}

.container .cover::after {
  opacity: 0.3;
  transform: rotateY(180deg);
  backface-visibility: hidden;
}

.container .cover img {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 10;
}

.container .cover .text {
  position: absolute;
  z-index: 130;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cover .text .text-1,
.cover .text .text-2 {
  font-size: 26px;
  font-weight: 600;
  color: #fff;
  text-align: center;
}

.cover .text .text-2 {
  font-size: 15px;
  font-weight: 500;
}

.container .forms {
  height: 100%;
  width: 100%;
  background: #fff;
}

.container .form-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-content .login-form,
.form-content .signup-form {
  width: calc(100% / 2 - 25px);
}

.forms .form-content .title {
  position: relative;
  font-size: 24px;
  font-weight: 500;
  color: #333;
}

.forms .form-content .title:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 25px;
  background: #eb6648;
}

.forms .signup-form .title:before {
  width: 20px;
}

.forms .form-content .input-boxes {
  margin-top: 30px;
}

.forms .form-content .input-box {
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  margin: 10px 0;
  position: relative;
}

.form-content .input-box input {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  padding: 0 30px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.form-content .input-box input:focus,
.form-content .input-box input:valid {
  border-color: #000000;
}

.form-content .input-box i {
  position: absolute;
  color: #eb6648;
  font-size: 17px;
}

.forms .form-content .text {
  font-size: 14px;
  font-weight: 500;
  color: #1e4f79;
}

.forms .form-content .text a {
  text-decoration: none;
}

.forms .form-content .text a:hover {
  text-decoration: underline;
}

.forms .form-content .button {
  color: #fff;
  margin-top: 40px;
}

.forms .form-content .button input {
  color: #fff;
  background: #eb6648;
  border-radius: 6px;
  padding: 0;
  cursor: pointer;
  transition: all 0.4s ease;
}

.forms .form-content .button input:hover {
  background: #000000;
}

.forms .form-content label {
  color: #eb6648;
  cursor: pointer;
}

.forms .form-content label:hover {
  text-decoration: underline;
}

.forms .form-content .login-text,
.forms .form-content .sign-up-text {
  text-align: center;
  margin-top: 25px;
}

.container #flip {
  display: none;
}

@media (max-width: 730px) {
  .container .cover {
    display: none;
  }

  .form-content .login-form,
  .form-content .signup-form {
    width: 100%;
  }

  .form-content .signup-form {
    display: none;
  }

  .container #flip:checked ~ .forms .signup-form {
    display: block;
  }

  .container #flip:checked ~ .forms .login-form {
    display: none;
  }
}
</style>

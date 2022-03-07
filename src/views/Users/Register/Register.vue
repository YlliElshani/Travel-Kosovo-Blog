<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an Account?
        <router-link class="router-link" :to="{ name: 'Login' }">
          <h2>
            Login
          </h2>
        </router-link>
      </p>
      <h2>
        Create your KosovoTravelBlog Account
      </h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <email class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <password class="icon" />
        </div>
        <div class="error" v-if="error">
          {{ this.errorMsg }}
        </div>
      </div>
      <button @click.prevent="register">
        Sign Up
      </button>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "../../../assets/Icons/envelope-regular.svg";
import password from "../../../assets/Icons/lock-alt-solid.svg";
import user from "../../../assets/Icons/user-alt-light.svg";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../../../firebase/firebaseInit";

export default {
  name: "Register",

  components: {
    email,
    password,
    user,
  },

  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
      roles: [0],
    };
  },

  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);
        //could have naming error here
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
          roles: this.roles,
        });
        this.$router.push({ name: "Home" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>

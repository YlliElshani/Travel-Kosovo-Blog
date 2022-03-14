<template>
	<body class="form-wrap">
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
	</body>
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
			firstName: null,
			lastName: null,
			username: null,
			roles: [0],
			email: null,
			password: null,
			error: null,
			errorMsg: null,
		};
	},
	computed: {
		loggedIn() {
			return this.$store.state.users.loggedIn;
		},
	},
	created() {
		if (this.loggedIn) {
			this.$router.push({ name: "Home" });
		}
	},
	methods: {
		async register() {
			const user = {
				firstName: this.firstName,
				lastName: this.lastName,
				username: this.username,
				email: this.email,
				roles: this.roles,
			};
			if (this.isFormValid()) {
				try {
					const firebaseAuth = firebase.auth();
					const createUser = await firebaseAuth.createUserWithEmailAndPassword(
						this.email,
						this.password
					);
					const result = await createUser;
					const dataBase = db.collection("users").doc(result.user.uid);

					await dataBase.set({
						firstName: user.firstName,
						lastName: user.lastName,
						username: user.username,
						email: user.email,
						roles: user.roles,
					});
					this.error = false;
					this.errorMsg = null;
					this.$router.push({ name: "Home" });
				} catch (err) {
					this.error = true;
					this.errorMsg = err.message;
				}
			} else {
				this.error = true;
				this.errorMsg = "Please fill out all the fields!";
			}
		},
		isFormValid() {
			if (
				this.firstName !== null &&
				this.lastName !== null &&
				this.username !== null &&
				this.email !== null &&
				this.password !== null
			) {
				return true;
			} else {
				return false;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.register {
	h2 {
		max-width: 350px;
	}
	.error {
		color: red;
	}
}
</style>

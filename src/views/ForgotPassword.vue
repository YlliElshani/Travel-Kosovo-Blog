<template>
<div class="reset-password">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal"/>
    <Loading v-if="loading"/>
      <div class="form-wrap">
        <form class="reset">
            <h2>
                Reset Password
            </h2>
            <p class="login-register">
                Forgot your password? enter your email to reset it
            </p>
                    <div class="inputs">
                        <div class="input">
                            <input type="text" placeholder="Email" v-model="email"/>
                            <email class="icon"/>
                        </div>
                    </div>
                <button @click.prevent="resetPassword">
                    Reset
                </button>
        </form>
        <div class="background">

        </div>
    </div>
    <Footer/>
</div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import Modal from "../components/Modal"
import Loading from "../components/Loading"
import Footer from "../components/Footer"
import firebase from "firebase/app";
import "firebase/auth";

export default {
    name:"ForgotPassword",

    data(){
        return{
            email:null,
            modalActive:null,
            modalMessage:"",
            loading:null
        }
    },

    components:{
        email,
        Modal,
        Loading,
        Footer
    },

    methods:{

        resetPassword(){
            this.loading=true;
            firebase.auth().sendPasswordResetEmail(this.email).then(()=>{
                this.modalMessage="If your account exists, you will recieve a email";
                this.loading=false;
                this.modalActive=true;
            }).catch(err=>{
                this.modalMessage=err.message;
                this.loading=false;
                this.modalActive=true;
            });
        },

        closeModal(){
            this.modalActive=!this.modalActive
            this.email=""
        }
    }
}
</script>

<style lang="scss" scoped>
    .reset-password{
        position: relative;
        .form-wrap{
            .reset{
                h2{
                    margin-bottom: 8px;
                }

                p{
                    text-align: center;
                    margin-bottom: 32px;
                }
            }
        }
    }
</style>
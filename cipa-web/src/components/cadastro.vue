<template>
<div class="content-index">
<div class="division-1">
    <img src="https://i.imgur.com/HcLNjzn.png" class="logo">
    <div class="texts">
        <p><mark>Olá</mark><br>por favor insira os seus dados<br>
        para entrar.</p>
    </div>
    <div class="agroup">
    <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">person</i>
          <input id="nomeCompleto" v-model="nomeCompleto" type="text" class="validate" placeholder="Nome Completo:">
        </div>
      </div>
      <div class="row">
             <div class="input-field col s6">
          <i class="material-icons prefix">email</i>
          <input id="login" v-bind:class="{'error' : !this.email.endsWith('discente.ifpe.edu.br')}" v-model="email" type="email" class="validate" placeholder="Digite seu email:">
        </div>
        </div>
          <div class="row">
          <div class="input-field col s6">
          <i class="material-icons prefix">vpn_key</i>
          <input id="senha" v-model="senha" type="password" class="validate" placeholder="Digite sua senha:">
        </div>
        </div>
            <div class="forgot-pass"> 
      <p>Esqueceu sua senha?</p>
    </div>
         <div class="row2">
         
         <button v-on:click="cadastrar()" :disabled="!email || !senha" class="btn waves-effect waves-light" type="submit" name="action">CADASTRAR
        <i class="material-icons right">send</i>
        </button>   
    </div>  
                <div class="has-login"> 
      <p>Você já tem uma conta? <a v-on:click="entre()">Entre.</a></p>
    </div>
    <div class="media-icons">
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-google-plus-g"></i>
    </div>
                        </div>
                    </div>
                <div class="division-2">
                    <img src="undraw_product_teardown_elol-removebg-preview.png">
                  <h1 class="titulo">CIPA</h1>
                  <p class="subtitulo">Concurso de ideias<br>
 professor anjo</p>
            </div>
        </div>
</template>

<script>
export default {
  name: 'cadastro',
  data() {
    return {
      email: '',
      senha: '',
    }
  },
  methods: {
    cadastrar () { 
      if(!this.email.endsWith('discente.ifpe.edu.br')){
        alert("Apenas email do IFPE");
      }
        else if(this.email == 'admin@discente.ifpe.edu.br' && this.senha == '12345'){
        alert('Cadastro realizado com sucesso');
        this.$router.push('/login');
      }
      else{
        alert('Login ou senha incorreto!!!')
      }
    },
    entre(){
      this.$router.push('/login')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Rubik&family=Rubik+Mono+One&display=swap');;

            * {
    margin: 0;
    padding: 0;
  }
  .forgot-pass p{
    color: #000080;
    font-family: 'Poppins', Arial;
    font-size: 14px;
  }
  .forgot-pass{
    margin-left:57%;
  }
  .has-login p{
        color: black;
    font-family: 'Poppins', Arial;
    font-size: 14px;
  }
  .has-login a{
    background-color: transparent;
    color: #000080;
    font-family: 'Poppins', Arial;
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
    cursor: pointer;
  }
  .has-login{
    margin-left: 43%;
    margin-top: 2%;
  }
  html{
    padding: 0;
    margin: 0;
  }
  #app{
    margin: 0;
    padding: 0;
  }
  .error{
    border: 1px solid red!important;
  }
  .content-index {
    display: flex;
    width: 100%;
    height: 100vh;
  }
  .media-icons{
    margin-left: 20%;
    margin-top: 12%;
  }
  .subtitulo{
    font-family: 'Rubik', sans-serif;
    font-size: 47px;
    text-shadow: 4px 4px 4px #000000;
    margin-left: 30%;
    }
  .media-icons i{
    font-size: 2.8rem;
    margin-left: 14%;
  }
  .fa-google-plus-g{
    color:#e34133;
  }
  .fa-twitter{
    color: #00acee;
  }  
  .fa-facebook{
    color: #3b5998;
  }
  .division-1 {
    width:43.3vw;
  }
  .division-1 img{
    width: 280px;
    margin-left: 34%;
  }
  .texts p{
      font-family: 'Poppins', Arial;
      font-size: 24px;
      color: #1B2F49;
      text-align: justify;
  }
  .texts mark{
      background-color: #fff;
      color: #1B2F49;
      font-weight: bold;
      font-size: 26px;
      cursor: pointer;

  }
  .logo{
    margin-bottom: 6%;
  }
  .texts{
      margin-left: 27%;
      margin-top: -8%;
  }
  .agroup{
      margin-top: 5% !important;
  }
  
  .row {
    margin-left:20% !important;
    width: 100vh;
  }
  .row2{
    margin-left: 42%!important;
    margin-top: 3%;
  }
  .row2 button{
      background-color: #1B2F49 !important;
      padding-left: 45px;
      padding-right: 45px;
  }
  
  .division-2 {
    background-color: #CDDAE2;
    margin-top: -4%;
    width: 100vw;
    height:113vh;
  }
  .division-2 img{
      width: 680px;
      margin-top: 6%;
      margin-left: 15%;
  }
  .titulo{
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 86px;
    margin-top: -4%;
    margin-left: 32%!important;
  }
input{
  border: solid 0.3vh #1c2c44 !important;
  text-align: left !important;
  height: 30px !important;
  margin-top: 2% !important;
  border-radius: 5px !important;
}
  @media (max-width: 580px){
    .division-2{
      background-color: #fff;
    }
    .content-index{
      border: 2px solid black;
      height: 105vh;
      width: 520px;
      margin-left: 4%!important;
    }
    .logo{
    margin-bottom: 6%;
  }
  .division-1 img{
    width: 240px;
    margin-left: 25%;
  }
  .media-icons{
    margin-left: 10%;
    margin-top: 6%;
  }
  .media-icons i{
    font-size: 2.8rem;
    margin-left:14%;
  }
  .texts{
      margin-left: 16%;
      margin-top:-6%;
  }
  .agroup{
      margin-top: 5% !important;
  }
  
  .row {
    margin-left:11% !important;
    width: 100vh;
  }
  .row2{
    margin-left:31%!important;
  }
  .row2 button{
      background-color: #1B2F49 !important;
      padding-left: 35px;
      padding-right: 35px;
  }
  .division-2 img{
      width: 0px;
      margin-top: 17%;
      margin-left: 18%;
  }
  .content-index{
    margin-left:13%;
  }
  }
</style>
<template>
 <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"><img src="https://i.imgur.com/N2uQg4X.png" style="width: 85px"></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Inicio</a></li>
        <li><a href="badges.html">Projetos</a></li>
        <li><a v-on:click="irParaInscricao()" href="#">Inscrever</a></li>
        <li style="float: right; position: absolute; right: 10px;"><a v-on:click="sair()" href="#">Sair</a></li>
      </ul>
    </div>
  </nav>
<div class="card-group">
  <div class="card" style="width: 18rem;">
  <img class="" src="https://blog.handtalk.me/wp-content/uploads/2018/11/capa-blog-2.png" style="width: 15vw;" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Votar</a>
    <a href="#" class="btn btn-primary">Leia mais</a>
  </div>
</div>
  <div class="card" style="width: 18rem;">
  <img class="" src="https://blog.handtalk.me/wp-content/uploads/2018/11/capa-blog-2.png" style="width: 15vw;" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Votar</a>
    <a href="#" class="btn btn-primary">Leia mais</a>
  </div>
</div>
  <div class="card" style="width: 18rem;">
  <img class="" src="https://blog.handtalk.me/wp-content/uploads/2018/11/capa-blog-2.png" style="width: 15vw;" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Votar</a>
    <a href="#" class="btn btn-primary">Leia mais</a>
  </div>
</div>
</div>
<div class="card-group">
  <div class="card" style="width: 18rem;">
  <img class="" src="https://blog.handtalk.me/wp-content/uploads/2018/11/capa-blog-2.png" style="width: 15vw;" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Votar</a>
    <a href="#" class="btn btn-primary">Leia mais</a>
  </div>
</div>
  <div class="card" style="width: 18rem;">
  <img class="" src="https://blog.handtalk.me/wp-content/uploads/2018/11/capa-blog-2.png" style="width: 15vw;" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Votar</a>
    <a href="#" class="btn btn-primary">Leia mais</a>
  </div>
</div>
  <div class="card" style="width: 18rem;">
  <img class="" src="https://blog.handtalk.me/wp-content/uploads/2018/11/capa-blog-2.png" style="width: 15vw;" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Votar</a>
    <a href="#" class="btn btn-primary">Leia mais</a>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
  },
  methods: {
    sair() {
      this.$router.push('/login');
    },
    irParaInscricao() {
      this.$router.push('/inscricaoProjeto');
    }
  },
}
</script>

<style scoped>
*{
  padding: 0!important;
  margin: 0!important;
}
.nav-wrapper{
  background-color: #45B1FF !important;
}
li{
  padding-right: 45px!important;
}
ul{
  margin-right: 70%!important;
}
.brand-logo{
  position: relative;
  top: -10px;
}
a:hover{
  background-color: transparent;
}
.card{
  margin-top: 5%!important;
  margin-left: 10%!important;
  background-color: rgba(151,151,151,0.1)
}
.btn-primary{
  margin-bottom: 3%!important;
  margin-top: 3%!important;
  margin-left: 4%!important;
  background-color: #4C6FFF!important;
  padding-left: 10px!important;
    padding-right: 10px!important;
}
.card-group{
  display: flex;
}
</style>

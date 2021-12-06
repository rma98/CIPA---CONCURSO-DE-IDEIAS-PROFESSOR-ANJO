<template>
  <div id="app">
 <nav id="color" class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <img class="imagem-logo" src="https://i.imgur.com/HcLNjzn.png">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a style="color:#ffffff;" class="nav-link active" aria-current="page" href="#">Início</a>
        </li>
        <li class="nav-item">
          <a style="color:#ffffff;" class="nav-link" href="#">Projetos</a>
        </li>
        <li class="nav-item">
           <li class="nav-item">
          <a style="color:#ffffff;" class="nav-link" href="#">Inscrever</a>
        </li>
      </ul>
      
      <form class="d-flex">
  
<input  id="cores" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      
      </form>
    </div>
  </div>
</nav>
<br><br>
<div class="cards" style="width: 18rem;">
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Projet 1</h5>
    <p class="card-text">Projeto focado em...</p>
    <a href="#" class="btn btn-primary">VOTAR</a><br><br>
    <a href="#" class="btn btn-primary">LER MAIS...</a>
  </div>
</div>
<div class="c" style="width: 18rem;">
  <img src="" class="card-img-top" alt="...">
  <div id="body" class="card-body">
    <h5 class="card-title">Projet 5</h5>
    <p class="card-text">Projeto focado em...</p>
    <a href="#" class="btn btn-primary">VOTAR</a><br><br>
    <a href="#" class="btn btn-primary">LER MAIS...</a>
  </div>
</div></div>
</template>

<script>
export default {
  name: 'tela-principal',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.imagem-logo{
  height:85px;
 
}
#color{
  background: #45b1ff;
}
#cores{
  background:#3a91de;
  border:#3a91de;
  
}
.card-body{
  margin-left:4%;
  
}
.cards{
  background:#f4f5f7;
   margin-left:6%;
}
.c{
  margin-top:5%;
  margin-left:6%;
  background:#f4f5f7;
  
}
.car{
  margin-left:31%;
  margin-top:-55.2%;
  background:#f4f5f7;
}
.cardd{
  margin-left:135%;
  margin-top:-138%;
  background:#f4f5f7;
}
.cardd1{
  margin-left:-269%;
  margin-top:28%;
  background:#f4f5f7;
}
</style>

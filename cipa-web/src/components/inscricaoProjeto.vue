<template>
<div> 
  <form id="categoria" class="form-categoria flow-text">
    <div class="titulo">
        <h1>
        Concurso de Ideias
        </h1>
        <P>
          <strong>Por favor insira os <br> dados do projeto para se inscrever.</strong>
        </P>
    </div>
    <div class="subtitulos">
      <label><strong>Nome do Líder</strong></label><br>
      <input type="text" name="nomeLider" id="nomeLider" size="45" autofocus required>
    </div>
    <div class="subtitulos">
      <label><strong>Nome dos Integrantes</strong></label><br>
      <input type="text" name="nomeIntegrantes" id="nomeLider" size="45" autofocus>
    </div>
    <div class="subtitulos">
      <label><strong>CATEGORIA</strong></label>
      <br>
      <select>
        <option value="" disabled selected>SELECIONE UMA CATEGORIA</option>
        <option value="1">ERRADIAÇÃO DA POBREZA</option>
        <option value="2">FOME ZERO</option>
        <option value="3">BOA SAÚDE E BEM-ESTAR</option>
        <option value="4">EDUCAÇÃO DE QUALIDADE</option>
        <option value="5">IGUALDADE DE GÊNERO</option>
        <option value="6">ÁGUA LIMPA E SANIAMENTO</option>
        <option value="7">ENERGIA ACESSÍVEL E LIMPA</option>
        <option value="8">EMPREGO DIGNO E CRESCIMNENTO ECONÔMICO</option>
        <option value="9">INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA</option>
        <option value="10">REDUÇÃO DAS DESIGUALDADES</option>
        <option value="11">CIDADES E COMUNIDADES SUSTENTÁVEIS</option>
        <option value="12">CONSUMO E PRODUÇÃO RESPONSÁVEIS</option>
      </select>
    </div>
    <div class="subtitulos">
      <label><strong>Tituto do Projeto</strong></label>
      <input type="text" name="titulo" id="nomeLider" size="45" autofocus required>
    </div>
    <div class="subtitulos">
      <label><strong>Link do Vídeo</strong></label>
      <input type="text" name="linkVideo" id="nomeLider" size="45" autofocus>
    </div>
    <div class="subtitulos">
      <label><strong>DESVREVA SEU PROJETO</strong></label>
      <textarea maxlength="800" name="descrendoProjeto" id="nomeLider" cols="40" rows="10" required></textarea>
    </div>
    <div class="subtitulos">
      <button  class="btn waves-effect waves-light" type="submit" name="action" id="btn">INSCREVER
  </button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'inscricaoProjeto',
  props: {
    msg: String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

html,
body,
table,
input,
button {
  font-family: 'Poppins', sans-serif;
}

.form-categoria {
  display: block;
  border: solid 1px #1c2c44;
  width: 50vw;
  height:94vh;
  margin-left: 25%;
  margin-top: 2%;
}

.titulo {
  color: #1B2F49       ;
}

.titulo h1 {
  font-size: 4.2rem;
    line-height: 110%;
    margin: 3.8rem 0 1.68rem 0;
    margin-left: 22%;
    
}

.titulo p {
  margin-left:6%;
  margin-top:12%;
}

.subtitulos{
    margin-left:5%;
     border-radius: 2%;
    
}

label {
  color: #1B2F49
}

input {
    display: block;
    
    background: #1c2c44;
    color: #ffffff;
    border-radius: 10px;
}

select {
    display: block;
    background: #1c2c44;
    color: #ffffff;
    border-radius: 10px;
}

.btn {  
    display: block;
    width: 20vw;
    height: 5vh ;
    margin-left: 5%;
    background: #1c2c44;
    color: #ffffff;
    border-radius: 10px;
}
#nomeLider{
    border-radius: 2%;
    border:1px solid  #1c2c44;
    color: #1c2c44;
    width:90%;
    margin-left:0.3%;   

}
#categoria{
    height:1024px;
}
 
 #btn{
   border:1px solid  #1c2c44;
    color: #ffffff;
    width:90%;
    margin-left:0.3%;
    font-size:32px;  
    margin-top:5%;
    border-radius: 2%;
    
 }

 strong {
    font-weight: 500;
    font-size:22px;
}

h1{
    font-weight: 500;
    display:block;
    padding-top: 25px;
    margin-left:-35%;
    
}

select{
    border-radius: 2%;
    width:90%;
}

div.titulo{
    margin-top:5px;
    padding: 5px;
}
</style>

<template>
<div> 
  <form class="form-categoria flow-text">
    <div class="titulo">
        <h1>
          <strong>Concurso de Ideias</strong>
        </h1>
        <P>
          <strong>Por favor insira os <br><br>dados do projeto para se inscrever.</strong>
        </P>
    </div>
    <div class="subtitulos">
      <label><strong>Nome do Líder</strong></label><br>
      <input type="text" name="nomeLider" id="nomeLider" size="45" autofocus required>
    </div>
    <div class="subtitulos">
      <label><strong>Nome dos Integrantes</strong></label><br>
      <input type="text" name="nomeIntegrantes" id="nomeIntegrantes" size="45" autofocus>
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
      <input type="text" name="titulo" id="titulo" size="45" autofocus required>
    </div>
    <div class="subtitulos">
      <label><strong>Link do Vídeo</strong></label>
      <input type="text" name="linkVideo" id="linkVideo" size="45" autofocus>
    </div>
    <div class="subtitulos">
      <label><strong>DESVREVA SEU PROJETO</strong></label>
      <textarea maxlength="800" name="descrendoProjeto" id="descrendoProjeto" cols="50" rows="10" required></textarea>
    </div>
    <div class="subtitulos">
      <button class="btn waves-effect waves-light" type="submit" name="action">INSCREVER
  </button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'categoria',
  props: {
    msg: String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

html, body, label, input, select, button {
  font-family: 'Poppins', sans-serif;
}

.form-categoria {
  border: solid 1px #1c2c44;
  width: 450px;
  margin-left: 35%;
  margin-top: 2%;
}

.titulo {
  color: #1B2F49;
  font-size: 15pt;
}

.titulo h1 {
  margin-top: 5%;
  margin-left: 5%;
}

.titulo p {
  margin-top: 5%;
  margin-left: 5%;
}

.subtitulos {
  margin-left: 5%;
}

label {
  color: #1B2F49;
  font-size: 15pt;
}

input {
  width: 90%;
  height: 35px;
  margin-top: 2%;
  margin-left: -1%;
  margin-bottom: 5%;
  border-radius: 10px;
}

select {
  width: 90%;
  height: 35px;
  margin-top: 2%;
  margin-left: -1%;
  margin-bottom: 5%;
  border-radius: 10px;
}

.btn {  
  width: 90%;
  margin-top: 2%;
  margin-left: 0%;
  margin-bottom: 5%;
  background: #1c2c44;
  color: #ffffff;
  border-radius: 10px;
  padding-top: 5%;
  padding-bottom: 5%;
  display: block;
  font-size: 15pt;
}
</style>

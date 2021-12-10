<template>
  <div>
    <form class="form-inscricao-projeto flow-text">
      <img src="https://i.imgur.com/HcLNjzn.png">
      <div class="titulo">
        <h1>
          <strong>
            Bem vindo ao CIPA.
          </strong>
        </h1>
      </div>
      <div class="paragrafo">
        <p>
          Por favor insira os dados
        </p>
      </div>
      <div id="cont-paragrafo">
        <p>
          do projeto para se inscrever.
        </p>
      </div>
      <div class="subtitulos">
        <label>
          Nome do Líder:
        </label>
      </div>
      <div class="sub-inputs">
        <input type="text" name="nomeLider" required>
      </div>
      <div class="subtitulos">
        <label>
          Nome dos integrantes (Separar nome dos integrantes por vírgula)
        </label>
      </div>
      <div class="sub-inputs">
        <input type="text" name="nomeIntegrantes">
      </div>
      <div select-categoria>
        <label id="cat-titulo">
          Categoria
        </label>
      </div>  
      <div class="select-use">
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
      <label>
        Título do projeto:
      </label>
    </div>
    <div class="sub-inputs">
      <input type="text" name="titulo" required>
    </div>
    <div class="subtitulos">
      <label>
        Link do vídeo: (Opcional)
      </label>
    </div>
    <div class="sub-inputs">
      <input type="text" name="linkVideo">
    </div>
    <div class="subtitulos">
      <label>
        DESCREVA SEU PROJETO:
      </label>
    </div>
    <div class="descricao">
      <textarea maxlength="800" name="descrendoProjeto" cols="80" rows="12" required></textarea>
    </div>
    <div class="botao">
      <button class="btn waves-effect waves-light" type="submit" name="action">INSCREVER </button>
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

html, body, input, select, button {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}
.form-inscricao-projeto, .flow-text {
  border: solid 1px #1B2F49;
  width: 55vw;
  height: 154vh;
}
img {
  width: 20vw;
  margin-left: 25%;
}
.titulo {
  color: #1B2F49;
}
.titulo, h1 {
  font-size: 30pt;
  margin-top: -5%;
  margin-left: 11%;
}
.paragrafo {
  color: #1B2F49;
}
.paragrafo p {
  font-size: 30pt;
  margin-top: -3%;
  margin-left: 18%;
}
#cont-paragrafo {
  color: #1B2F49;
  font-size: 30pt;
  margin-top: -5%;
  margin-left: 18%;
}
.subtitulos label {
  color: #1B2F49;
  font-size: 20pt;
  margin-left: 18%;
}
.sub-inputs input {
  color: #1B2F49;
  width: 32vw;
  height: 6vh;
  margin-top: 6px;
  margin-left: 18%;
  margin-bottom: 3%;
  border: solid 1px #1B2F49;  
}
#cat-titulo {
  color: #1B2F49;
  font-size: 20pt;
  margin-left: 20%;
}
.select-use select{
  color: #1B2F49;
  width: 20vw;
  height: 6vh;
  margin-top: 6px;
  margin-left: 18%;
  margin-bottom: 3%;
  border: solid 1px #1B2F49; 
}
.descricao {
  color: #1B2F49;
  margin-top: 6px;
  margin-left: 18%;
}
.btn {
  background: #1B2F49;
  color: #ffffff;
  width: 32vw;
  height: 8vh;
  margin-top: 6px;
  margin-left: 18%;
}
</style>

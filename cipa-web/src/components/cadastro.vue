<template>
<div >
<div class="tela"><img style="-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://i.imgur.com/EUoiruM.png" alt="Image" height="705" width="660"></div>
<form class="forma">
<a  id ="vlr" class="waves-effect waves-light vlr"><i class="material-icons left">keyboard_backspace</i></a>
<img class="img form-baixar" style="-webkit-user-select: none;margin: auto;transition: " src="https://i.imgur.com/HcLNjzn.png">
<div class="mergir">
<div class="global">

<h4 class="color">
     Olá!
     </h4>
     
     <p class="p">
     Por favor insira seus<br>
     dados para se cadastrar</p>
     </div>
     <div id="global">
     <p id="p">
     Nome completo
     </p>
     <input id="inp" type="text" >
      <p id="p">
     E-mail institucional
     </p>
     <input id="inp" type="email" >
      <p id="p">
     Senha
     </p>
     <input id="inp" type="password" >
     <p class="smh">
     Você esqueceu a senha?
     </p>
     <br><br>

    <a class="waves-effect waves-light btn" style="background:#1c2c44">CADASTRAR</a>
    
    
    
    </div>
    
    
</div>
</form>
</div>
</template>

<script>
export default {
  name: 'cadastro',
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
#entre{

}

.tela {
  position: absolute;
  left: 115%;
  top: 75%;
  margin-left: -12.5%;
  margin-top: -85.5%;
  
}

.color {
  color: #1c2c44;
  font-weight: bold;

}

.p {
  color: #1c2c44;
}

#p {
  margin-top: 3px;
}

#inp {
  border: solid 2px #1c2c44;
  height: 35px;
  width: 305px;
  margin-top: px;
  border-radius: 5px;
}

.btn {
  background: #1c2c44;
  margin-left: 1%;
  margin-top: -35%;
  border-radius: 5px;
  width: 305px;

}

.global {
  margin-left: 15%;
  margin-right: 28%;
}

.forma {
  background: white;
  border: solid 1px #1c2c44;
  width: 450px;
  margin-left: 35%;
  margin-top: 4.5%;
}

.img {
  height: 250px;
  border-radius: 100px;
  display: block;
  padding-top: 20px;
}

.smh {
  color: #1c2c44;
}

.smh:hover {
  color: blue;
}

#global {
  margin-left: 15%;
  margin-right: 28%;
}

#vlr {
  Width: 200px;
  Margin-top: 15px;
  margin-left:2%;
 
}
h4{
  font-size: 2.28rem;
    line-height: 110%;
    margin: -1.48rem 0 .912rem 0;
}

</style>

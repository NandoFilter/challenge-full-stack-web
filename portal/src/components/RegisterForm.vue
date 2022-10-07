<template>
  <form>
    <div class="form">
      <p class="form_text">Nome</p>
      <v-text-field 
        class="form_field"
        v-model="name"
        dark
        placeholder="Informe o nome completo"
      />
    </div>
    <div class="form">
      <p class="form_text">E-mail</p>
      <v-text-field 
        class="form_field"
        v-model="email"
        dark
        placeholder="Informe apenas um e-mail"
      />
    </div>
    <div class="form">
      <p class="form_text">RA</p>
      <v-text-field 
        class="form_field"
        v-model="register"
        dark
        placeholder="Informe o registro acadêmico"
      />
    </div>
    <div class="form">
      <p class="form_text">CPF</p>
      <v-text-field 
        class="form_field"
        v-model="cpf"
        dark
        placeholder="Informe o número do documento"
      />
    </div>
    <v-btn class="form_btn">Salvar</v-btn>
    <v-btn class="form_btn">Cancelar</v-btn>
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: '',
      email: '',
      register: '',
      cpf: ''
    }
  } 
}
</script>

<style lang="scss">
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  &_text {
    color: #fff;
    margin-right: 30px;
  }

  &_field {
    width: 200px;
  }

  &_btn {
    margin: 10px;
  }
}
</style>
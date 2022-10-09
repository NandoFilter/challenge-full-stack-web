<template>
  <form>
    <div class="form">
      <p class="form_text">Nome</p>
      <v-text-field
        class="form_field"
        v-model="name"
        :rules="[rules.required]"
        placeholder="Informe o nome completo"
      />
    </div>
    <div class="form">
      <p class="form_text">E-mail</p>
      <v-text-field
        class="form_field"
        v-model="email"
        :rules="[rules.required, rules.email]"
        placeholder="Informe apenas um e-mail"
      />
    </div>
    <div class="form">
      <p class="form_text">RA</p>
      <v-text-field
        class="form_field"
        v-model="register"
        required
        :rules="[rules.required]"
        placeholder="Informe o registro acadêmico"
      />
    </div>
    <div class="form">
      <p class="form_text">CPF</p>
      <v-text-field
        class="form_field"
        v-model="cpf"
        :rules="[rules.required]"
        v-mask="'###.###.###-##'"
        placeholder="Informe o número do documento"
      />
    </div>
    <div class="form_btns">
      <v-btn class="form_btn" color="#006a74">Salvar</v-btn>
      <v-btn class="form_btn" color="#004b52" @click="$emit('cancel')"
        >Cancelar</v-btn
      >
    </div>
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: '',
      email: '',
      register: '',
      cpf: '',
      rules: {
        required: (value: string) => !!value || 'Por favor, preencha o campo',
        email: (value: string) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'E-mail inválido'
        }
      }
    }
  }
}
</script>

<style lang="scss">
form {
  margin-top: 25px;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  &_text {
    width: 50px;
    height: 25px;
    margin-right: 30px;

    display: flex;
    justify-content: left;
    align-items: center;

    color: #000;
  }

  &_field {
    height: 60px;
    width: 300px;
  }

  &_btns {
    display: flex;
    justify-content: right;

    margin-top: 10px;
  }

  &_btn {
    margin: 10px;
    color: #fff !important;
    text-transform: unset !important;
  }
}

.v-text-field__slot input {
  padding-left: 5px;
}
</style>

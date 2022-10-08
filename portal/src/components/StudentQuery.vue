<template>
  <div>
    <div class="header">
      <div class="search">
        <v-text-field
          v-model="search"
          class="search_field"
          placeholder="Digite sua busca"
        />
        <v-btn icon class="search_btn">
          <font-awesome-icon
            class="search_btn_icon"
            icon="fa-solid fa-magnifying-glass"
          />
        </v-btn>
      </div>
      <v-btn class="register_btn" color="#006a74" @click="$emit('register')"
        >Cadastrar Aluno</v-btn
      >
    </div>
    <div class="table">
      <v-data-table
        :headers="headers"
        :items="students"
        :items-per-page="4"
        item-key="name"
        class="elevation-1"
      ></v-data-table>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      search: '',
      students: [
        { ra: '1', name: 'Fernando', cpf: '1' },
        { ra: '2', name: 'João', cpf: '2' },
        { ra: '3', name: 'Agatha', cpf: '3' },
        { ra: '4', name: 'Valentina', cpf: '4' },
        { ra: '5', name: 'Guilherme', cpf: '5' }
      ]
    }
  },
  computed: {
    headers() {
      return [
        { text: 'Registro Acadêmico', value: 'ra' },
        { text: 'Nome', value: 'name' },
        { text: 'CPF', value: 'cpf' },
        { text: 'Ações', value: 'actions' }
      ]
    }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: top;
}

.search {
  display: flex;
  align-items: center;

  &_field {
    width: 300px;
  }

  &_btn {
    color: #000 !important;
  }
}

.register_btn {
  color: #fff !important;
  margin-left: 15px;
  text-transform: unset !important;
}
</style>

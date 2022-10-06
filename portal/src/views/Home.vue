<template>
  <div class="main">
    <div class="search">
      <v-text-field
        v-model="text"
        class="search_field"
        dark
        label="Digite sua busca"
      />
      <v-btn class="search_btn" color="#005ba5"> Pesquisar </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>

<style lang="scss">
.main {
  width: 80%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #474747;
}

.search {
  display: flex;
  align-items: center;

  &_field {
    margin-right: 15px;
  }

  &_btn {
    color: #fff !important;
  }
}
</style>

<template>
  <div class="main">
    <header class="header">
      <img class="header_logo" src="@/assets/logo.png" alt="+A Educação" />
    </header>
    <div class="principal">
      <div class="list">
        <v-list class="list_content">
          <v-subheader class="list_content_title">Módulo Acadêmico</v-subheader>
          <v-list-item-group v-model="itemList">
            <v-list-item>
              <v-list-item-icon>
                <font-awesome-icon icon="fa-solid fa-graduation-cap" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  selected
                  v-text="'Alunos'"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
      <div class="center">
        <p class="center_title">{{ title }}</p>
        <div class="center_content">
          <StudentQuery v-if="inQuery" @register="setQuery" />
          <RegisterForm v-else @cancel="setQuery" />
        </div>
      </div>
    </div>
    <footer>
      <p>
        Made with ❤️ and ☕ by&nbsp;<a
          class="link"
          target="_blank"
          href="https://github.com/NandoFilter"
          >NandoFilter</a
        >
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import StudentQuery from '@/components/StudentQuery.vue'
import RegisterForm from '@/components/RegisterForm.vue'

export default {
  components: {
    StudentQuery,
    RegisterForm
  },
  data() {
    return {
      inQuery: true,
      itemList: 0
    }
  },
  computed: {
    title(): string {
      return this.inQuery ? 'Consulta de Alunos' : 'Cadastro de Alunos'
    }
  },
  methods: {
    setQuery() {
      this.inQuery = !this.inQuery
    }
  }
}
</script>

<style lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 50px;
  width: 40%;
}

.header {
  margin-right: 13%;
  margin-bottom: 10px;

  &_logo {
    width: 20%;
  }
}

.principal {
  display: flex;
  align-items: left;
  justify-content: left;

  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.3);
}

.list {
  width: 25%;
  height: 415px;

  border-radius: 10px 0 0 0;
  border-right: #c4c4c4 solid 2px;

  &_content {
    padding: 0 !important;
    border-radius: 10px 0 0 0 !important;

    &_title {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0;
      padding: 5px;

      font-size: 13pt !important;
      font-weight: 600;
      color: #fff !important;

      border-radius: 10px 0 0 0;
      background-color: #bdbdbd;
    }
  }
}

.center {
  display: flex;
  align-items: center;
  justify-content: top;
  flex-direction: column;

  width: 600px;

  &_title {
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 5px 0;
    margin-bottom: 10px;

    border-radius: 0 10px 0 0;
    background-color: #ddd;
  }
}

footer {
  margin-top: 15px;
}

.link {
  color: #000;
  text-decoration: none;
}
</style>

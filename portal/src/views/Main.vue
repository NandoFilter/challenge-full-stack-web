<template>
  <div class="main">
    <header class="header">
      <img class="header_logo" src="@/assets/logo.png" alt="+A Educação" />
    </header>
    <div class="principal">
      <div class="list">
        <v-list class="list_content">
          <v-subheader class="list_content_title">Módulo Acadêmico</v-subheader>
          <v-list-item-group>
            <v-list-item @click="setSelected" class="list_content_item">
              <v-list-item-icon>
                <font-awesome-icon icon="fa-solid fa-graduation-cap" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="list_content_item_text"
                  v-text="'Alunos'"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
      <div class="center">
        <p class="center_title">{{ title }}</p>
        <div v-if="selected">
          <StudentQuery
            v-if="inQuery"
            @register="setQuery"
            @editItem="setEdit"
          />
          <RegisterForm
            v-else
            :student="student"
            :isEdit="isEdit"
            @cancel="setQuery"
          />
        </div>
        <div v-else class="center_unselected">
          <img
            class="center_unselected_img"
            src="@/assets/logo.png"
            alt="logo"
          />
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
import Student from '@/models/Student'

export default {
  components: {
    StudentQuery,
    RegisterForm
  },
  data() {
    return {
      selected: false,
      inQuery: true,
      isEdit: false,
      student: Object as unknown as Student
    }
  },
  computed: {
    title(): string {
      return this.selected
        ? this.inQuery
          ? 'Consulta de Alunos'
          : this.isEdit
          ? 'Atualização de Aluno'
          : 'Cadastro de Alunos'
        : 'Selecione um módulo'
    }
  },
  methods: {
    setSelected() {
      this.selected = !this.selected
    },
    setQuery() {
      this.inQuery = !this.inQuery
      this.isEdit = false
    },
    setEdit(student: Student) {
      if (student) {
        this.inQuery = !this.inQuery
        this.isEdit = true

        this.student = student
      }
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
  width: 500px;
}

.header {
  margin-right: 121%;
  margin-bottom: 10px;

  &_logo {
    width: 130px;
  }
}

.principal {
  display: flex;
  justify-content: left;

  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.3);
}

.list {
  width: 182px;
  height: 415px;

  border-radius: 10px 0 0 0;
  border-right: #006a74 solid 2px;

  &_content {
    padding: 0 !important;
    border-radius: 10px 0 0 0 !important;

    &_title {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0;

      font-size: 13pt !important;
      font-weight: 600;
      color: #fff !important;

      border-radius: 10px 0 0 0;
      background-color: #006a74;
    }

    &_item:hover {
      color: #006a74 !important;
    }

    &_item_text {
      margin-left: 5px;
    }
  }
}

.center {
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 600px;

  &_title {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 28px;
    margin-bottom: 10px;

    border-radius: 0 10px 0 0;
    background-color: #008e9b;
    color: #fff;
  }

  &_unselected {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 75%;

    &_img {
      width: 60%;
      opacity: 25%;
    }
  }
}

footer {
  margin-top: 15px;
}

.link {
  color: #000;
  text-decoration: none;
}

.link:hover {
  color: #006a74;
}
</style>

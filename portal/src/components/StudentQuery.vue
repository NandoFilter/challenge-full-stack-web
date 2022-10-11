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
      <v-app class="table_app">
        <v-data-table
          :headers="headers"
          :search="search"
          :items="students"
          :items-per-page="4"
          item-key="ra"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-dialog v-model="dialogDelete" max-width="379px">
              <v-card>
                <v-card-title class="text-h5"
                  >Deseja excluir este estudante?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >Confirmar</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancelar</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
          <!-- eslint-disable-next-line vue/valid-v-slot -->
          <template v-slot:item.actions="{ item }">
            <div class="table_actions">
              <font-awesome-icon
                class="table_actions_btn edit"
                icon="fa-solid fa-pen"
                @click="$emit('editItem', item)"
              />
              <font-awesome-icon
                class="table_actions_btn delete"
                icon="fa-solid fa-trash"
                @click="deleteItem(item)"
              />
            </div>
          </template>
        </v-data-table>
      </v-app>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Student from '@/models/Student'
import studentService from '@/services/studentService'

export default defineComponent({
  data() {
    return {
      search: '',
      dialogDelete: false,
      studentId: -1,
      students: [] as Student[]
    }
  },
  async created() {
    this.students = await studentService.fetchStudents()
  },
  computed: {
    headers() {
      return [
        { text: 'Registro Acadêmico', value: 'ra', align: 'center' },
        { text: 'Nome', value: 'name', align: 'center' },
        { text: 'CPF', value: 'cpf', align: 'center' },
        { text: 'Ações', value: 'actions', align: 'center' }
      ]
    }
  },
  watch: {
    dialogDelete(value) {
      value || this.closeDelete()
    }
  },
  methods: {
    deleteItem(item: Student) {
      this.studentId = item.ra

      studentService.deleteStudent(item.ra)
      this.dialogDelete = true
    },
    deleteItemConfirm() {
      const index = this.students.map((st) => st.ra).indexOf(this.studentId)

      this.students.splice(index, 1)
      this.closeDelete()
    },
    closeDelete() {
      this.dialogDelete = false
    }
  }
})
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

.table {
  &_app {
    margin: 0 !important;
  }

  &_actions {
    display: flex;
    align-items: center;

    &_btn {
      margin: 10px;
    }

    &_btn:hover {
      color: #006a74 !important;
      cursor: pointer;
    }
  }
}

.delete:hover {
  color: #ca0000 !important
}

.v-application--wrap {
  min-height: 0 !important;
}

.v-data-footer {
  &__pagination {
    margin-left: 65% !important;
  }

  &__select {
    display: none !important;
  }
}
</style>

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
                @click="editItem(item)"
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
export default {
  data() {
    return {
      search: '',
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
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
        { text: 'Registro Acadêmico', value: 'ra', align: 'center' },
        { text: 'Nome', value: 'name', align: 'center' },
        { text: 'CPF', value: 'cpf', align: 'center' },
        { text: 'Ações', value: 'actions', align: 'center' }
      ]
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    }
  },
  methods: {
    editItem(item: any) {
      this.editedIndex = this.students.indexOf(item)
      this.dialog = true
    },

    deleteItem(item: any) {
      this.editedIndex = this.students.indexOf(item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.students.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedIndex = -1
      })
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
      cursor: pointer;
    }
  }
}

.v-application--wrap {
  min-height: 0 !important;
}

.v-data-footer {
  &__pagination {
    margin-left: 75%;
  }

  &__select {
    display: none;
  }
}
</style>

<template>
  <div>
    <v-form>
      <div class="form">
        <p class="form_text">Nome*</p>
        <v-text-field
          class="form_field"
          v-model="name"
          maxlength="100"
          placeholder="Informe o nome completo"
        />
      </div>
      <div class="form">
        <p class="form_text">E-mail*</p>
        <v-text-field
          class="form_field"
          v-model="email"
          maxlength="150"
          placeholder="Informe apenas um e-mail"
        />
      </div>
      <div class="form">
        <p class="form_text">RA*</p>
        <v-text-field
          class="form_field"
          v-model="ra"
          :disabled="isEdit"
          placeholder="Informe o registro acadêmico"
        />
      </div>
      <div class="form">
        <p class="form_text">CPF*</p>
        <v-text-field
          class="form_field"
          v-model="cpf"
          :disabled="isEdit"
          v-mask="'###.###.###-##'"
          placeholder="Informe o número do documento"
        />
      </div>
      <p class="form_error" v-if="error.length">{{ error }}</p>
      <div class="form_btns">
        <v-btn class="form_btn" color="#006a74" @click="submit">Salvar</v-btn>
        <v-btn class="form_btn" color="#004b52" @click="$emit('cancel')"
          >Cancelar</v-btn
        >
      </div>
    </v-form>
    <v-app>
      <div class="dialog">
        <v-dialog v-model="dialog" max-width="400px">
          <v-card>
            <v-card-title class="text-h5 dialog_text">{{
              dialogMessage
            }}</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#006a74" text @click="close">Fechar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-app>
  </div>
</template>

<script lang="ts">
import StudentService from '@/services/studentService'
import Student from '@/models/Student'

export default {
  props: {
    student: Object as () => Student,
    isEdit: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      name: '',
      email: '',
      ra: '',
      cpf: '',

      error: '',

      dialog: false,
      dialogMessage: ''
    }
  },
  mounted() {
    if (this.isEdit) {
      if (this.student) {
        this.name = this.student.name
        this.email = this.student.email
        this.ra = this.student.ra.toString()
        this.cpf = this.student.cpf
      }
    } else {
      this.clearFields()
    }
  },
  methods: {
    async submit() {
      this.error = ''

      if (await this.validateFields()) {
        const student = {
          name: this.name,
          email: this.email,
          ra: Number(this.ra),
          cpf: this.cpf
        }

        if (!this.isEdit) {
          this.dialogMessage = 'Aluno cadastrado com sucesso'
          await StudentService.addStudent(student)
        } else {
          this.dialogMessage = 'Aluno atualizado com sucesso'
          await StudentService.updateStudent(student)
        }

        this.dialog = true
        this.clearFields()
      }
    },
    async validateFields() {
      if (!this.name) {
        this.error = 'O campo Nome é obrigatório'
        return false
      }

      if (!this.email) {
        this.error = 'O campo E-mail é obrigatório'
        return false
      }

      if (!this.validateEmail()) {
        this.error = 'E-mail inválido'
        return false
      }

      if (!this.ra) {
        this.error = 'O campo RA é obrigatório'
        return false
      }

      if (!(await this.validateRA())) {
        this.error = 'Registro Acadêmico já cadastrado'
        return false
      }

      if (!this.cpf) {
        this.error = 'O campo CPF é obrigatório'
        return false
      }

      if (!(await this.validateCPF())) {
        this.error = 'CPF inválido'
        return false
      }

      return true
    },
    validateEmail() {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(this.email)
    },
    async validateRA() {
      if (!this.isEdit) {
        const students = await StudentService.fetchStudents()

        return students.map((st) => st.ra).indexOf(Number(this.ra))
      }

      return true
    },
    async validateCPF() {
      if (this.cpf.length === 14) {
        const students = await StudentService.fetchStudents()

        return students.map((st) => st.cpf).indexOf(this.cpf)
      }

      return false
    },
    clearFields() {
      this.name = ''
      this.email = ''
      this.ra = ''
      this.cpf = ''
    },
    close() {
      this.dialog = false
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
    width: 55px;
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

    color: #006a74 !important;
  }

  &_error {
    display: flex;
    justify-content: center;

    font-size: 9pt;
    color: #ca0000;
  }

  &_btns {
    display: flex;
    justify-content: right;

    margin-top: 10px;
  }

  &_btn {
    margin: 5px;
    color: #fff !important;
    text-transform: unset !important;
  }
}

.v-text-field__slot input {
  padding-left: 5px !important;
}

.dialog_text {
  display: flex;
  justify-content: center;
}
</style>

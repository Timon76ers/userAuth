<template>
  <v-form v-model="valid" ref="form" @submit.prevent="submit">
    <v-text-field
      v-model="login.value"
      label="Логин*"
      type="text"
      :rules="loginRules"
      :success="!!login.value"
      prepend-icon="alternate_email"
      outlined
      required
      clearable
    ></v-text-field>
    <v-text-field
      v-model="password.value"
      label="Пароль*"
      :append-icon="password.isVisible ? 'mdi-eye' : 'mdi-eye-off'"
      :type="password.isVisible ? 'text' : 'password'"
      :rules="passwordRules"
      :success="!!password.value"
      @click:append="password.isVisible = !password.isVisible"
      prepend-icon="lock"
      outlined
      clearable
    ></v-text-field>
    <v-btn
      :block="true"
      :disabled="!valid || loading"
      color="success"
      class="mr-4"
      @click.prevent="submit"
      :loading="loading"
    >
      {{'Войти'}}
      <v-icon right>send</v-icon>
    </v-btn>
  </v-form>
</template>

<script>
import {mandatory, nameValid, minLength} from '@/utils/rules'
export default {
  props: ["sign"],
  data: () => ({
    valid: false,
    loading: false,
    login: {
      value: "",
      min: 3,
    },
    password: {
      value: "",
      min: 8,
      isVisible: false
    }
  }),
  computed: {
    loginRules: vm => [mandatory, nameValid, minLength(vm.login.min)],
    passwordRules: vm => [mandatory, minLength(vm.password.min)]
  },
  methods: {
    submit() {
      let vm = this;
      vm.loading = true;
      this.sign(vm.login.value);
      setTimeout(() => (vm.loading = false), 2000);
    }
  }
};
</script>
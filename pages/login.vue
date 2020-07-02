<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8>
      <v-card min-width="500">
        <v-toolbar dark flat>
          <v-toolbar-title>Авторизация</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <AuthForm :sign="signIn"/>
        </v-card-text>
      </v-card>
    <div class="text-center mt-5">Еще не зарегестрирован <nuxt-link to="#">Зарегестрироваться</nuxt-link></div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthForm from '@/components/AuthForm'
import { mapGetters, mapActions } from 'vuex'
export default {
  auth: false,
  layout: "empty",
  components: {AuthForm},
  methods: {
    ...mapActions('userStore', ['AUTHORIZATION']),
      async signIn(login) {
        this.AUTHORIZATION(login)
        this.$router.push('/profile')
      }
  }
};
</script>
<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
    >
      <v-card>
        <v-card-title class="headline">
          Самая главная страница
        </v-card-title>
        <v-card-text>
          Добро подаловать!
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  middleware: 'auth-middleware'
}
</script>

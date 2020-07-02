<template>
  <v-layout>
    <v-row>
      <v-col cols="12" md="2">
        <img src="/avatar.jpg" alt="avatar" class="mb-5" width="200" />
      </v-col>
      <v-col cols="12" md="10">
        <div>
          <strong>Логин: </strong> {{LOGIN}}
        </div>
        <div>
          <strong>Имя: </strong> {{FULL_NAME}}
        </div>
        <div>
          <strong>email: </strong> {{EMAIL}}
        </div>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    middleware: "auth-middleware",
    computed: {...mapGetters('userStore', ['LOGIN', 'FULL_NAME', 'EMAIL'])}
  };
</script>

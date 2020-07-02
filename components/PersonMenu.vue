<template>
  <v-menu>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on">
        <v-icon left>person</v-icon>
        {{ LOGIN }}
      </v-btn>
    </template>
    <v-list dense>
      <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to" router link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>{{ item.title }}</v-list-item-content>
      </v-list-item>
    </v-list>
    <v-btn block color="error" @click="logOut()">
      <v-icon>eject</v-icon>Выйти
    </v-btn>
  </v-menu>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    data() {
      return {
        menuItems: [{ title: "Профиль", to: `/profile`, icon: "person" }]
      };
    },
    computed: {
      ...mapGetters("userStore", ["LOGIN"])
    },
    methods: {
      ...mapActions('userStore', ["LOG_OUT"]),
      logOut() {
        this.LOG_OUT()
        this.$router.push('/login')
      }
    }
  }
</script>
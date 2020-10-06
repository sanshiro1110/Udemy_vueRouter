<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページにいく</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input
      type="text"
      v-model="message"
    >
    <p>{{ message }}</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    //...スプレット演算子
    ...mapGetters("count", ["doubleCount", "tripleCount"]),
    // message() {
    //   return this.$store.getters.message;
    // }
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch('updateMessage', value);
      },
    }
  },
    // {
    //   doubleCount() {
    //     return this.$store.getters.doubleCount;
    //   },
    //   tripleCount() {
    //     return this.$store.getters.tripleCount;
    //   }
    // },
  methods: {
    toUsers() {
      this.$router.push({
        name: 'users-id-profile',
        params: {id: 1},
      });
    }
  }
}
</script>

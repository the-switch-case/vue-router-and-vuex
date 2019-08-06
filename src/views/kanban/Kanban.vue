<template>
  <div>
    <div>{{ count }}</div>
    <a @click="decrement">Decrementar</a>
    <a @click="increment">&nbsp;Incrementar</a>
  </div>
</template>

<script>
export default {
  computed: {
    count: {
      set(v) {
        this.$store.commit("setCount", v);
      },
      get() {
        return this.$store.state.count;
      }
    }
  },
  methods: {
    increment() {
      this.count = this.count + 1;
    },
    decrement() {
      this.count = this.count - 1;
    }
  }
};
</script>

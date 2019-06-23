<template>
  <div class="tile flex-centered" :class="{checked: todo.checked}">
    <div class="tile-icon">
      <i class="icon" :class="todo.checked ? 'icon-check' : 'icon-time'"></i>
    </div>
    <dir class="tile-content">
      <div class="tile-subtitle">{{ todo.description }}</div>
    </dir>
    <div class="tile-action">
      <button @click="$emit('toggle', todo)" class="btn btn-link">
        <span v-if="todo.checked">Desmarcar</span>
        <span v-else>Concluído</span>
      </button>
      <button @click="$emit('remove', todo)" class="btn btn-link">
        <span class="text-error">Remover</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: { type: Object, required: true }
  }
};
</script>

<style scoped>
.checked {
  text-decoration: line-through;
  color: lightgray;
}
</style>


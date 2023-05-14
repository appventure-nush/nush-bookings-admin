<template>
  <div class="number-select">
    <div
      v-for="i in maxNum"
      :key="i"
      class="number"
      :class="{ selected: i === modelValue }"
      @click="$emit('update:modelValue', i)"
    >
      {{ i }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: Number,
    maxNum: Number,
  },
};
</script>

<style scoped>
.number-select {
  width: 100%;
  display: flex;
  gap: 12px;
}

.number {
  flex-grow: 1;
  padding-top: 12px;
  padding-bottom: 8px;
  border: 1px solid #5f5f5f;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  display: grid;
  place-items: center;

  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
  font-weight: 700;
  transition: background-color 200ms ease-in-out;
}

.number.selected {
  color: white;
  border-color: transparent;
  background-color: #444;
}
</style>

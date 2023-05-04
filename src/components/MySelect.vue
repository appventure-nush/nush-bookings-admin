<template>
  <div class="container">
    <select :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
      <option value="" disabled selected hidden>{{ placeholder }}</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
    <i class="regular chevron_down s16 white"></i>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    options: [String],
    modelValue: String,
  },
};
</script>

<style scoped>
.container {
  position: relative;
}

select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  outline: none;
  border: none;
  color: white;
  height: 40px;
  font-size: 14px;
  padding-left: 18px;
  padding-right: 40px;
  background-color: #333;
  border-radius: 12px;
  height: 40px;

  cursor: pointer;
  transition: background-color 200ms ease-in-out;
}

select:focus-within {
  background-color: #444;
}

i {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
</style>
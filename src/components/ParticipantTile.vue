<template>
  <div class="participant-tile" :class="{ present }" @click="present = !present">
    <div class="checkbox">
      <i class="checkmark s16 filled"></i>
    </div>
    <div class="details">
      <span class="name">{{ name }}</span>
      <span class="group-size">{{ groupSize }} {{ groupSize === 1 ? 'person' : 'people' }}</span>
    </div>
    <i class="delete s24 regular" @click.stop="$emit('delete')"></i>
  </div>
</template>

<script>
export default {
  props: {
    bookingId: String,
    name: String,
    groupSize: Number,
  },
  data() {
    return {
      present: localStorage.getItem(this.bookingId) === 'true',
    };
  },
  watch: {
    present() {
      localStorage.setItem(this.bookingId, this.present);
    },
  },
};
</script>

<style scoped>
.participant-tile {
  display: flex;
  align-items: center;

  padding-left: 20px;
  padding-top: 12px;
  padding-right: 24px;
  padding-bottom: 10px;
  margin-bottom: 12px;
  border: 1px solid #4e4e4e;
  border-radius: 12px;
  cursor: pointer;

  transition: background-color 100ms;
}

.participant-tile.present {
  border-color: transparent;
  background: #444;
}

.checkbox {
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid white;
  margin-right: 20px;
  display: grid;
  place-items: center;

  transition: background-color 100ms;
}

i.checkmark {
  color: #1c1c1c;
}

i.checkmark:before {
  font-size: 14px;
}

.participant-tile.present > .checkbox {
  background-color: white;
}

.details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
}

.details > .name {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
}

.details > .group-size {
  font-size: 12px;
}

i.delete:active {
  color: #d42727;
}
</style>

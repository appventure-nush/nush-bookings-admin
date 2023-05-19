<template>
  <div class="add-participants">
    <h1>Add Participants</h1>
    <h3>{{ formatTiming(parseInt($route.query.tourTime)) }}, group {{ $route.query.groupId }}</h3>

    <p>Name</p>
    <TextField v-model="name" />
    <div style="height: 40px"></div>

    <p>Number of People</p>
    <NumberSelect v-model="numPpl" :maxNum="4" />

    <MyButton class="confirm-btn" text="Confirm" :on-click="confirmAdd" />
  </div>
</template>

<script>
import TextField from '@/components/TextField.vue';
import NumberSelect from '@/components/NumberSelect.vue';
import MyButton from '@/components/MyButton.vue';
import DbService from '@/api/DbService';

export function formatTiming(timing, addTimeOfDay = true) {
  const timeOfDay = timing >= 1200 ? 'pm' : 'am';
  timing = timing % 1200;
  return (
    (Math.floor(timing / 100) || 12) +
    '.' +
    ((timing % 100) + '').padStart(2, '0') +
    (addTimeOfDay ? ' ' + timeOfDay : '')
  );
}

export default {
  name: 'AddParticipants',
  components: { TextField, NumberSelect, MyButton },
  data() {
    return {
      name: '',
      numPpl: 0,
    };
  },
  methods: {
    formatTiming,
    async confirmAdd() {
      await DbService.addParticipant(
        this.$route.query.tourTime + '_' + this.$route.query.groupId,
        this.name,
        this.numPpl
      );
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.add-participants {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1c1c1c;
  color: white;
  padding: 30px;
}

h1 {
  margin-bottom: 20px;
  font-size: 34px;
  font-weight: 700;
  background-image: linear-gradient(45deg, #00a499, #006760);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

h3 {
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 700;
}

p {
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 550;
  opacity: 60%;
}

.confirm-btn {
  position: absolute;
  bottom: 32px;
  right: 36px;
}
</style>

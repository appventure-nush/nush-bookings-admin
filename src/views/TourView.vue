<template>
  <div class="tour-view">
    <h1>Open house tour</h1>
    <div class="select-tour-row">
      <my-select v-model="tourTime" placeholder="Select time" :options="['2.00pm', '2.10pm']" />
      <my-select v-model="routeName" placeholder="Route" :options="['Route A', 'Route B']" />
    </div>
    <h2>Participants ({{ numParticipants }}/12)</h2>
    <participant-tile name="Testing" :group-size="4" />
    <participant-tile name="Another group" :group-size="3" />
    <participant-tile name="Dave" :group-size="1" />
    <my-button class="fab" text="Add people" :on-click="() => { }" />
  </div>
</template>

<script>
import MySelect from '@/components/MySelect.vue';
import ParticipantTile from '@/components/ParticipantTile.vue';
import MyButton from '@/components/MyButton.vue';

export default {
  name: 'TourViews',
  components: { MySelect, ParticipantTile, MyButton },
  data() {
    return {
      tourTime: '',
      routeName: '',
      numParticipants: 0,
    }
  }
}
</script>

<style scoped>
.tour-view {
  display: flex;
  flex-direction: column;
  padding: 28px;
}

h1 {
  font-size: 32px;
  background: linear-gradient(45deg, #00a499, #003f3b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
}

.select-tour-row {
  display: flex;
  column-gap: 12px;
  margin-bottom: 54px;
}

h2 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 24px;
}

.fab {
  position: absolute;
  bottom: 32px;
  right: 36px;
}
</style>
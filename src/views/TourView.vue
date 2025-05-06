<template>
  <Transition>
    <Dialog
      is-yes-no
      v-if="showDialog"
      title="Are you sure??"
      :message="`Do you want to cancel ${bookingToDelete.name}'s booking? They will have to book again!`"
      @yes="confirmDeleteBooking"
      @no="showDialog = false"
    />
  </Transition>
  <div class="tour-view">
    <h1>Open house tour</h1>
    <div class="select-tour-row">
      <my-select v-model="tourTime" placeholder="Select time" :options="TIMINGS" />
      <my-select v-model="groupId" placeholder="Group" :options="TOURGROUPS" />
    </div>
    <h2>Participants ({{ numParticipants }}/12)</h2>
    <participant-tile
      v-for="booking in bookings"
      :key="booking.id"
      :booking-id="booking.id"
      :name="booking.name"
      :group-size="booking.pax"
      @delete="askDelete(booking)"
    />
    <my-button
      class="fab"
      text="Add people"
      :on-click="() => $router.push({ path: '/add', query: { tourTime, groupId } })"
    />
  </div>
</template>

<script>
import MySelect from '@/components/MySelect.vue';
import ParticipantTile from '@/components/ParticipantTile.vue';
import MyButton from '@/components/MyButton.vue';
import Dialog from '@/components/MyDialog.vue';
import DbService from '@/api/DbService';

const TIMINGS = [
  900, 910, 920, 930, 940, 950, 1000, 1010, 1020, 1030, 1040, 1050, 1100,
  1110, 1120, 1130, 1140, 1150,
  //
  1200, 1210, 1220, 1230, 1240, 1250, 1300, 1310, 1320, 1330, 1340, 1350,
  1400, 1410, 1420, 1430,
].map((num) => num.toString());
const TOURGROUPS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export default {
  name: 'TourViews',
  components: { MySelect, ParticipantTile, MyButton, Dialog },
  data() {
    return {
      TIMINGS,
      TOURGROUPS,
      tourTime: localStorage.getItem('tourTime') || '',
      groupId: localStorage.getItem('groupId') || '',
      bookings: [],
      showDialog: false,
      bookingToDelete: null,
    };
  },
  watch: {
    tourTime() {
      localStorage.setItem('tourTime', this.tourTime);
      this.refreshParticipantsList();
    },
    groupId() {
      localStorage.setItem('groupId', this.groupId);
      this.refreshParticipantsList();
    },
  },
  computed: {
    numParticipants() {
      return this.bookings.reduce((acc, curr) => acc + curr.pax, 0);
    },
  },
  mounted() {
    this.refreshParticipantsList();
  },
  methods: {
    async refreshParticipantsList() {
      this.bookings = await DbService.getParticipants(this.tourTime + '_' + this.groupId);
    },
    askDelete(booking) {
      this.bookingToDelete = booking;
      this.showDialog = true;
    },
    async confirmDeleteBooking() {
      await DbService.cancelBooking(
        this.tourTime + '_' + this.groupId,
        this.bookingToDelete.id,
        this.bookingToDelete.pax
      );
      this.bookings = this.bookings.filter((booking) => booking.id !== this.bookingToDelete.id);
      this.showDialog = false;
      this.bookingToDelete = null;
    },
  },
};
</script>

<style scoped>
.tour-view {
  display: flex;
  flex-direction: column;
  padding: 28px;
}

h1 {
  font-size: 34px;
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
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
}

.fab {
  position: absolute;
  bottom: 32px;
  right: 36px;
}
</style>

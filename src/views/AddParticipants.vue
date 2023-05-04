<template>
  <div class="add-participants">
    <h1>Add Participants</h1>
    <h3>2.00 pm, Route A<br /></h3>

    <p>Phone Number</p>
    <PhoneField
      class="phoneNumber"
      v-model="phoneNumber"
      :error="invalidPhoneNumber ? 'Enter a valid phone number' : null"
    />
    <div class="spacer" />

    <p>Number of People</p>
    <div style="align-self: center">
      <NumberSelect v-model="numPpl" :maxNum="4" />
    </div>

    <MyButton class="confirm-btn" text="Confirm" :on-click="() => {}" />
  </div>
</template>

<script>
import PhoneField from "@/components/PhoneField.vue";
import NumberSelect from "@/components/NumberSelect.vue";
import MyButton from "@/components/MyButton.vue";

export default {
  name: "AddParticipants",
  components: { PhoneField, NumberSelect, MyButton },
  methods: {},
  setup() {
    const numPpl = 0;
  },
};
</script>

<style lang="scss" scoped>
.add-participants {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1c1c1c;
  color: white;
  padding: 30px;

  h1 {
    margin-bottom: 20px;
    font-size: 32px;
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
    margin-bottom: 60px;
    font-size: 18px;
    font-weight: 700;
  }

  p {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 550;
    opacity: 60%;
  }

  .spacer {
    margin-bottom: 40px;
  }

  .confirm-btn {
    position: absolute;
    bottom: 32px;
    right: 36px;
  }
}
</style>

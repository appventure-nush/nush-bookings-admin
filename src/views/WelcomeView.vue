/* eslint-disable no-undef */
<template>
  <Transition>
    <Dialog
      v-if="showDialog"
      title="About"
      message="This site was built by a team of Year 4 and Year 6 students at NUS High School,
      composed of Lee Jia Jie, Tan Yong Tat, Vadapalli Dedeep Sai, and Tan Kai Xun Dave
       with support from the NUS High Students' Council and AppVenture,
      the Computer Science Interest Group of NUS High."
      @close="showDialog = false"
    />
  </Transition>
  <div class="welcome">
    <img src="@/assets/school_logo.png" height="54" width="100" />
    <h1>NUS High Bookings</h1>
    <p>
      This page is intended for use by tour guides of the open house tour. It contains information on the participants
      registered for each route, and allows guides to sign up on behalf of senior citizens who are less technically
      inclined.
    </p>
    <div style="height: 50px"></div>
    <MyButton text="Microsoft login" :onClick="login" />
    <div class="spacer"></div>
    <span class="credits" @click="showDialog = true">By Jia Jie, Yong Tat, Sai, Dave </span>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import DbService from '@/api/DbService.js';
import MyButton from '@/components/MyButton.vue';
import Dialog from '@/components/MyDialog.vue';

export default {
  components: {
    MyButton,
    Dialog,
  },
  setup() {
    const router = useRouter();
    const showDialog = ref(false);
    const login = async () => {
      try {
        const result = await DbService.microsoftLogin();
        router.push('/home');
      } catch (error) {
        console.error();
      }
    };
    return { showDialog, login };
  },
};
</script>

<style scoped>
.welcome {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1c1c1c;
  padding: 36px;
}

h1 {
  margin-top: 68px;
  margin-bottom: 36px;
  margin-right: 64px;
  font-size: 34px;
  font-weight: 700;
  background-image: linear-gradient(45deg, #00a499, #003f3b);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  font-weight: 500;
}

.credits {
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  font-weight: 500;
}
</style>

<template>
  <div id="bg">
    <h1 id="gradient-text">Manage bookings</h1>
    <div class="modal" @click="$router.push('/open-house-tour')">
      <h2>Open House Tour</h2>
      <p>24/05/25</p>
    </div>
    <p id="signed-in">Signed in as {{ name }}</p>
    <button id="sign-out" @click="signOut">Sign out</button>
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth';

function toTitleCase(s) {
  return s.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default {
  name: 'ManageBookings',
  components: {},
  data() {
    const user = getAuth().currentUser;
    return {
      name: toTitleCase(user.displayName),
    };
  },
  methods: {
    async signOut() {
      await getAuth().signOut();
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
#bg {
  padding: 6vw 5vw 0 5vw;
}

#gradient-text {
  font-size: 7.2vw;
  font-family: Avenir;
  background: linear-gradient(45deg, #00a499, #003f3b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 5vh;
}

.modal {
  border: 1px solid #848484;
  border-radius: 10px;
  padding: 3vw 4vw;
  color: white;
  transition: background-color 200ms ease-in-out;
}

.modal:active {
  border-color: transparent;
  background-color: #444444;
}

.modal h2 {
  font-size: 4.2vw;
  font-family: Avenir;
  margin-bottom: 1vh;
}

.modal p {
  font-size: 3.2vw;
  font-family: Avenir;
  color: #848484;
}

#signed-in {
  font-size: 3.7vw;
  font-family: Avenir;
  color: #848484;
  position: absolute;
  bottom: 3.8vh;
  left: 5vw;
}

#sign-out {
  background-color: #434242;
  border: none;
  border-radius: 5px;
  padding: 2vw 3vw;
  color: white;
  font-size: 3.7vw;
  font-family: Avenir;
  position: absolute;
  bottom: 3vh;
  right: 5vw;
}
</style>

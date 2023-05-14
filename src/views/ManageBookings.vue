<template>
  <div id="bg">
    <h1 id="gradient-text">Manage bookings</h1>
    <div class="modal">
      <h2>Open house tour</h2>
      <p>31/04/23</p>
    </div>
    <p id="signed-in">Signed in as (Not yet logged in)</p>
    <button id="sign-out" @click="signOut">Sign out</button>
  </div>
</template>

<script>
const signOut = function () {
  alert('You have been signed out.');
  window.location.href = '/';
};

export default {
  name: 'ManageBookings',
  components: {},
  methods: {
    signOut,
  },
};
</script>

<style scoped>
#bg {
  padding: 6vw 5vw 0 5vw;
}

#gradient-text {
  font-size: 7vw;
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
}

.modal h2 {
  font-size: 4vw;
  font-family: Avenir;
  margin-bottom: 1vh;
}

.modal p {
  font-size: 3vw;
  font-family: Avenir;
  color: #848484;
}

#signed-in {
  font-size: 3.5vw;
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
  font-size: 3.5vw;
  font-family: Avenir;
  position: absolute;
  bottom: 3vh;
  right: 5vw;
}
</style>

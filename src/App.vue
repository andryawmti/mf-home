<template>
  <div>
    <h1>Home</h1>
    <div>
      <p>Vue Component:</p>
      <InputForm v-model="inputData" />
    </div>
    <div>
      <p>Web Component:</p>
      <as-input v-model="inputData"></as-input>
    </div>
    <div>
      {{ inputData }}
    </div>
    <div>
      <as-button primary rounded @click="jumpToCpanelHandler(105552)">Jump To cPanel</as-button>
      <as-button primary rounded @click="syncHandler(105552)">Sync</as-button>
    </div>
  </div>
</template>

<script>
import InputForm from "./components/InputForm.vue";
import { capi } from '@niagahoster/memberarea-mf-shared'

export default {
  name: "App",
  components: {
    InputForm,
  },
  setup() {
    const myButtonHandler = () => {
      alert("My Button is Clicked");
    };
    
    const jumpToCpanelHandler = (serviceId) => {
      capi.cpanel.getJumpUrl(serviceId)
        .then((data) => {
          console.log(data)
          window.open(data.url, '_blank')
        })
    }
    
    const syncHandler = (serviceId) => {
      capi.imunify.checkBlockedIp(serviceId, '140.213.19.237')
        .then(data => {
          console.log(data)
        })
    }

    return {
      myButtonHandler,
      jumpToCpanelHandler,
      syncHandler,
    };
  },
  data() {
    return {
      inputData: 'some string',
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

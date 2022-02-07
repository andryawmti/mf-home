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
  </div>
</template>

<script>
import InputForm from "./components/InputForm.vue";

export default {
  name: "App",
  components: {
    InputForm,
  },
  setup() {
    const myButtonHandler = () => {
      alert("My Button is Clicked");
    };

    return {
      myButtonHandler,
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

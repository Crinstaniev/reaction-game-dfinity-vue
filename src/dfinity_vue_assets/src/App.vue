<template>
  <div class="root">
    <hello />
  </div>
</template>

<script>
import Hello from './components/Hello.vue';
export default {
  components: { Hello },
};
</script>

<style>
.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  width: 100%;
  height: 100vh;
}

h1 {
  font-size: 3em;
}
</style>

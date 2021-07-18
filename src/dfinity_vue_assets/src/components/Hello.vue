<template>
  <div class="block">
    <img alt="logos" src="../../assets/logos.png" />
    <h1 v-if="!isLogin && !isLoading" @click="handleClick">{{ greetText }}</h1>
    <div v-if="isLogin">
      <h1>
        Hooray! Your principal is <code>{{ principal }}</code>
      </h1>
    </div>
    <h1 v-if="isLoading">Loading...</h1>
  </div>
</template>

<script>
import { dfinity_vue } from '../connections/canisters';
import { AuthClient } from '@dfinity/auth-client';

export default {
  data() {
    return {
      greetText: 'Click me to login!',
      principal: '',
      isLogin: false,
      isLoading: false,
    };
  },

  methods: {
    async handleClick() {
      const authClient = await AuthClient.create();
      authClient.login({
        onSuccess: async () => {
          console.log('[INFO] login success');
          this.isLoading = true;
          this.principal = await dfinity_vue.getPrincipal();
          this.isLogin = true;
          this.isLoading = false;
        },
      });
    },
  },
};
</script>

<style>
h1 {
  font-size: 3em;
}

h1:hover {
  cursor: pointer;
  color: brown;
}

.block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

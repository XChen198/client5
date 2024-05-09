import { ref } from 'vue';
import { v as defineStore } from './server.mjs';

const useUserStore = defineStore("user", () => {
  const userInfo = ref(null);
  const setUserInfo = (info) => {
    userInfo.value = info;
  };
  return {
    userInfo,
    setUserInfo
  };
});

export { useUserStore as u };
//# sourceMappingURL=user-C06b1g6F.mjs.map

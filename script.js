const { createApp } = Vue;

createApp({
  data() {
    return {
      isMenuVisible: false,
      isModalVisible: false,
      isTooltipVisible: false,
    };
  },
}).mount("#app");

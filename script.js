const { createApp } = Vue;

createApp({
  data() {
    return {
      isMenuVisible: false,
      isModalVisible: false,
      isTooltipVisible: false,
    };
  },
  methods: {
    changeMenuVisible() {
      console.log(this.isMenuVisible);
      this.isMenuVisible = !this.isMenuVisible;
    },
  },
}).mount("#app");

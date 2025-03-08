<template>
    <div class="minecraft-input">
      <input
        v-if="!copied"
        v-model="ip"
        type="text"
        class="input-box"
        readonly
        @click="copyToClipboard"
        placeholder="Cliquez pour copier l'IP"
      />
      <input
        v-if="copied"
        type="text"
        class="input-box"
        readonly
        value="IP copiée !"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ip: "mc.example.com", // Remplacez par l'IP de votre serveur
        copied: false,
      };
    },
    methods: {
      copyToClipboard() {
        navigator.clipboard.writeText(this.ip).then(() => {
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
          }, 2000);
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .minecraft-input {
    font-family: 'Minecraft', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .input-box {
    background-color: #1e1e1e;
    color: #ffffff;
    border: 2px solid #444;
    padding: 10px;
    font-size: 18px;
    width: 250px;
    text-align: center;
    cursor: pointer;
  }
  
  .input-box:focus {
    outline: none;
  }
  </style>
  
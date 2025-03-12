<template>
  <link href="https://fonts.googleapis.com/css2?family=Jersey+25&display=swap" rel="stylesheet">

  <div style="background-image: url('/img/backgroundJungle.png'); background-attachment: fixed;" class="bg-gradient-to-r from-slate-200 via-slate-400 from-slate-200 h-[3000px]">

    <navbar></navbar>
    <div class="pt-0 bg-[#3D4248] h-full bg-opacity-80">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
  body {
    font-family: "Jersey 25", sans-serif;
  }
</style>

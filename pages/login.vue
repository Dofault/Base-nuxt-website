<script setup lang="ts">
// Remember to disable the middleware protection from your page!

const { signIn, status, data, signOut , getSession   } = useAuth()


/*
 * NOTE: Here we hard-coded username and password
 * On your own page this should probably be connected to two inputs
 */
const demoCredentials = { username: 'test', password: 'hunter2' }
</script>

<template>

<br/>f
<br/>f

<br/>f

  <div class="pt-50">
    <p>Sign-In Options:</p>
    <button @click="signIn('azure-ad')">
      Github
    </button>
    <button @click="signIn('credentials', demoCredentials)">
      Username and Password
    </button>
  </div>
  You are currently {{ status }}.

  <div v-if="data">
    Hello {{ data.user.name }}!
    
  </div>
  <div v-else>
    You are not logged in.
  </div>
  <button @click="() => getSession()">
    Refresh
  </button>
  <button @click="() => signOut">
    Signout
  </button>
  <button @click="() => signOut({ callbackUrl: '/' })">
    Signout with redirect
  </button>
</template>
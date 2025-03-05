<template>
    <header>
      <nav>
        <ul>
          <li style="font-weight: bold; font-size: 50px;"><NuxtLink to="/a-propos">A propos</NuxtLink></li>
          <li style="font-weight: bold; font-size: 50px;">
        <LoginLink to="/api/login">
                Connexion
            </LoginLink>
        </li>
        <li style="font-weight: bold; font-size: 50px;">

        <NuxtLink to="/api/register" external>
            Inscription
        </NuxtLink>
    </li>

    <li v-if="$auth.loggedIn" style="font-weight: bold; font-size: 50px;">


        <NuxtLink to="/api/logout" external>
        Deconnexion
        </NuxtLink>

    </li>

          <li style="font-weight: bold; font-size: 50px;"><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </template>
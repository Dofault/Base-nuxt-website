<template>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: window.location.origin }}>
    <MyApp />
    </Auth0Provider>
</template>

<script>
</script>
<template>
  <div id="app">
    <h1>Vue / Firebase starter</h1>

    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components: { Header }
}
</script>

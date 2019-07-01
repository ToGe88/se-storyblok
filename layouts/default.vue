<template>
  <div>
    <default-header/>
    <main id="main" role="main">
      <nuxt/>
    </main>
    <default-footer/>
  </div>
</template>

<script>
import DefaultHeader from '~/components/generals/DefaultHeader.vue'
import DefaultFooter from '~/components/generals/DefaultFooter.vue'

export default {
  components: {
    DefaultHeader,
    DefaultFooter
  }
}
</script>

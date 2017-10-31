<template>
  <div>
    test
    <p @click="onClick">{{load | loadMoreFilter}}</p>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      load: false
    }
  },
  methods: {
    onClick() {
      this.$toasted.show('test')
      this.$store.dispatch('testAction')
      console.log(this.$http)
    }
  }
}

</script>
<style type="text/css" scoped></style>

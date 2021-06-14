props: ['item'],
<template>
  <div class="accountingItem" ref="accountingItem">
      <label>
        <span>Название</span>
        <input type="text">
      </label>
      <label>
        <span>Кол-во</span>
        <input type="text">
      </label>
      <label>
        <span>Цена</span>
        <input type="text">
      </label>
      <button v-on:click="RemoveAccountingItem">Удалить</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    console.log(this.$refs[0])
  },
  methods: {
    RemoveAccountingItem (e) {
      e.target.parentNode.remove()
    }
  }
}
</script>

<style>

</style>

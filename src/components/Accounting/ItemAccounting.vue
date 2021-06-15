<template>
  <div class="accountingItem" ref="accountingItem">
      <label>
        <span>Название</span>
        <input type="text" v-model="nameItem">
      </label>
      <label>
        <span>Кол-во</span>
        <input type="number" v-model="qtyItem">
      </label>
      <label>
        <span>Цена</span>
        <input type="number" v-model="priceItem">
      </label>
      <button v-on:click="RemoveAccountingItem">Удалить</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      nameItem: '',
      qtyItem: '',
      priceItem: ''
    }
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

<template>
  <div class="accountingItem" :ref="accountingItem1" :index="index">
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
      <label>
        <div v-bind="sumItem">{{ qtyItem * priceItem }}</div>
      </label>
      <button v-on:click="ButtonDelClick">Удалить</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      nameItem: '',
      qtyItem: '',
      priceItem: '',
      sumItem: '',
      index: 0
    }
  },
  methods: {
    ButtonDelClick (e) {
      this.$emit('ButtonDelClick', e)
    }
  }
}
</script>

<style>

</style>

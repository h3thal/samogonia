<template>
  <div class="accountingItem">
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
      qtyItem: 0,
      priceItem: 0,
      sumItem: 0,
      test: '123'
    }
  },
  methods: {
    ButtonDelClick (e) {
      console.log(e.target.textContent)
      console.log(e.target.html)
      this.$emit('ButtonDelClick', e)
    }
  },
  mounted () {
    this.$nextTick(function () {
      console.log(this.idItem)
    })
  }
}
</script>

<style>

</style>

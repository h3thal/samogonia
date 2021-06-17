<template>
  <div class="accountingItem" @itemObj="this.item">
      <label>
        <span>Название</span>
        <input type="text" v-model="item.nameItem">
      </label>
      <label>
        <span>Кол-во</span>
        <input type="number" v-model="item.qtyItem">
      </label>
      <label>
        <span>Цена</span>
        <input type="number" v-model="item.priceItem">
      </label>
      <label>
        <div v-bind="item.sumItem">{{ item.qtyItem * item.priceItem }}</div>
      </label>
      <button v-on:click="ButtonDelClick">Удалить</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      item: {
        nameItem: '',
        qtyItem: 0,
        priceItem: 0,
        sumItem: 0,
        test: '123'
      }
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
      this.$emit('itemObj', {
        nameItem: this.nameItem
      })
    })
  }
}
</script>

<style>

</style>

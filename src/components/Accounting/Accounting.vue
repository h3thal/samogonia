<template>
  <form class="accounting" @submit.prevent>
    <ItemAccounting
      v-for="(item, index) of arrItemAccounting"
      :key="item.id"
      :index="index"
      :item="item"
      @update="updateItem"
      @ButtonDelClick="RemoveAccountingItem"
    />
    <button @click.prevent="AddAccountingItem">Добавить товар</button>
    <button @click="submitAccounting">Готово</button>
  </form>
</template>

<script>
import ItemAccounting from './ItemAccounting.vue'
export default {
  components: {
    ItemAccounting
  },
  data () {
    return {
      arrItemAccounting: [{ id: 0, nameItem: '', qtyItem: '', priceItem: '', sumItem: '' }]
    }
  },
  created () {
  },
  methods: {
    AddAccountingItem (e) {
      const nextId = 1 + +this.arrItemAccounting[this.arrItemAccounting.length - 1].id
      this.arrItemAccounting.push({ id: nextId, nameItem: '', qtyItem: '', priceItem: '', sumItem: '' })
    },
    RemoveAccountingItem (id) {
      this.arrItemAccounting = this.arrItemAccounting.filter(item => item.id !== id)
    },
    updateItem (data) {
      Object.values(this.arrItemAccounting).forEach((e) => {
        if (e.id === data.id) {
          e.nameItem = data.nameItem
          e.qtyItem = data.qtyItem
          e.priceItem = data.priceItem
          e.sumItem = data.sumItem
        }
      })
    },
    submitAccounting (e) {
      e.preventDefault()
      alert(this.arrItemAccounting)
    }
  }
}
</script>

<style lang="scss">

</style>

<template>
  <div class="accounting" >
    <ItemAccounting v-for=" item in arrItemAccounting " :key="item" :itemObj="itemObj" v-on:ButtonDelClick="RemoveAccountingItem" :idItem="idItem"></ItemAccounting>
    <button v-on:click="AddAccountingItem">Добавить товар</button>
    <button>Готово</button>
  </div>
</template>

<script>
import ItemAccounting from './ItemAccounting.vue'
export default {
  components: {
    ItemAccounting
  },
  data () {
    return {
      arrItemAccounting: [],
      idItem: 0
    }
  },
  created () {
    console.log(this.arrItemAccounting.push(ItemAccounting))
    this.idItem = this.idItem + 1
  },
  methods: {
    AddAccountingItem (e) {
      this.arrItemAccounting.push(ItemAccounting)
      this.idItem = this.idItem + 1
    },
    RemoveAccountingItem (e) {
      this.arrItemAccounting.splice(1, 1)
      console.log(ItemAccounting)
    }
  }
}
</script>

<style>

</style>

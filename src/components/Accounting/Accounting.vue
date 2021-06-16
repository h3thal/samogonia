<template>
  <div class="accounting" >
    <ItemAccounting v-for=" item in arrItemAccounting " :index="index" :key="item" v-on:ButtonDelClick="RemoveAccountingItem">></ItemAccounting>
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
      arrItemAccounting: []
    }
  },
  created () {
    this.index = this.index + 1
    console.log(this.arrItemAccounting.push('ItemAccounting'))
  },
  methods: {
    AddAccountingItem (e) {
      this.arrItemAccounting.push('ItemAccounting')
    },
    RemoveAccountingItem (e) {
      console.log(this.index)
      this.arrItemAccounting.splice(1, 1)
      e.target.parentNode.remove()
    }
  }
}
</script>

<style>

</style>

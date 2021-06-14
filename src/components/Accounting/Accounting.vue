<template>
  <div class="accounting" >
    <ItemAccounting v-for=" item in arrItemAccounting " :key="item"></ItemAccounting>
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
    this.arrItemAccounting.push('ItemAccounting')
  },
  methods: {
    AddAccountingItem (e) {
      this.arrItemAccounting.push('ItemAccounting')
    },
    RemoveAccountingItem (e) {
      e.target.parentNode.remove()
    }
  }
}
</script>

<style>

</style>

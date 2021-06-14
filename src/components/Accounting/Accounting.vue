<template>
  <div class="accounting" >
    <div :v-for=" component in arrItemAccounting " :key="component">
      <componenta :item="component"></componenta>
    </div>
    <componenta :v-for=" component in arrItemAccounting " :key="index"></componenta>
    <button v-on:click="AddAccountingItem">Добавить товар</button>
    <button>Готово</button>
  </div>
</template>

<script>
import componenta from './ItemAccounting.vue'
export default {
  components: {
    componenta
  },
  data () {
    return {
      arrItemAccounting: [componenta, componenta]
    }
  },
  methods: {
    AddAccountingItem (e) {
      this.arrTest.push('wow')
    },
    RemoveAccountingItem (e) {
      e.target.parentNode.remove()
    }
  }
}
</script>

<style>

</style>

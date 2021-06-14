<template>
  <div class="accounting" >
    <div :v-for=" component in arrItemAccounting " :key="component">
      <componenta :item="component"></componenta>
    </div>
    <div v-for="lol in arrTest" :key="lol">
      {{ lol }}
    </div>
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
      arrItemAccounting: [componenta, componenta],
      arrTest: [0, 1, 2]
    }
  },
  created () {
    console.log(this.$refs[0])
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

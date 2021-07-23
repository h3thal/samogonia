<template>
  <div ref='test'>
    <HistoryItem/>
  </div>
</template>

<script>
import HistoryItem from '@/components/History/ItemHistory.vue'
export default {
  name: 'History',
  components: [
    HistoryItem
  ],
  data () {
    return {
      arrHistory:
      {
        date: '180800',
        history: [
          { id: 0, nameItem: 'Дрожи алкотек 48', qtyItem: '5', priceItem: '250', sumItem: '1250' },
          { id: 1, nameItem: 'Дрожи брагман 48', qtyItem: '5', priceItem: '200', sumItem: '1000' },
          { id: 2, nameItem: 'Гидрозатвор', qtyItem: '1', priceItem: '100', sumItem: '100' }
        ]
      }
    }
  }
}
</script>

<style>

</style>

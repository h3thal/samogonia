<template>
  <div class="ItemHistory" ref="this.index">
      <div>
        <div>Название: {{ this.item.nameItem }}</div>
      </div>
      <div>
        <div>Количество: {{ this.item.qtyItem }}</div>
      </div>
      <div>
        <div>Цена: {{ this.item.priceItem }}</div>
      </div>
      <div>
        <div>Сумма: {{ this.item.sumItem }}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ItemHistory',
  props: {
    index: {
      type: Number,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.ItemHistory{
  display: flex;
  flex-direction: row;
}
</style>

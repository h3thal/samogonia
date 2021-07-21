<template>
  <div class="accountingItem">
      <label>
        <span>Название {{ this.index }}</span>
        <input type="text" required v-model="nameItem" @input="update">
      </label>
      <label>
        <span>Кол-во</span>
        <input type="number" required v-model="qtyItem" @input="update">
      </label>
      <label>
        <span>Цена</span>
        <input type="number" required v-model="priceItem" @input="update">
      </label>
      <label>
        <span>Сумма</span>
        <span v-bind="this.item.sumItem">{{ this.item.qtyItem * this.item.priceItem }}</span>
      </label>
      <button @click="ButtonDelClick">Удалить</button>
    </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    ButtonDelClick () {
      const id = this.item.id
      this.$emit('ButtonDelClick', id)
    },
    update () {
      this.$emit('update', {
        id: this.item.id,
        nameItem: this.nameItem,
        qtyItem: this.qtyItem,
        priceItem: this.priceItem,
        sumIten: this.sumIten
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/__mixin.scss";
  .accountingItem {
    display: flex;
    justify-content: space-around;
    margin: 10px 0px;
    @include sm {
      flex-direction: column;
      margin: 30px 0px;
      label {
        display: flex;
        margin:  5px 0px;
        input {
          flex: 1 0;
          margin-left: 10px;
        }
      }
    }
  }
</style>

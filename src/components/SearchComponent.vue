<template>
  <div class="border-t-2 bg-blue-100 p-1">
    搜尋：
    <input type="text" class="border mb-1 w-full" v-model="search" @input="onChange">
    <label class="p-2 border block bg-white" v-for="(product, i) in resultArray" :key="i"
      :for="product.serial_number + '_s' + index">
      <input type="radio" :id="product.serial_number + '_s' + index" :value="product.serial_number" v-model="selected"
        @change="$emit('clickData', selected)" :name="`product_${index}`">
      {{ product.serial_number }}：{{ product.name }}
    </label>
  </div>
</template>

<script>
export default {
  emits: ['clickData'],
  props: {
    index: {
      type: Number,
      required: true
    },
    searchtext: {
      type: String
    },
    dbJSON: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    search: '',
    resultArray: [],
    selected: ''
  }),
  methods: {
    onChange(event) {
      this.resultArray = this.dbJSON.filter(product => {
        return product.name.includes(event.target.value)
      })
    }
  },
  mounted() {
    this.search = this.searchtext
  }
}
</script>

<!-- eslint-disable space-before-function-paren -->
<template>
  <div class="p-4">
    <div class="text-3xl text-green-500 font-bold mb-3">Step 1</div>
    <div class="flex">
      <div class="border-2 border-dashed border-black p-2 mb-2 mr-2">
        <div class="text-xl">上傳 JSON</div>
        <input type="file" id="selectFiles" @change="onJSONFileChange" onclick="this.value=null;" />
      </div>
      <div class="border-2 border-dashed border-black p-2 mb-2 mr-2">
        <div class="text-xl">上傳 Excel</div>
        <input type="file" class="mb-2" @change="onFileChange" onclick="this.value=null;" />
      </div>
    </div>
  </div>
  <div class="p-4 text-3xl text-green-500 font-bold">Step 2</div>
  <div class="text-xl px-4">產品項目</div>
  <div class="grid grid-cols-3 gap-2">
    <div class="p-2 border-2 border-black rounded m-2 flex" :class="{
      'bg-red-200': item.serial_number === undefined || item.serial_number === ''
    }" v-for="(item, index) in menuJSON.items" :key="index">
      <div class="border-r-2 border-dashed border-blue-500 px-2">
        <div>id: {{ item.id }}</div>
        <div>serial_number: <input type="text" class="border" :class="{
          'border-red-500': item.serial_number === undefined || item.serial_number === ''
        }" v-model="item.serial_number">
        </div>
        <div>title: {{ item.title.translations.en }}</div>
      </div>
      <div class="px-2 grow">
        <div class="label_group" v-if="dbJSON.length > 0">
          <label class="p-2 border block bg-white"
            v-for="(product, i) in dbJSON.filter(product => item.title.translations.en.split('-').some(el => product.name.includes(el)))"
            :key="i" :for="product.serial_number + '_' + index">
            <input type="radio" :id="product.serial_number + '_' + index" :value="product.serial_number"
              :name="`product_${index}`" v-model="item.serial_number">
            {{ product.serial_number }}：{{ product.name }}
          </label>
          <div
            v-if="dbJSON.filter(product => item.title.translations.en.split('-').some(el => product.name.includes(el))).length === 0">
            <SearchComponent :searchtext="item.title.translations.en" :dbJSON="dbJSON"
              @click-data="(selected) => { item.serial_number = selected }" :index="index"></SearchComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-3xl text-green-500 font-bold my-3 px-4">Step 3</div>
  <button class="mx-4 mb-4 border border-black rounded p-2" @click="onClick">下載</button>
</template>

<script>
import readXlsxFile from 'read-excel-file'
import download from 'downloadjs'
import SearchComponent from '@/components/SearchComponent.vue'
export default {
  components: {
    SearchComponent
  },
  data: () => ({
    menuName: '',
    menuJSON: {},
    dbJSON: []
  }),
  methods: {
    onJSONFileChange(event) {
      const files = event.target.files ? event.target.files : null
      if (files.length <= 0) {
        return false
      }

      const fr = new FileReader()
      fr.onload = e => {
        const fileName = files.item(0).name.split('.')[0]
        this.menuName = fileName
        const result = JSON.parse(e.target.result)
        this.menuJSON = result
      }
      fr.readAsText(files.item(0))
    },
    onFileChange(event) {
      const xlsxfile = event.target.files ? event.target.files[0] : null
      const schema = {
        代號: {
          prop: 'serial_number',
          type: String
        },
        項目名稱: {
          prop: 'name',
          type: String
        }
      }
      readXlsxFile(xlsxfile, { schema }).then(({ rows, errors }) => {
        console.log('errors:', errors)
        this.dbJSON = rows
        this.$nextTick(() => {
          document.querySelectorAll('.bg-red-200').forEach(el => {
            el.querySelectorAll('.label_group label:first-child').forEach((e) => {
              e.click()
            })
          })
        })
      })
    },
    onClick() {
      if (document.querySelectorAll('.bg-red-200').length === 0) {
        download(JSON.stringify(this.menuJSON), `${this.menuName}-merge.json`, 'application/json')
      } else {
        alert('請確認是否有未填寫的 serial_number 項目')
      }
    }
  },
  mounted() {
  }
}
</script>

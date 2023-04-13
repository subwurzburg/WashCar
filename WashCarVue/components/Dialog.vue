<template>
  <div>
    <!-- 彈跳視窗 -->
    <div v-if="showDialog" class="dialog-overlay">
      <div class="dialog-content">
        <div
          class="text-3xl text-red-500 text-right cursor-pointer"
          @click="close"
        >
          ❌
        </div>
        <!-- 彈跳視窗內容 -->
        <div>
          <label for="carId">車牌號碼</label>
          <input type="text" v-model="dialogInfo.carId" />
        </div>
        <div class="mt-2">
          <label for="spendTime">消費時間</label>
          <input type="date" v-model="dialogInfo.spendTime" />
        </div>
        <div class="mt-2">
          <label for="band">廠牌</label>
          <input type="text" v-model="dialogInfo.brand" />
        </div>
        <div class="mt-2">
          <label for="spendTime">電話</label>
          <input type="text" v-model="dialogInfo.phone" />
        </div>
        <div class="mt-2">
          <label for="spendTime">消費金額</label>
          <input type="text" v-model="dialogInfo.amount" />
        </div>
        <div class="mt-2">
          <label for="spendTime">註記</label>
          <input type="text" v-model="dialogInfo.remark" />
        </div>
        <div class="flex justify-end">
          <button
            @click="deleteDialog"
            class="rounded mr-2 mt-2 px-4 py-2 bg-red-500 text-white"
            v-if="mode === 'editor'"
          >
            刪除
          </button>
          <button
            @click="finishDialog"
            class="rounded mt-2 px-4 py-2 bg-slate-800 text-white"
          >
            完成
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userInfo', 'showDialog', 'mode'],
  data() {
    return {
      dialogInfo: {},
    }
  },
  watch: {
    userInfo: {
      handler(newV) {
        this.dialogInfo = { ...newV }
      },
      immediate: true,
    },
  },
  methods: {
    finishDialog() {
      if (this.mode === 'editor') {
        this.$emit('editor', this.dialogInfo)
      } else if (this.mode === 'add') {
        this.$emit('add', this.dialogInfo)
      }
    },
    deleteDialog() {
      const check = confirm('確定刪除這筆資料嗎？')
      if (check) {
        this.$emit('delete', this.dialogInfo)
      }
    },
    close() {
      this.$emit('close', false)
    },
  },
}
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  border-radius: 8px;
  background-color: #fff;
  padding: 20px;
  width: 600px;
  text-align: center;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: left;
}

input[type='text'],
input[type='date'] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 4px;
}

/* 可自訂彈跳視窗樣式 */
</style>
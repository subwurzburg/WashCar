<template>
  <div>
    <client>
      <div class="max-w-[1440px] mx-auto">
        <div>
          <div class="mt-2 flex items-center justify-center">
            <label for="carId" class="mr-4">車牌號碼</label>
            <input name="carId" v-model="carId" class="border mr-4" />
            <button class="text-3xl" @click="searchData">🔎</button>
          </div>
          <div class="flex justify-end">
            <button
              class="px-4 py-2 bg-red-600 text-white rounded-md"
              @click="add"
            >
              新增
            </button>
          </div>
        </div>
        <!--顯示區塊-->
        <div class="w-full mt-10">
          <table class="w-full">
            <tr class="flex">
              <th class="flex-1">車牌號碼</th>
              <th class="flex-1">消費時間</th>
              <th class="flex-1">廠牌</th>
              <th class="flex-1">電話</th>
              <th class="flex-1">消費金額</th>
              <th class="flex-1">註記</th>
            </tr>
            <tr
              v-for="(user, index) in userInfo"
              :key="`${user.carId}${index}`"
              class="flex"
              @click="editor(user)"
            >
              <td class="flex-1 text-center over">{{ user.carId }}</td>
              <td class="flex-1 text-center over">{{ user.spendTime }}</td>
              <td class="flex-1 text-center over">{{ user.brand }}</td>
              <td class="flex-1 text-center over">{{ user.phone }}</td>
              <td class="flex-1 text-center over">{{ user.amount }}</td>
              <td class="flex-1 text-center over">{{ user.remark }}</td>
            </tr>
          </table>
        </div>
      </div>
      <editorDialog
        :mode="mode"
        :userInfo="tagetInfo"
        :showDialog="dialogStatus"
        @editor="editorInfo"
        @delete="deleteInfo"
        @add="additonInfo"
        @close="closeDialog"
      ></editorDialog>
    </client>
  </div>
</template>
<script>
import {
  getUserInfo,
  editorUserInfo,
  deleteUserInfo,
  additionUserInfo,
} from '@/api/aboutus'
import editorDialog from '@/components/Dialog.vue'
export default {
  components: { editorDialog },
  data() {
    return {
      carId: null,
      userInfo: [],
      tagetInfo: [],
      dialogStatus: false,
      mode: null,
    }
  },
  methods: {
    reset() {
      this.tagetInfo = []
      this.mode = null
    },
    searchData() {
      const sendData = this.carId.toUpperCase()
      getUserInfo(sendData).then((res) => {
        this.userInfo = res.data
      })
    },
    editor(user) {
      this.mode = 'editor'
      this.tagetInfo = user
      this.dialogStatus = true
    },
    editorInfo(userInfo) {
      const sendData = userInfo
      editorUserInfo(sendData)
        .then((res) => {
          alert('更新成功')
        })
        .then(() => {
          this.dialogStatus = false
          this.searchData()
          this.reset()
        })
    },
    deleteInfo(userInfo) {
      const sendData = { _id: userInfo._id }
      deleteUserInfo(sendData)
        .then(() => {
          alert('刪除成功')
        })
        .then(() => {
          this.dialogStatus = false
          this.searchData()
          this.reset()
        })
    },
    add() {
      this.dialogStatus = true
      this.mode = 'add'
    },
    additonInfo(userInfo) {
      const sendData = { ...userInfo }
      sendData.carId = sendData.carId.toUpperCase()
      additionUserInfo(sendData)
        .then(() => {
          alert('新增成功')
        })
        .then(() => {
          this.dialogStatus = false
          this.searchData()
          this.reset()
        })
    },
    closeDialog() {
      this.dialogStatus = false
      this.searchData()
      this.reset()
    },
  },
}
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
}

/* 表格背景色 */
th {
  text-align: center;
  background-color: #8ac78a;
  font-weight: bold;
  color: #215fb5;
  font-size: 20px;
}

/* 條紋狀背景色 */
tr:nth-child(even) {
  background-color: #ecefec;
}

/* 滑鼠移入效果 */
tr:hover {
  border: 4px solid black;
}
.over {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
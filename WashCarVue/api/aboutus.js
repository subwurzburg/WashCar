import apiRequest from "~/api/request"

export function getUserInfo(carId) {
  return apiRequest({
    url: `http://localhost:3002/getUserInfo?carId=${carId}`,
    methods: "get",
  })
}
export function editorUserInfo(data) {
  return apiRequest({
    url: `http://localhost:3002/editorUserInfo`,
    method: "patch",
    data
  })
}

export function deleteUserInfo(data) {
  return apiRequest({
    url: `http://localhost:3002/deleteUserInfo`,
    method: "delete",
    data
  })
}

export function additionUserInfo(data) {
  return apiRequest({
    url: `http://localhost:3002/additionUserInfo`,
    method: "post",
    data
  })
}

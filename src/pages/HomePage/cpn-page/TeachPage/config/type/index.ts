export interface ClassList {
  iurl: string
  cname: string
  tname: string
  id: string
}
export interface TeachPageState {
  imgUrl: string
  className: string
  classTeacher: string
  classList: Array<ClassList> | []
  modalVisible: boolean
  uploadLoading: boolean
}
export type TeachPageAction =
  | { type: 'setImgUrl'; payload: string }
  | { type: 'setClassName'; payload: string }
  | { type: 'setClassTeacher'; payload: string }
  | { type: 'setClasList'; payload: ClassList }
  | { type: 'setModalVisible'; payload: boolean }
  | { type: 'setUploadLoading'; payload: boolean }

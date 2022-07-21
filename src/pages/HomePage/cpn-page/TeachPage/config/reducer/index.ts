import type { TeachPageAction, TeachPageState } from '../type'
export const initialState: TeachPageState = {
  imgUrl: '',
  className: '',
  classTeacher: '',
  classList: [
    {
      iurl: '',
      cname: '',
      tname: '',
      id: ''
    }
  ],
  modalVisible: false,
  uploadLoading: false
}
export const TeachRoutePageReducer = (
  state: TeachPageState,
  action: TeachPageAction
) => {
  let newClassList = null
  switch (action.type) {
    case 'setImgUrl':
      return { ...state, imgUrl: action.payload }
    case 'setClassName':
      return { ...state, className: action.payload }
    case 'setClassTeacher':
      return { ...state, classTeacher: action.payload }
    case 'setClasList':
      newClassList = [...state.classList].concat(action.payload)
      return { ...state, classList: newClassList }
    case 'setModalVisible':
      return { ...state, modalVisible: action.payload }
    case 'setUploadLoading':
      return { ...state, uploadLoading: action.payload }
    default:
      throw new Error()
  }
}

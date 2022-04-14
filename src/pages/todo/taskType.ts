import exports from "webpack"

export interface task {
  num: string,
  content: string
}
export interface footerType {
  onOk: Function,
  onCancel: Function
}

export interface taskType extends footerType {
  visible: boolean
}

export interface taskprops {
  taskList: task[]
}

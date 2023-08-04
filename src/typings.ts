export interface UserOptions {
  entry?: string // 入口文件
}

// 对ConcreteComponent进行扩展
export interface ConcreteComponent {
  i18n: any
}
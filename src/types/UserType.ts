export type UserType = {
  id?: string
  nome: string
  email: string
  senha: string
}

export type Id = string | number

export type ColumnType = {
  id: Id
  title: string
}

export type TaskType = {
  id: Id
  columnId: Id
  title: string
  content: string
}

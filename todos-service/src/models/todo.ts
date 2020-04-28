import { model, Document, Model, Schema } from 'mongoose'

export interface TodoDocument extends Document {
  body: string
  done: boolean
  order: number
  project: string
  user: string
}

export interface TodoModel extends Model<TodoDocument> {}

const todosSchema = new Schema<TodoDocument>({
  body: String,
  done: Boolean,
  order: Number,
  project: Schema.Types.ObjectId,
  user: Schema.Types.ObjectId
}, {
  timestamps: true
})

todosSchema.set('toJSON', {
  transform: (doc, { __v, password, _id,...rest }, options) => ({
    id: _id,
    ...rest
  })
})

export const Todo = model<TodoDocument, TodoModel>('Todo', todosSchema)

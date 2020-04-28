import { model, Schema, Document, Model } from 'mongoose'

export interface ProjectDocument extends Document {
  title: string
  user: string
}

export interface ProjectModel extends Model<ProjectDocument> {}

const projectsSchema = new Schema<ProjectDocument>({
  title: String,
  user: Schema.Types.ObjectId
}, {
  timestamps: true
})

projectsSchema.set('toJSON', {
  transform: (doc, { __v, password, _id,...rest }, options) => ({
    id: _id,
    ...rest
  })
})

export const Project = model<ProjectDocument, ProjectModel>('Project', projectsSchema)

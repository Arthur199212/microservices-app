import { Joi } from './joi'

const id = Joi.objectId().required()

const title = Joi.string()
  .trim()
  .required()

const user = Joi.objectId().required()

export const createProjectsSchema = Joi.object({
  title,
  user
})

export const projectSchema = Joi.object({
  id,
  user
})

export const editProjectsSchema = Joi.object({
  id,
  title,
  user
})

export const getProjectSchema = Joi.object({
  user
})

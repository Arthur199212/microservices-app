import { Joi } from './joi'

const body = Joi.string()
  .trim()
  .required()

const end = Joi.number().required()

const id = Joi.objectId().required()

const order = Joi.number().required()

const project = Joi.objectId().required()

const start = Joi.number().required()

const user = Joi.objectId().required()

const done = Joi.boolean().required()

export const createTodosSchema = Joi.object({
  body,
  order,
  project,
  user
})

export const getTodosSchema = Joi.object({
  project,
  user
})

export const reorderTodosSchema = Joi.object({
  end,
  project,
  start,
  user
})

export const todosSchema = Joi.object({
  id,
  user
})

export const editTodosSchema = Joi.object({
  id,
  body,
  done,
  order,
  user
})

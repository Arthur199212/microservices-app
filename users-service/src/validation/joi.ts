import joi, { ObjectSchema, ExtensionFactory, Root, StringSchema } from '@hapi/joi'
import mongoose from 'mongoose'
import { BadRequest } from '../errors'

const objectId: ExtensionFactory = joi => ({
  type: 'objectId',
  base: joi.string(),
  messages: {
    objectId: '"{#label}" is not a valid ID'
  },
  validate (value, helpers) {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return { value, errors: helpers.error('objectId') }
    }
  }
})

interface ExtendedRoot extends Root {
  objectId(): StringSchema
}

export const Joi: ExtendedRoot = joi.extend(objectId)

export const validate = async (schema: ObjectSchema, args: any) => {
  try {
    await schema.validateAsync(args, { abortEarly: false })
  } catch(err) {
    throw new BadRequest(err)
  }
}

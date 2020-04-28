import { TextField } from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'

const MyTextField = ({ name, ...props }: any) => {
  const [field, meta] = useField(name)

  let errorText = meta.error && meta.touched ? meta.error : ''

  if (meta.error?.includes('GraphQL error')) {
    errorText = meta.error.replace('GraphQL error: ', '')
  }

  return (
    <TextField
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  )
}

export default MyTextField

import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { FormikHelpers } from 'formik'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../config'
import { RegisterForm } from '../../components'
import {
  REGISTER_FORM_TYPES,
  RegisterFormValues
} from '../../components/RegisterForm'
import { AuthService } from '../../services'

const LOG_IN = gql`
  mutation LogIn($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      accessToken
    }
  }
`

export const Login = () => {
  const history = useHistory()
  const [logIn] = useMutation(LOG_IN)

  const handleSubmit = async (
    values: RegisterFormValues,
    { setErrors, setSubmitting }: FormikHelpers<RegisterFormValues>
  ): Promise<void> => {
    setSubmitting(true)

    try {
      const res = await logIn({ variables: { ...values } })

      AuthService.setAccessToken(res.data.logIn.accessToken)

      history.push(ROUTES.home)
    } catch (err) {
      console.log(err)
      setErrors({
        email: err.message.includes('email') ? err.message : '',
        password: err.message.includes('password') ? err.message : ''
      })
      setSubmitting(false)
    }
  }

  return (
    <RegisterForm
      formType={REGISTER_FORM_TYPES.login}
      handleSubmit={handleSubmit}
    />
  )
}

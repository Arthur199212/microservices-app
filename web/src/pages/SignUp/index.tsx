import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { FormikHelpers } from 'formik'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../config'
import { RegisterForm } from '../../components'
import { REGISTER_FORM_TYPES, RegisterFormValues } from '../../components/RegisterForm'
import { AuthService } from '../../services'

const SIGN_UP = gql`
  mutation CreateUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      accessToken
    }
  }
`

export const SignUp = () => {
  const history = useHistory()
  const [logIn] = useMutation(SIGN_UP)

  const handleSubmit = async (
    values: RegisterFormValues,
    { setErrors, setSubmitting }: FormikHelpers<RegisterFormValues>
  ): Promise<void> => {
    setSubmitting(true)

    try {
      const res = await logIn({ variables: { ...values } })

      AuthService.setAccessToken(res.data.createUser.accessToken)

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
      formType={REGISTER_FORM_TYPES.signup}
      handleSubmit={handleSubmit}
    />
  )
}

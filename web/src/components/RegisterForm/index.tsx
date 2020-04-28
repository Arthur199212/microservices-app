import { Avatar, Button, Container, Typography } from '@material-ui/core'
import { Person as PersonIcon } from '@material-ui/icons'
import { Formik, Form, FormikHelpers } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import { MyTextField } from '../../components'
import { ROUTES } from '../../config'
import useStyles from './useStyles'
import { userSchema } from '../../validation'

export const REGISTER_FORM_TYPES = {
  login: 'login',
  signup: 'signup'
}

const initialValues = {
  email: '',
  password: ''
}

export interface RegisterFormValues {
  email: string
  password: string
}

interface ProrTypes {
  formType: string
  handleSubmit: (values: RegisterFormValues, actions: FormikHelpers<RegisterFormValues>) => void | Promise<void>
}

const RegisterForm = ({ formType = 'login', handleSubmit }: ProrTypes) => {
  const classes = useStyles()

  return (
    <Container className={classes.container} maxWidth='sm'>
      <Avatar className={classes.iconContainer}>
        <PersonIcon />
      </Avatar>
      <Typography className={classes.title} variant='h5'>
        {REGISTER_FORM_TYPES.login === formType ? 'Log In' : 'Sign Up'}
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >{({ isSubmitting }) => (
        <Form className={classes.form}>
          <MyTextField
            className={classes.textfield}
            variant='outlined'
            label='Email*'
            name='email'
          />
          <MyTextField
            className={classes.textfield}
            variant='outlined'
            label='Password*'
            name='password'
          />
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            type='submit'
            disabled={isSubmitting}
          >
            {REGISTER_FORM_TYPES.login === formType ? 'Log In' : 'Sign Up'}
          </Button>
        </Form>
      )}
      </Formik>
      <Typography className={classes.infoContainer} variant='body2' component='div'>
        {REGISTER_FORM_TYPES.login === formType ? 'Don\'t have an account?' : 'Already signed up?'}
        <Link className={classes.link} to={REGISTER_FORM_TYPES.login === formType ? ROUTES.signup : ROUTES.login}>
          {REGISTER_FORM_TYPES.login === formType ? 'Sign up' : 'Go to login'}
        </Link>
      </Typography>
    </Container>
  )
}

export default RegisterForm

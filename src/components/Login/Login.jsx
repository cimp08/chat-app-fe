import { VStack, ButtonGroup, Button, Heading } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import TextField from './TextField';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required('Username required!')
          .min(6, 'Username to short!')
          .max(28, 'Username to long'),
        password: Yup.string()
          .required('Password required!')
          .min(6, 'Password to short!')
          .max(28, 'Username to long'),
      })}
      OnSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      <VStack
        as={Form}
        w={{ base: '90%', md: '500px' }}
        m='auto'
        justify='center'
        h='100vh'
        spacing='1rem'
      >
        <Heading>Log In</Heading>
        <TextField
          label='Username'
          name='username'
          placeholder='Enter username'
          autoComplete='off'
        />
        <TextField
          label='Password'
          name='password'
          type='password'
          placeholder='Enter password'
          autoComplete='off'
        />
        <ButtonGroup pt='1rem'>
          <Button colorScheme='teal' type='submit'>
            Login
          </Button>
          <Button onClick={() => navigate('/register')}>Create Account</Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default Login;

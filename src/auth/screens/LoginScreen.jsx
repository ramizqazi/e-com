import React, { useState } from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import {
  Text,
  Input,
  Button,
  Center,
  Divider,
  FormLabel,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import { Eye, EyeOff } from 'react-feather';
import Card from '../../common/Card';

import { login as loginAction } from '../redux/actions';

const LoginScreen = ({ login }) => {
  const [passwordToggle, setPasswordToggle] = useState(true);

  const _togglePassword = () => setPasswordToggle((prevState) => !prevState);

  const _handleSubmit = (values) => {
    login(values.email, values.password);
  };

  return (
    <Card variant="rounded" w="350px" p={5}>
      <Text mb={3} fontSize="3xl" color="black">Sign In</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={_handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="email">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    color="black"
                    _hover="none !important"
                    borderColor="gray"
                    variant="outline"
                    {...field}
                  />
                  <FormErrorMessage>
                    <FormErrorIcon />
                    {form.errors.email}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }) => (
                <FormControl mt={3} isInvalid={form.errors.password && form.touched.password}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      color="black"
                      type={passwordToggle ? 'password' : 'text'}
                      _hover="none !important"
                      borderColor="gray"
                      variant="outline"
                      {...field}
                    />
                    <InputRightElement onClick={_togglePassword}>
                      {passwordToggle ? <EyeOff /> : <Eye /> }
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    <FormErrorIcon />
                    {form.errors.password}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              w="100%"
              type="submit"
              isLoading={isSubmitting}
              color="white"
              bgColor="brand"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <Divider my={4} />
      <Center>
        <Button as={NavLink} to="/auth/register" variant="link" color="black">Create Account</Button>
      </Center>
    </Card>
  );
};

const initialValues = {
  email: '',
  password: '',
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Must not be empty'),
  password: Yup.string().required('Must not be empty'),
});

const mapDispatchToProps = {
  login: loginAction,
};

export default connect(null, mapDispatchToProps)(LoginScreen);

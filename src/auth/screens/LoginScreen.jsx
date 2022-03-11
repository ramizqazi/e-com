import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
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
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';
import Card from '../../common/Card';

const LoginScreen = () => {
  const _handleSubmit = (values) => {
  };

  return (
    <Card variant="rounded" w="350px" p={5}>
      <Text mb={3} fontSize="3xl" color="black">Sign In</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={_handleSubmit}
      >
        {() => (
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
                  <Input
                    color="black"
                    _hover="none !important"
                    borderColor="gray"
                    variant="outline"
                    {...field}
                  />
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

export default LoginScreen;

import React, { useState } from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import {
  Text,
  Input,
  Button,
  HStack,
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

import { register as registerAction } from '../redux/actions';

const RegisterScreen = ({ register }) => {
  const [passwordToggle, setPasswordToggle] = useState(true);

  const _handleSubmit = (values) => {
    register(values);
  };

  const _togglePassword = () => setPasswordToggle((prevState) => !prevState);

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
            <HStack align="flex-start">
              <Field name="firstName">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      color="black"
                      _hover="none !important"
                      borderColor="gray"
                      variant="outline"
                      {...field}
                    />
                    <FormErrorMessage>
                      <FormErrorIcon />
                      {form.errors.firstName}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="lastName">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      color="black"
                      _hover="none !important"
                      borderColor="gray"
                      variant="outline"
                      {...field}
                    />
                    <FormErrorMessage>
                      <FormErrorIcon />
                      {form.errors.lastName}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </HStack>
            <Field name="phone">
              {({ field, form }) => (
                <FormControl mt={3} isInvalid={form.errors.phone && form.touched.phone}>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    type="number"
                    color="black"
                    _hover="none !important"
                    borderColor="gray"
                    variant="outline"
                    {...field}
                  />
                  <FormErrorMessage>
                    <FormErrorIcon />
                    {form.errors.phone}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }) => (
                <FormControl mt={3} isInvalid={form.errors.email && form.touched.email}>
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
        <Button as={NavLink} to="/auth/login" variant="link" color="black">Login Instead</Button>
      </Center>
    </Card>
  );
};

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: '',
};

const LoginSchema = Yup.object().shape({
  firstName: Yup.string().required('Must not be empty'),
  lastName: Yup.string().required('Must not be empty'),
  email: Yup.string().required('Must not be empty'),
  password: Yup.string().required('Must not be empty'),
  phone: Yup.number().required('Must not be empty'),
});

const mapDispatchToProps = {
  register: registerAction,
};

export default connect(null, mapDispatchToProps)(RegisterScreen);

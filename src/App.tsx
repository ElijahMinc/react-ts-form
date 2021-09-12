import React from 'react';
import Header from './components/ElasticComponents/Header';
import Input from './components/ElasticComponents/Input'
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  EuiButton,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
} from '@elastic/eui';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// type moreSomething = string | number




// const arr = <T,>(array: T[]): T[] => {
//   return array.reverse()
// }

// arr(['1', '2', '2'])
// arr([1, 2, 3, 4, 5])
// arr([1, '1', { name: 'name' }])
// function array<T>(array: Array<T>): Array<T> {
//   return array.reverse()
// }
// console.log(array([1, 2, 3, '2', { name: 'ilya' }]))

interface IFormInput {
  firstName: string;
  secondName: string;
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required('First name is a required field'),
  secondName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required('Last name is a required field'),
});

const App: React.FC = () => {
  // const [showErrors, setShowErrors] = React.useState<boolean>(true);

  // const onButtonClick = () => {
  //   setShowErrors(!showErrors);
  // };

  const error: string[] = ["Please, set your first Name", "Please, set your last Name"]

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });


  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data)
    
  }
  return (
    <>
      <Header
        links={[
          {
            id: 1,
            href: '#',
            color: 'primary',
            content: 'Main',
            isActive: true
          },
          {
            id: 2,
            href: '#',
            color: 'primary',
            content: 'Serve',
            isActive: false
          },
        ]}
        title="Elijah Minc"
      />
      <div className="container">
        <EuiForm
          isInvalid={!!errors?.firstName && !!errors?.secondName}
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: '100%' }}
          error={error}
        >
          <EuiFormRow
            isInvalid={!!errors?.firstName}
            label="Set your First Name"
            helpText={errors?.firstName?.message}
            fullWidth>
            <Input
              placeholder="Your first Name"
              {...register('firstName', { required: true })}
              isInvalid={!!errors?.firstName}
            />
          </EuiFormRow>
          <EuiFormRow
            isInvalid={!!errors?.secondName}
            label="Set your Second Name"
            helpText={errors?.secondName?.message}
            fullWidth>
            <Input
              placeholder="Your second Name"
              {...register('secondName')}
              isInvalid={!!errors?.secondName}
            />
          </EuiFormRow>

          <EuiSpacer />

          <EuiButton type="submit" fill fullWidth disabled={!!errors?.firstName && !!errors?.secondName}>
            Send
          </EuiButton>
        </EuiForm>
      </div>

    </>
  );
}

export default App;


  // const foo = <T, U, Z>(x: T, y: U, obj: Z): Z => {
  //   return obj
  // }
  // console.log(foo<string, number, object>('2', 2, {'hello': 'hello' }))
  // foo<string, number, object>('2', 2, {'hello': 'hello' })

  // const foo2 = (num: number): number => {
  //   return num
  // }

  // foo2<number>(2) // ERROR
  // function someFunc<T>(value: T): T {
  //   return value
  // }
  // someFunc('2')

  // const mass: Array<moreSomething> = [1, 2, 3, '3']

  // const [first, second, ...prop] = mass
  // console.log(prop)
  // const obj: {name: string, age: number, getName: () => string } = {
  //   name: '123',
  //   age: 123,
  //   getName() {
  //     return this.name
  //   }
  // }

  // let mass = [1, 2, 3, 4, 5, '123', '23']

  // let newMass = [...mass, {...obj, obj}]
  // console.log(newMass)
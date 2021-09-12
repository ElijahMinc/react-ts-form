import React, { ReactElement } from 'react';
import Header from './components/ElasticComponents/Header';
import Input from './components/ElasticComponents/Input'
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  EuiButton,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
} from '@elastic/eui';

// type moreSomething = string | number


// interface Some<T> {
//   name: T
//   age: T
//   [propName: string]: T
// }


// const arr = <T,>(array: T[]): T => {
//   return array.reverse()
// }

// function array<T>(array: Array<T>): Array<T> {
//   return array.reverse()
// }
// console.log(array([1, 2, 3, '2', { name: 'ilya' }]))

interface IFormInput {
  firstName: string;
  secondName: string;
}


type Data = Array<object>


const App: React.FC = () => {

  // let obj: Some<moreSomething> = {
  //   name: 22,
  //   age: '123',
  //   hello: '123123'
  // }
  const [data, setData] = React.useState<object[]>([]);


  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  console.log(data)

  const { register, handleSubmit } = useForm<IFormInput>({});

  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

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
        <EuiForm component='form' onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <EuiFormRow label="Set your First Name" helpText="Psss. You`re very beautiful" fullWidth>
            <Input
              placeholder="Your first Name"
              {...register('firstName', { required: true })}
            />
          </EuiFormRow>

          <EuiFormRow label="Set your Second Name" fullWidth>
            <Input
              placeholder="Your second Name"
              {...register('secondName')}
            />
          </EuiFormRow>

          <EuiSpacer />

          <EuiButton type="submit" fill fullWidth>
            Send
          </EuiButton>
        </EuiForm>
      </div>

    </>
  );
}

export default App;



{/* <EuiForm onSubmit={handleSubmit(onSubmit)}>
<EuiFormRow label="Set your First Name" helpText="Psss. You`re very beautiful" fullWidth>
  <input {...register("firstName")} />
  <Input
    label="firstName"
    {...register('firstName')}
    
  />
</EuiFormRow>

<EuiFormRow label="Set your Second Name" fullWidth>
  <input />
  <Input
    label="secondName"
    {...register('secondName')}
  />
</EuiFormRow>

<EuiSpacer />

<EuiButton type="submit" fill>
  Send
</EuiButton>
</EuiForm> */}
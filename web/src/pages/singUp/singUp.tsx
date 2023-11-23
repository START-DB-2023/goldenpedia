import { useNavigate } from 'react-router-dom';
import { SingUpBox, SingUpContainer, SingUpForm, Title, Input, Button, CancelButton } from './styles';

import { useForm, SubmitHandler } from "react-hook-form";

type newUserForm = {
  name: string;
  username: string;
  password: string;
}

export function SingUp(){
  const { register, handleSubmit, formState: { errors } } = useForm<newUserForm>();

  const onSubmit: SubmitHandler<newUserForm> = data => console.log(data);
  const navigate = useNavigate();

  return (
    <SingUpContainer >
      <SingUpBox>
        <Title>Crie Conta</Title>
        <SingUpForm onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder='Digite seu nome...' {...register("name", { required: true })}/>
        <Input placeholder='Digite seu username...'  {...register("username", { required: true })}/>
        <Input placeholder='Digite sua senha...' type='password' {...register("password", { required: true })} />
        <Button type='submit'>Criar</Button>
        <CancelButton onClick={() => navigate('/')}>Cancelar</CancelButton>
        </SingUpForm>
      </SingUpBox>
    </SingUpContainer>
  );
};

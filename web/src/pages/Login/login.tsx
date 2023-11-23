import { useNavigate } from 'react-router-dom';

import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input, LoginBox, LoginForm, LoginPageContainer, Title } from './styles';


type newLoginForm = {
  username: string;
  password: string;
}

export function LoginPage(){

  const { register, handleSubmit, formState: { errors } } = useForm<newLoginForm>();

  const onSubmit: SubmitHandler<newLoginForm> = data => console.log(data);

  const navigate = useNavigate();
  return (
    <LoginPageContainer>
      <LoginBox>
        <Title>Login</Title>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder='Enter com seu username...' {...register("username", { required: true })} />
        <Input placeholder='Digite sua senha...' type='password' {...register("password", { required: true })}/>
        <Button type='submit'>Entrar</Button>
        <Button onClick={() => navigate('/signup')} >Cadastre-se</Button>
        </LoginForm>
      </LoginBox>
    </LoginPageContainer>
  );
};

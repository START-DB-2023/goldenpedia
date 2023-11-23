import { Api } from "../axios.config";

export interface IUser {
    id: String,
    name: String,
    username: String,
    password: String
}

const createUser = async (user: Omit<IUser, 'id' >): Promise< string | Error> =>{
    try {
        const {data} = await Api.post(`/user`, user);

        if(data){
            return "Usuário cadastrado com sucesso!";
        }

        return new Error("Erro ao cadastrar usuário!");
    } catch (error) {
        return new Error((error as {message: string}).message || "Erro ao cadastrar usuário!");
    }
}

export const UserService = {
     createUser
}


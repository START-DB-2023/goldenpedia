import { Api } from "../axios.config";

export interface IWord {
    id: number,
    word: String,
    translation: String,
    status: String
}

const getById = async (id: number): Promise<IWord | Error> => {
    try {
        const { data } = await Api.get<IWord>(`/word?wordId=${id}`);

        if (data) {
            return data;
        }

        return new Error('Erro ao listar word');
    } catch (error) {
        return new Error((error as { message: string }).message || 'Erro ao listar word');
    }
};

const updateStatus = async (id: number, wordStatus: string): Promise<void | Error> => {
    try {
        await Api.put(`/words/updateStatus?wordId=${id}&status=${wordStatus}`);
    } catch (error) {
        return new Error((error as { message: string }).message || 'Erro ao listar Gold List');
    }
};

export const WordsService = {
    updateStatus,
    getById
}
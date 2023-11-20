import { Api } from "../axios.config";

export interface IWord {
    id: number,
    word: String,
    translation: String,
    status: String
}

const updateStatus = async (id: number, wordStatus: string): Promise<void | Error> => {
    try {
        await Api.put(`/word/updateStatus?wordId=${id}&status=${wordStatus}`);
    } catch (error) {
        return new Error((error as { message: string }).message || 'Erro ao listar Gold List');
    }
};

export const WordsService = {
    updateStatus
}
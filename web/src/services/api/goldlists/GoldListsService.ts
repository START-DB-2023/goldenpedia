import { Api } from "../axios.config";
import { IWord } from "../words/WordsService";

export interface IGoldList {
    id: number,
    name: String,
    description: String,
    words: IWord[],
    createdAt: Date
}

interface IGoldListsWithPagesInfo {
    goldlists: IGoldList[],
    last: Boolean,
    first: Boolean,
    totalElements: number,
    totalPages: number
}

const getAll = async (currentPage = 0, pageSize = 10): Promise<IGoldListsWithPagesInfo | Error> => {
    try {
        const { data } = await Api.get(`/goldlist/all?currentPage=${currentPage}&pageSize=${pageSize}`);

        if (data) {
            return {
                goldlists: data.content,
                last: data.last,
                first: data.first,
                totalElements: data.totalElements,
                totalPages: data.totalPages
            };
        }

        return new Error('Erro ao listar Gold Lists');
    } catch (error) {
        return new Error((error as { message: string }).message || 'Erro ao listar Gold Lists');
    }
};

const create = async (goldlist: Omit<IGoldList, 'id' | 'createdAt' | 'words.id' | 'words.status' | 'words.translation'>): Promise<number | Error> => {
    try {
        const { data } = await Api.post<IGoldList>(`/goldlist`, goldlist);

        if (data) {
            return data.id;
        }

        return new Error('Erro ao criar Gold List');
    } catch (error) {
        return new Error((error as { message: string }).message || 'Erro ao criar Gold List');
    }
};

const update = async (goldlist: IGoldList): Promise<void | Error> => {
    try {
        await Api.put(`/goldlist/updateGoldList`, goldlist);

        return new Error('Erro ao criar Gold List');
    } catch (error) {
        return new Error((error as { message: string }).message || 'Erro ao criar Gold List');
    }
}

const getById = async (id: number): Promise<IGoldList | Error> => {
    try {
        const { data } = await Api.get<IGoldList>(`/goldlist?goldListId=${id}`);

        if (data) {
            return data;
        }

        return new Error('Erro ao listar Gold List');
    } catch (error) {
        return new Error((error as { message: string }).message || 'Erro ao listar Gold List');
    }
};

const getWords = async (id: number, wordStatus: string = ''): Promise<IWord[] | Error> => {
    try {
        let url = wordStatus ? `/goldlist/words?goldListId=${id}&wordStatus=${wordStatus}`
            : `/goldlist/words?goldListId=${id}`;

        const { data } = await Api.get<IWord[]>(url);

        if (data) {
            return data;
        }

        return new Error('Erro ao listar Gold Lists');
    } catch (error) {
        return new Error((error as { message: string }).message || 'Erro ao listar Gold Lists');
    }
};

export const GoldListsService = {
    getAll,
    create,
    update,
    getById,
    getWords
};
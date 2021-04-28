import { useState, useEffect } from 'react';
import { reqResApi } from '../../api/reqRes';

interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface Api {
    page: number;
    total: number;
    total_pages: number;
}
export interface ResponseAPI {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Datum[];
    support:     Support;
}

export interface Datum {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}

type TypeAction =
    | { type: 'back', page: number }
    | { type: 'next', page: number }
export const useUser = () => {
    const [state, setState] = useState<{ loading: boolean, users: User[], apiData: Api }>({ loading: true, users: [], apiData: { page: 0, total: 0, total_pages: 0 } });

    const loadUsers = async () => {
        const response = await reqResApi.get<ResponseAPI>('/users');
        const { data: users, page, total, total_pages } = response.data;
        setTimeout(() => {
            setState({
                loading: false,
                users,
                apiData: {
                    page,
                    total,
                    total_pages
                }
            });
        }, 1000);
    }

    const loadPage = async (pageNumber: number) => {
        setState({
            loading: true, users: [], apiData: {
                page: 0,
                total: 0,
                total_pages: 0
            }
        });
        const response = await reqResApi.get<ResponseAPI>(`users?page=${pageNumber}`);
        const { data: users, page: page, total, total_pages } = response.data;
        setTimeout(() => {
            setState({
                loading: false, users,
                apiData: {
                    page,
                    total,
                    total_pages
                }
            })
        }, 1000);
    }

    const changePage = (action: TypeAction) => {
        (action.type === 'back') ? loadPage(action.page - 1) : loadPage(action.page + 1);
    }

    useEffect(() => {
        loadUsers();
    }, [])

    return {
        loading: state.loading,
        users: state.users,
        apiData: state.apiData,
        changePage
    }
}
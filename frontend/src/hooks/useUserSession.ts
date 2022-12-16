const useUserSession = () => {
    const KEY = 'token';

    const saveToken = (token: string): void => {
        sessionStorage.setItem(KEY, token);
    }

    const getToken = (): string | null => {
        return sessionStorage.getItem(KEY);
    }

    const deleteToken = (): void => {
        sessionStorage.removeItem(KEY);
    }

    return {
        saveToken,
        getToken,
        deleteToken
    }
}

export default useUserSession;
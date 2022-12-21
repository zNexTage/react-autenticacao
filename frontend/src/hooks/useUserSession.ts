const useUserSession = () => {
    //Token key in session storage
    const KEY = 'token';

    /**
     * Save token in session storage
     * @param token 
     */
    const saveToken = (token: string): void => {
        sessionStorage.setItem(KEY, token);
    }

    /**
     * Get the token from session storage
     * @returns
     */
    const getToken = (): string | null => {
        return sessionStorage.getItem(KEY);
    }

    /**
     * Remove token from session storage
     */
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
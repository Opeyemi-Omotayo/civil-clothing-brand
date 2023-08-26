import { useState, useCallback, useEffect } from 'react';

let logoutTimer: ReturnType<typeof setTimeout>;

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState<Date | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const login = useCallback((uid: string, token: string, expirationDate: Date) => {
    setToken(token);
    setUserId(uid);
    setTokenExpirationDate(expirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: expirationDate.toISOString()
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem('userData');
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedDataString = localStorage.getItem('userData');
    if (storedDataString) {
      const storedData = JSON.parse(storedDataString) as {
        userId: string;
        token: string;
        expiration: string;
      };
      if (
        storedData &&
        storedData.token &&
        new Date(storedData.expiration) > new Date()
      ) {
        login(storedData.userId, storedData.token, new Date(storedData.expiration));
      }
    }
  }, [login]);

  return { token, login, logout, userId };
};

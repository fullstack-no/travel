import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { config } from "utils/config";

type AuthState = {
  isLoading: boolean;
  loggedIn?: boolean;
  user?: {
    id: string;
    username: string;
    age: number;
    role: "User" | "Admin";
  };
};

const initialValue: AuthState = {
  isLoading: false,
};

export const authContext = createContext(
  null as unknown as { auth: AuthState; setAuth: Function }
);

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState(initialValue);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      fetch(config.server_url + "/auth/info", {
        method: "get",
        headers: {
          Accept: "application/json",
          Authrorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ token }),
      })
        .then((res) => res.json())
        .then((data) => {
          setAuth({
            isLoading: false,
            loggedIn: data.loggedIn,
            user: data.user,
          });
        })
        .catch((error) => {
          const refresh = localStorage.getItem("refresh_token");
          fetch(config.server_url + "/auth/refresh-token", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ token: refresh }),
          })
            .then((res) => {
              if (!res.ok) {
                toast("refresh token expired", { type: "warning" });

                return;
              }

              return res.json();
            })
            .then((data) => {
              if (!data.access_token) {
                toast("get refresh token failed", { type: "error" });
                return;
              }
              localStorage.setItem("access_token", data.access_token ?? "");
              localStorage.setItem("refresh_token", data.refresh_token ?? "");

              fetch(config.server_url + "/auth/info", {
                method: "get",
                headers: { Authorization: `Bearer ${data.access_token}` },
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.loggedIn) setAuth(data);
                  else setAuth({ loggedIn: false, isLoading: false });
                })
                .catch((error) => {
                  setAuth({ ...auth, loggedIn: false, isLoading: false });
                });
            })
            .catch((error) => {
              setAuth({ ...auth, loggedIn: false });
            });
        });
    } else {
      setAuth({ ...auth, loggedIn: false });
      setAuth((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

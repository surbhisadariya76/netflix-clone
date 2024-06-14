import { useEffect, useState } from "react";

export function useAuthentication(AuthenticationEmailAndPassword) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { email, password } = AuthenticationEmailAndPassword;
  useEffect(() => {
    function checkAuth() {
      const LoginEmail = "sagar@gmail.com";
      const LoginPassword = "123456";
      if(LoginEmail=== email && LoginPassword===password){
        setIsAuthenticated(true)
      }else{
        setIsAuthenticated(false)
      }
    }
    if (email && password) checkAuth();
  }, [email, password ]);

  return isAuthenticated;
}

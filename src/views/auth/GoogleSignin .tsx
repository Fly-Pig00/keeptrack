// /components/GoogleAuth.tsx
import { useState } from "react";
//import axios, { AxiosResponse } from "axios";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";

interface AuthResponse {
  token: string;
  user: User;
}

interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

const GoogleSignin  = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const responseGoogle = (response: any) => {
    console.log(response);
  }

  return (
    <GoogleLogin
      clientId="637870408143-u50cpqnlnpd02bt42pmneo3tg4imn72n.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignin ;


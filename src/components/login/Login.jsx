import React from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { getToken } from "./securityService";
import axios from "axios";

export default function Login() {
  const authToken = getToken();

  // Obtiene el token JWT almacenado en localStorage (asegúrate de haberlo guardado previamente)
  // const authToken = localStorage.getItem("authToken");

  // console.log("token", authToken);

  console.log("token", authToken);

  // Configura el encabezado Authorization con el token JWT
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log(credentialResponse);

    // Verificar si existe la propiedad "credential"
    if (credentialResponse && credentialResponse.credential) {
      axios
        .post("http://localhost:8080/auth/googleAuth", {
          tokenId: credentialResponse.credential,
        })
        .then((res) => {
          // Guarda el token JWT u otra respuesta del backend
          console.log("RES", res);
          localStorage.setItem("authToken", res.data.token);
        })
        .catch((error) => {
          console.error("Error al autenticar con Google en el backend:", error);
        });
    } else {
      console.error("Fallo en la autenticación de Google:", credentialResponse);
    }
  };

  function adminRestricted() {
    axios
      .get("http://localhost:8080/admin/restricted", { headers })
      .then((response) => {
        console.log("Respuesta exitosa:", response.data);
        // Aquí puedes manejar la respuesta del endpoint protegido
      })
      .catch((error) => {
        console.error("Error al acceder al endpoint protegido:", error);
        // Aquí puedes manejar errores, como el acceso no autorizado (status 401)
      });
  }

  function checkToken() {
    handleTokenExpiration(authToken);

    axios
      .get("http://localhost:8080/admin/restricted", { headers })
      .then((response) => {
        console.log("Respuesta exitosa:", response.data);
        // Aquí puedes manejar la respuesta del endpoint protegido
      })
      .catch((error) => {
        console.error("Error al acceder al endpoint protegido:", error);
        // Aquí puedes manejar errores, como el acceso no autorizado (status 401)
      });
  }

  function saludoUsuario() {
    axios
      .get("http://localhost:8080/user/saludo", { headers })
      .then((response) => {
        console.log("Respuesta exitosa:", response.data);
        // Aquí puedes manejar la respuesta del endpoint protegido
      })
      .catch((error) => {
        console.error("Error al acceder al endpoint protegido:", error);
        // Aquí puedes manejar errores, como el acceso no autorizado (status 401)
      });
  }

  function saludoVendedor() {
    axios
      .get("http://localhost:8080/vendedor/saludo")
      .then((response) => {
        console.log("Respuesta exitosa:", response.data);
        // Aquí puedes manejar la respuesta del endpoint protegido
      })
      .catch((error) => {
        console.error("Error al acceder al endpoint protegido:", error);
        // Aquí puedes manejar errores, como el acceso no autorizado (status 401)
      });
  }

  function saludoVendedor2() {
    axios
      .get("http://localhost:8080/vendedor/saludo", { headers })
      .then((response) => {
        console.log("Respuesta exitosa:", response.data);
        // Aquí puedes manejar la respuesta del endpoint protegido
      })
      .catch((error) => {
        console.error("Error al acceder al endpoint protegido:", error);
        // Aquí puedes manejar errores, como el acceso no autorizado (status 401)
      });
  }

  // Función para verificar si un token JWT ha expirado
  function isTokenExpired(token) {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const expirationTime = payload.exp * 1000; // Convertir a milisegundos
    return Date.now() > expirationTime;
  }

  // Función para manejar la expiración del token
  function handleTokenExpiration(token) {
    if (isTokenExpired(token)) {
      // Cerrar sesión y redirigir al inicio de sesión
      // logoutUser();
      console.log("Token vencido");
    } else {
      console.log("No se venció aun");
    }
  }

  // Función para cerrar la sesión del usuario
  function logoutUser() {
    // Borrar el token y cualquier otro dato de sesión
    localStorage.removeItem("authToken");
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "/login";
  }

  return (
    <>
      <Typography>Login</Typography>
      <Divider sx={{ mt: 3, mb: 5 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <GoogleOAuthProvider clientId="86131853653-nus62a260i6knr4u2jc9lkprit9s7uur.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
          </GoogleOAuthProvider>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 10, mb: 10 }} />
      <Button
        variant="contained"
        size="large"
        sx={{ mr: 1 }}
        color="warning"
        onClick={() => {
          adminRestricted();
        }}
      >
        Admin Restricted
      </Button>
      <Button
        variant="contained"
        size="large"
        sx={{ mr: 1 }}
        color="primary"
        onClick={() => {
          saludoUsuario();
        }}
      >
        Saludo Usuario
      </Button>
      <Button
        variant="contained"
        size="large"
        sx={{ mr: 1 }}
        color="success"
        onClick={() => {
          saludoVendedor();
        }}
      >
        Saludo vendedor - no auth
      </Button>
      <Button
        variant="contained"
        size="large"
        sx={{ mr: 1 }}
        color="error"
        onClick={() => {
          saludoVendedor2();
        }}
      >
        Saludo malformed
      </Button>
      <Button
        variant="contained"
        size="large"
        sx={{ mr: 1 }}
        color="warning"
        onClick={() => {
          checkToken();
        }}
      >
        Check token con Admin
      </Button>
    </>
  );
}

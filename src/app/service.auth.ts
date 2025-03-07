import { Injectable } from '@angular/core';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool
} from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_e5ynbTv2e', // Reemplaza con tu User Pool ID
  ClientId: 'on1m39rgc1lqefvua2tf5vs34'   // Reemplaza con tu App Client ID
};

const userPool = new CognitoUserPool(poolData);

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() {}

  // Registrar usuario
  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      const attributeList = [
        new CognitoUserAttribute({ Name: 'email', Value: email })
      ];

      userPool.signUp(email, password, attributeList, [], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  // Iniciar sesión
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      const authenticationDetails = new AuthenticationDetails({
        Username: email,
        Password: password
      });

      const userData = {
        Username: email,
        Pool: userPool
      };

      const cognitoUser = new CognitoUser(userData);

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: session => resolve(session),
        onFailure: err => reject(err)
      });
    });
  }

  // Cerrar sesión (modificado para devolver una promesa)
  logout(): Promise<void> {
    return new Promise((resolve, reject) => {
      const cognitoUser = userPool.getCurrentUser();
      if (cognitoUser) {
        cognitoUser.signOut();
        resolve(); // Promesa resuelta cuando se cierra sesión
      } else {
        reject('No user logged in');
      }
    });
  }
}

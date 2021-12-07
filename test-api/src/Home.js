import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";


// Archivos importados para páginas personalizadas
 import NavBar from './components/NavBar/NavBar';
 import {BrowserRouter,Route,Routes} from 'react-router-dom'
 import InvoiceDetail from './components/Invoices/InvoiceDetail'
 import Form from './components/Form/Form'



const Home = () => {
    const { instance } = useMsal();
    const { accounts } = useMsal();
    //in case you need to access the userinfo for further processing
    //console.log(accounts);
    //console.log(accounts[0]?.username);

    return (
        <>
            <UnauthenticatedTemplate>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <button onClick={() => instance.loginRedirect(loginRequest)}>
                            Login
                        </button>
                    </header>
                </div>
            </UnauthenticatedTemplate>

            <AuthenticatedTemplate>
  

                <BrowserRouter>
   <NavBar instance={instance} />
<Routes>
<Route path="/" element={<h1 style={{textAlign: 'center',  margin: 50}}>Gestión de clientes</h1>} />

    <Route path='/invoices' element={<InvoiceDetail/>}/>
    <Route path='/formulario' element={<Form/>}/>
   
   
</Routes>
    </BrowserRouter>
  
                {/* <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        
                        <p>
                            Hello {accounts[0]?.localAccountId}! 
                            </p>
                            <p>
                            Hello {accounts[0]?.homeAccountId}! 
                            </p>

                            <p>
                            Hello {accounts[0]?.username}! 
                            </p>
                       
                        

                        <button onClick={() => instance.logoutRedirect({ postLogoutRedirectUri: "/" })}>
                            Logout
                        </button>
                    </header>
                </div> */}
            </AuthenticatedTemplate>
        </>
    )
}

 
export default Home;
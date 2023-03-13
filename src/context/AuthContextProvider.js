import React, { createContext } from "react";
export const AuthContext = createContext();
// const {Provider}=createContext()
const AuthContextProvider = ({ children }) => {
  const values = { currentUser: { displayName: "Rose" } };

  const createUser=async(email,password)=>{
    try{
        let userCreadential=await createUserWithEmailAndPassword(auth, email, password)
    }catch(err){
        console.log(err)
    }
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

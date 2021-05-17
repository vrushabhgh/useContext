import React, { useState } from "react";

let UserContext=React.createContext();

export default UserContext;
 export const UserProvider = ({children}) => {
     let [userList,setuserList]= useState([]);
     let [produtList,setprodutList]=useState([]);
     return <UserContext.Provider value={{userList,setuserList,produtList,setprodutList}} >
         {children}
     </UserContext.Provider>

 }
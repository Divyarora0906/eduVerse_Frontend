import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});
export const UserProvider=({children})=>{
 const [user,setuser]=useState();

 return(

      <UserContext.Provider value={{user,setuser}}>
        <div>
        {children}
        </div>
      </UserContext.Provider>
 )
}
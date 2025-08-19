import React from "react";
import UserContext from "./usercontext";

const ContextProvider = ({children}) => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <UserContext.Provider value={{ toggleMenu, setToggleMenu }}>
          {children}
        </UserContext.Provider>
    );
};

export default ContextProvider;

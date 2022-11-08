import React, { useState } from "react";
import Collection from "./components/data";

export const PageContext = React.createContext({

  collection: Collection



});

export const ProviderAPI = (props) => {


    const [collection,setCollection] = useState(Collection)


  return (
    <PageContext.Provider
      value={{
        collection,setCollection

      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

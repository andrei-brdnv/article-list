import { createContext } from "react";

const { Provider, Consumer } = createContext({
    contextUserName: ''
})

export { Provider, Consumer }
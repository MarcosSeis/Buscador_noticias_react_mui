import { useContext } from "react";
import NoticiasContext from "../context/noticiasProvider";

const useNoticias = () => {
    return useContext(NoticiasContext)
}

export default useNoticias

import { useCallback, useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useModel(modelName: string) {

    const { registerModel, unregisterModel, getModelByName } = useContext
        (ModelsContext)

    useEffect(() => () => unregisterModel(modelName), [
        modelName,
        unregisterModel

    ])
    //Essa funcao so serve para retornar o  model que o usario ja especificou
    const getModel = useCallback(() => getModelByName(modelName), [
        getModelByName,
        modelName
    ])

    return {
        registerModel,
        getModel
    }

}
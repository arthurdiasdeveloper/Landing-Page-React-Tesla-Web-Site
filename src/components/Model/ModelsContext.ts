import React, { ReactNode } from 'react'


//Porque todo carro nescessita ter essas caracteristicas da interface?
export interface CarModel {
    //Todo carro precisa ter um model name porque todo carro possui um modelo
    modelName: string
    //Permite linkar o over lay a nossa section. (se nos temos sete carros para mostrar, cada carro precisa ter sua propria overlay)
    overlayNode: ReactNode
    //Cada modelo de carro reflete em uma nova section. La classe section, observamos que cada modelo de carro cria uma nova section.
    sectionRef: React.RefObject<HTMLElement>
}

interface ModelsContext {
    //Referencia do wrapper que temos por volta da aplicacao.
    wrapperRef: React.RefObject<HTMLElement>
    //RegisteredModels, permiete criar o array de modelos de carros.
    registeredModels: CarModel[]
    //Permite receber o modelo do carro.
    registerModel: (model: CarModel) => void
    //unregiterModel permite deletar o carro da lista!
    unregisterModel: (modelName: string) => void
    //Para o desenvolvedor receber o carro pelo nome.
    getModelByName: (modelName: string) => CarModel | null
}


export default React.createContext<ModelsContext>({} as ModelsContext)
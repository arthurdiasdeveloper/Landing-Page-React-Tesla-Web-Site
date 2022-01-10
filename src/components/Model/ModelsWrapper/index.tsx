import React, { useCallback, useRef, useState } from 'react';

import  ModelOverlay from '../ModelOverlay'

import {
  Container,
  OverlayRoot

} from './styles';



import ModelsContext, { CarModel } from '../ModelsContext';
const ModelsWrapper: React.FC = ({ children }) => {
  //Tudos os metodos que foi estipulado na classe ModelsContext, devo
  //criar aqui dentro. 
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])
  //Assim, temoes um modelo novo adicionado dentro dos estados.
  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [...state, model])
  }, [])

  //Para retirar o modelo, precisamos do unregissterModel(Metodo para retirar o modelo do carro).
  const unregisterModel = useCallback((modelName: string) => {
    //O retorno dessa funcao e void, o que temos que fazer e remover
    //do estado.
    setRegisteredModels(state => state.filter(model => model.modelName === modelName))
  }, [])

  const getModelByName = useCallback((modelName: string) => {
    return registeredModels.find(item => item.modelName === modelName) || null

  },
    [registeredModels])

  return (
    <ModelsContext.Provider value={{
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getModelByName
    }}>
      <Container ref={wrapperRef}>
        <OverlayRoot>
          {registeredModels.map(item => (
            <ModelOverlay key={item.modelName}model={item}>{item.overlayNode}</ModelOverlay>
          ))}

        </OverlayRoot>


        {children}
      </Container>
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;


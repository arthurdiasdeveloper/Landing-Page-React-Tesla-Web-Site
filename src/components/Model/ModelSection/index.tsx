import React, { useEffect, useRef } from 'react';
import useModel from '../useModel';

import { Container } from './styles';

interface Props extends  React.HtmlHTMLAttributes<HTMLDivElement>{
  modelName: string
  overlayNode: React.ReactNode
}

const ModelSection: React.FC <Props>= ({modelName, overlayNode, children, ...Props}) => {

  const { registerModel } = useModel(modelName)

  const sectionRef = useRef<HTMLDivElement>(null)

  //Quando a funcao dentro do useEffecs for disparada ele ja vai cadastar o modelo na hora.
  useEffect(() => {

    if(sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef
      })
    }


  }, [])

  return (
    <Container ref={ sectionRef }{...Props}> {children} </Container>
  );
};

export default ModelSection;

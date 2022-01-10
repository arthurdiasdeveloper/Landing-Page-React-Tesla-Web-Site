import React from 'react';

import { Container, Spacer } from './styles';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';


const Page: React.FC = () => {
  return (
    <Container>
      {/* Models Wrapper responsavel por envolver todas as fotos de carros */}
      <ModelsWrapper>
        <div>

          {/* MOdel Section responsavel por envolver cada tipo "modelo de carro" */}

            {[
                'Model One',
                'Model Two',
                'Model Three',
                'Model Four',
                'Model Five',
                'Model Six',
                'Model Seven',
               

            ].map(modelName=> (
              <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
  
            />
            ))}
         
        </div>
        <Spacer />
        <UniqueOverlay/>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;

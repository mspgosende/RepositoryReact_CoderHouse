import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

import ReactPlayer from "react-player";

import { getHistory } from '../../service/designer.service';
import { useAppContext } from '../../context/App.context';

const Details = () => {
  const [designerHistory, setdesignerHistory] = useState(null);
  const [designer, setDesigner] = useState(null);
  const {DESIGNERS} = useAppContext();
  let location = useLocation();

  // consumimos un fake service para traer la historia del tipx@
  useEffect(() => {
    // extraigo el id de la url
    let id = 0;
    const idArray = location.pathname.split('/');
    if(idArray.length === 3)
    id = idArray[2];
    
    const chosenDesigner = DESIGNERS.filter(designer => designer.id == id);
    //console.log(chosenDesigner)
    setdesignerHistory(getHistory(id)); //Pasale un id para traer la historia de un diseñador
    setDesigner(chosenDesigner);
  }, []);

  return (
    <div>
      <React.Fragment>
      {/* {designer &&
      <div>
        <ReactPlayer
                url={designer?.videoSrc}
                playing
                config={{
                  youtube: {
                    onUnstarted: () => console.log('si wacho, estoy andando mal')
                  }
                }}
         />
      </div> 
       }  */}
      </React.Fragment>
      {designerHistory && designerHistory.map(designer =>
        <React.Fragment>
          <section>
            <h2>{designer.title}</h2>
            <p>{designer.paragraph}</p>
          </section>
        </React.Fragment>
      )}
    </div>
  )
}

export default History;

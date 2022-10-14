import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { useAppContext } from '../../context/App.context';

const Home = () => {
    const {DESIGNERS} = useAppContext();
    useEffect(()=> {
      //console.log(DESIGNERS)
    },[]);

    return(
      <div>
        {DESIGNERS.map(designer =>
          <div key={designer.id}>
            <Link to={'/details/' + designer.id}>
              <Button>
                <img src={designer?.imageSrc}/>
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
}

export default Home;
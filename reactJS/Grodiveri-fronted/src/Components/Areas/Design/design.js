import React, {Component, Fragment} from 'react';
import SingleHeader from './../../SingleHeader/Header';

import './design.css';

class design extends Component{
    render(){
        return(
    <Fragment>
        <SingleHeader e={'Aréa Diseño Grafico'}/>
        <section className="team-skills section-sm" id="skills">
          <div className="container">
            <div className="row">
              <div className="title text-center">
                <h2>Que ofrecemos</h2>
                <p>
                  Somos una empresa que se compone por varias aréas y en cada una de ellas se compone por otrás
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
      )
    }
}

export default design;

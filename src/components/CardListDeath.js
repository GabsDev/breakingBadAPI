import React from 'react';
import CardDeath from "./CardDeath";

const CardListDeath =  ({visibleDeaths, deaths}) => {
    return (
        <div>
            {
                deaths.slice(0,visibleDeaths).map((death, i) => {
                    return (<CardDeath key={deaths[i].death_id}
                                       death={deaths[i].death}
                                       cause={deaths[i].occupaticauseon}
                                       responsible={deaths[i].responsible}
                                       last_words={deaths[i].last_words}/>
                    );
                })
            }
        </div>
    );
}

export default CardListDeath;
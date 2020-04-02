import React from 'react';
import Card from "./Card";

const CardList = ({visible, characters}) => {
    return (
        <div>
            {
                characters.slice(0,visible).map((character, i) => {
                    return (<Card key={characters[i].char_id}
                                  name={characters[i].name}
                                  occupation={characters[i].occupation}
                                  status={characters[i].status}
                                  birthday={characters[i].birthday}
                                  image={characters[i].img}
                                  portrayed={characters[i].portrayed}/>
                    );
                })
            }
        </div>
    );
}

export default CardList;
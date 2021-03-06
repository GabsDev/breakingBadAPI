import React from 'react';

const CardDeath = ({death,cause,responsible,last_words}) => {

    return (
        <article className="center mw5 mw5-ns br3 hidden ba b--black-10 mv4 dim">
            <h1 className="f4 bg-washed-green br3 br--top black-60 mv0 pv2 ph3">{death}</h1>
            <div className="pa3 bt b--black-10">
                <p className="f6 f5-ns lh-copy measure washed-yellow">
                    {cause}
                </p>
                <p className="f6 f5-ns lh-copy measure washed-yellow">
                    responsible: {responsible}
                </p>
                <p className="f6 f5-ns lh-copy measure washed-yellow">
                    last words: {last_words}
                </p>

            </div>
        </article>
    );
}

export default CardDeath;

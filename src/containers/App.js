import React, {Component} from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import Navigation from "../components/Navigation";
import CardListDeath from "../components/CardListDeath";

class App extends Component {
    constructor() {
        super()
        this.state = {
            visible: 6,
            visibleDeaths: 5,
            deaths: [],
            characters: [],
            searchField: '',

        }

        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        fetch('https://www.breakingbadapi.com/api/characters/')
            .then(response => response.json())
            .then(characters => this.setState({characters: characters}));

        fetch('https://www.breakingbadapi.com/api/deaths/')
            .then(response => response.json())
            .then(deaths => this.setState({deaths: deaths}));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }


    loadMore(){
        this.setState(() => {
            return {visible: this.state.visible + 3 }
        })
    }

    render() {
        const {characters, searchField, deaths, visible, visibleDeaths} = this.state;
        const filterCharacters = characters.filter(character => {
            return character.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        })

        return !characters.length ?
            <h1>Loading</h1> :
            (
                <div>
                    <Navigation/>
                    <div className="mw9 center ph3-ns">
                        <div className="cf ph2-ns">
                            <div className="fl w-100 w-60-ns pa2">
                                <div className="outline  pv4">
                                    <div className='tc'>
                                        <h1 className='f1'>Breaking Bad</h1>
                                        <h1 className='f1'>Characters</h1>
                                        <SearchBox searchChange={this.onSearchChange}/>
                                        <Scroll>
                                            <CardList visible={visible} characters={filterCharacters}/>
                                        </Scroll>
                                        <div className="ph3 mt4">
                                            {visible < characters.length &&
                                            <a onClick={this.loadMore} className="f6 link dim ba ph3 pv2 mb2 dib black"
                                               href="#0">More Characters</a>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fl w-100 w-40-ns pa2">
                                <div className="outline pv4">
                                    <div>
                                        <h1 className='f1'>Total Deaths</h1><p className='f1'>{deaths.length} </p>
                                            <CardListDeath  visibleDeaths={visibleDeaths} deaths={deaths}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            );
    }
}

export default App;
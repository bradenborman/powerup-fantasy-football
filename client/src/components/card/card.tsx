import React from 'react';

const Card: React.FC = () => {
    const fightingEnergy: string =
        'https://images.squarespace-cdn.com/content/v1/63477d5b22ce645aee564230/dc5391d6-c6ae-4099-a689-3260e2dac115/S2qyp1S.png';
    const normalEnergy: string =
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w4gu-bcf44127-7bc3-468d-b148-1af8cf4e7ac0.png/v1/fill/w_720,h_720/colorless_energy_by_humac1_d50w4gu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NGd1LWJjZjQ0MTI3LTdiYzMtNDY4ZC1iMTQ4LTFhZjhjZjRlN2FjMC5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.I2hRnHXhqZrAh05uX4UyxVC8C-iVQrj00LWU7nvS9C8';

    const lightningEnergy: string = "https://images.squarespace-cdn.com/content/v1/63477d5b22ce645aee564230/52fe4c75-e8db-44a8-9797-694c47b2f699/fBKUHcT.png"


    return (
        <div className="card-wrapper">
            <div className="pokemon-card">
                <div className="name-hp">
                    <h2 att-stage="Basic Pokémon">Pikachu</h2>
                    <div className='hp'>
                        <span>HP: 60</span>
                        <img className='type' src={lightningEnergy} alt="Lightning Energy" />
                    </div>
                </div>

                <div className='image-wrapper'>
                    <div className="image">
                        <img src="https://sportshub.cbsistatic.com/i/2021/08/09/5a5471ca-0865-47ab-8f46-c74173d2b540/base-set-pikachu-1275663.jpg" alt="Pokemon Image" />
                    </div>
                    <div className="composition-wrapper">
                        <div className="composition">
                            <span>Mouse Pokemon.</span>
                            <span>Height: 1'04"</span>
                            <span>Weight: 13.2 lbs</span>
                        </div>
                    </div>
                </div>
                <div className="attacks">
                    <div className="attack">
                        <p>
                            <span className="attack-name">Gnaw</span>
                        </p>
                        <span className="damage">20</span>
                    </div>
                    <div className="attack">
                        <p>
                            <span className="attack-name">Thunder Jolt</span>
                            <span className="effect">Flip a coin. If tails, Pikachu does 10 damage to itself.</span>
                        </p>
                        <span className="damage">30</span>
                    </div>
                </div>

                <div className="additional-info">
                    <div className="section weakness">
                        <h6>Weakness</h6>
                        <div className="image-group">
                            <img src={`${fightingEnergy}`} alt="Weakness 1" />
                        </div>
                    </div>
                    <div className="section resistance">
                        <h6>Resistance</h6>
                        <div className="image-group"></div>
                    </div>
                    <div className="section retreat-cost">
                        <h6>Retreat Cost</h6>
                        <div className="image-group">
                            <img src={`${normalEnergy}`} alt="Retreat Cost 1" />
                            <img src={`${normalEnergy}`} alt="Retreat Cost 2" />
                        </div>
                    </div>
                </div>

                <div className="pokedex-entry">
                    <p>
                        It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you.
                        <span className="level">LV. 12</span>
                        <span className="dex-number">#25</span>
                    </p>
                </div>
                <div className='rarity'>
                    <span>58 / 102</span>
                    <img src='https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/_tiles/sv/updates/inline/symbols/common.png' />
                </div>
            </div>

        </div>
    );
};

export default Card;

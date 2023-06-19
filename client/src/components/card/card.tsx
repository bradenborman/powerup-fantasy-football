import React from 'react';
import { getMessageSize } from './utilites/texthelper';

export enum Energy {
    Fighting = 'https://images.squarespace-cdn.com/content/v1/63477d5b22ce645aee564230/dc5391d6-c6ae-4099-a689-3260e2dac115/S2qyp1S.png',
    Normal = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w4gu-bcf44127-7bc3-468d-b148-1af8cf4e7ac0.png/v1/fill/w_720,h_720/colorless_energy_by_humac1_d50w4gu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NGd1LWJjZjQ0MTI3LTdiYzMtNDY4ZC1iMTQ4LTFhZjhjZjRlN2FjMC5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.I2hRnHXhqZrAh05uX4UyxVC8C-iVQrj00LWU7nvS9C8',
    Lightning = 'https://images.squarespace-cdn.com/content/v1/63477d5b22ce645aee564230/52fe4c75-e8db-44a8-9797-694c47b2f699/fBKUHcT.png',
    Fire = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w437-315a34c4-85c2-4d07-ae4d-6b42a25233bf.png/v1/fill/w_720,h_720/fire_energy_by_humac1_d50w437-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NDM3LTMxNWEzNGM0LTg1YzItNGQwNy1hZTRkLTZiNDJhMjUyMzNiZi5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.9MXJnu8IXMxIGYcRKIg-sfxBAcqfIptXg_uw_OqM3wo",
    Water = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77bf3ba9-0aac-4452-be82-de536b5aab32/dezrx5f-e4595600-3e33-4241-9b2b-74aaa2eef412.png/v1/fill/w_895,h_893/water_energy_card_vector_symbol_by_biochao_dezrx5f-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OCIsInBhdGgiOiJcL2ZcLzc3YmYzYmE5LTBhYWMtNDQ1Mi1iZTgyLWRlNTM2YjVhYWIzMlwvZGV6cng1Zi1lNDU5NTYwMC0zZTMzLTQyNDEtOWIyYi03NGFhYTJlZWY0MTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.7SbyLKwiuihvL8f8Xs5D301oKDuaS2kGu_fqIZAtWf4"

}

interface PokemonNameHPProps {
    name: string;
    hp: number;
    type: Energy;
    stage: string;
}

const PokemonNameHP: React.FC<PokemonNameHPProps> = ({ name, hp, type, stage }) => {
    return (
        <div className="name-hp">
            <h2 att-stage={stage}>{name}</h2>
            <div className='hp'>
                <span>HP: {hp}</span>
                <img className='type' src={type} alt="Energy Type" />
            </div>
        </div>
    );
};


interface PokemonImageProps {
    src: string;
}

const PokemonImage: React.FC<PokemonImageProps> = ({ src }) => {
    return (
        <div className='image-wrapper'>
            <div className="image">
                <img src={src} alt="Pokemon Image" />
            </div>
            <div className="composition-wrapper">
                <div className="composition">
                    <span>Mouse Pokemon.</span>
                    <span>Height: 1'04"</span>
                    <span>Weight: 13.2 lbs</span>
                </div>
            </div>
        </div>
    );
};

interface AttackProps {
    name: string;
    effect?: string;
    damage: number;
}

const Attack: React.FC<AttackProps> = ({ name, effect, damage }) => {
    const fontSize = getMessageSize(effect);

    return (
        <div className="attack">
            <p>
                <span className="attack-name">{name}</span>
                {effect && <span className="effect" style={{ fontSize }}>{effect}</span>}
            </p>
            <span className="damage">{damage}</span>
        </div>
    );
};

interface PokemonPowerProps {
    name: string;
    effect?: string;
}

const PokemonPower: React.FC<PokemonPowerProps> = ({ name, effect }) => {
    const fontSize = getMessageSize(effect);
    return (
        <div className="pokemonPower">
            <p>
                <span className="poke-power">Pokemon Power: {name}</span>
                <span className="effect" style={{ fontSize }}>{effect}</span>
            </p>
        </div>
    );
};

interface WeaknessProps {
    energy: Energy;
}

const Weakness: React.FC<WeaknessProps> = ({ energy }) => {
    return (
        <div className="section weakness">
            <h6>Weakness</h6>
            <div className="image-group">
                <img src={energy} alt="Weakness" />
            </div>
        </div>
    );
};
interface RetreatCostProps {
    energy: Energy;
    count: number;
}

const RetreatCost: React.FC<RetreatCostProps> = ({ energy, count }) => {
    const retreatCostImages = Array.from({ length: count }, (_, index) => (
        <img key={index} src={energy} alt={`Retreat Cost ${index + 1}`} />
    ));

    return (
        <div className="section retreat-cost">
            <h6>Retreat Cost</h6>
            <div className="image-group">
                {retreatCostImages}
            </div>
        </div>
    );
};
interface AttacksProps {
    children: React.ReactElement<AttackProps>[] | React.ReactElement<AttackProps>;
}

const Attacks: React.FC<AttacksProps> = ({ children }) => {
    const validChildren = Array.isArray(children) ? children : [children];

    if (!validChildren.every(child => child.type === Attack || child.type === PokemonPower)) {
        throw new Error('Attacks component only accepts Attack or PokemonPower components as children.');
    }

    return <div className="attacks">{validChildren}</div>;
};

interface ResistanceProps {
    type?: Energy;
    amount?: number;
}

const Resistance: React.FC<ResistanceProps> = ({ type, amount }) => {
    if (!type || !amount) {
        return (
            <div className="section resistance">
                <h6>Resistance</h6>
            </div>
        );
    }

    return (
        <div className="section resistance">
            <h6>Resistance</h6>
            <div className="content">
                <div className="image-group">
                    <img src={type} alt="Resistance" className="resistance-type" />
                    <span className="amount">-{amount}</span>
                </div>
            </div>
        </div>
    );
};


interface PokedexEntryProps {
    text: string;
    level: number;
    dexNumber: number;
}

const PokedexEntry: React.FC<PokedexEntryProps> = ({ text, level, dexNumber }) => {
    return (
        <div className="pokedex-entry">
            <p>
                {text}
                <span className="level">LV. {level}</span>
                <span className="dex-number">#{dexNumber}</span>
            </p>
        </div>
    );
};

const Card: React.FC = () => {

    const backgroundStyleYellow = "linear-gradient(180deg, #ffe96c, #FFE45C)";
    const backgroundStyleRed = "linear-gradient(180deg, #e96d3d, #d66234)";

    return (
        <div className="card-wrapper">
            <div className="pokemon-card" style={{ background: backgroundStyleYellow }}>
                <PokemonNameHP name='Pikachu' hp={60} type={Energy.Lightning} stage='Basic Pokémon' />
                <PokemonImage src='https://sportshub.cbsistatic.com/i/2021/08/09/5a5471ca-0865-47ab-8f46-c74173d2b540/base-set-pikachu-1275663.jpg' />
                <Attacks>
                    <Attack name="Gnaw" damage={20} />
                    <Attack name="Thunder Jolt" effect="Flip a coin. If tails, Pikachu does 10 damage to itself." damage={30} />
                </Attacks>
                <div className="additional-info">
                    <Weakness energy={Energy.Fighting} />
                    <Resistance />
                    <RetreatCost
                        energy={Energy.Normal}
                        count={1}
                    />
                </div>
                <PokedexEntry
                    text="It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you."
                    level={12}
                    dexNumber={25}
                />
                <div className='rarity'>
                    <span>58 / 102</span>
                    <img src='https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/_tiles/sv/updates/inline/symbols/common.png' alt="Rarity" />
                </div>
            </div>


            <div className="pokemon-card" style={{ background: backgroundStyleRed }}>
                <PokemonNameHP name='Charizard' hp={60} type={Energy.Fire} stage='Stage 2' />
                <PokemonImage src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2020/05/Charizard-Base-SEt-art-pkmn.jpg" />
                <Attacks>
                    <PokemonPower name='Enery Burn' effect='As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into {R} Energy for the rest of the turn. This power cant be used if Charizard is Asleep, Confused, or Paralyzed.' />
                    <Attack name="Fire Spin" effect="Discard 3 Enery cards attached to this Pokemon." damage={30} />
                </Attacks>
                <div className="additional-info">
                    <Weakness energy={Energy.Water} />
                    <Resistance type={Energy.Fighting} amount={20} />
                    <RetreatCost
                        energy={Energy.Normal}
                        count={3}
                    />
                </div>
                <PokedexEntry
                    text="It is said that Charizard’s fire burns hotter if it has experienced harsh battles."
                    level={76}
                    dexNumber={6}
                />
                <div className='rarity'>
                    <span>11 / 108</span>
                    <img src='https://cdn.pixabay.com/photo/2015/01/17/11/45/star-602148_1280.png' alt="Rarity" />
                </div>
            </div>
        </div>
    );
};

export default Card;

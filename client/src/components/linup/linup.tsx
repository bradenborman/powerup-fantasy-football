import React, { useState } from 'react';


interface Player {
    name: string;
    position: string;
    index?: number;
}

export const Linup: React.FC = () => {
    const [players, setPlayers] = useState<Player[]>([
        { name: 'Player 1', position: 'QB' },
        { name: 'Player 2', position: 'QB' },
        { name: 'Player 3', position: 'RB' },
        { name: 'Player 4', position: 'RB' },
        { name: 'Player 5', position: 'RB' },
        { name: 'Player 6', position: 'WR' },
        { name: 'Player 7', position: 'WR' },
        { name: 'Player 8', position: 'WR' },
        { name: 'Player 9', position: 'WR' },
        { name: 'Player 10', position: 'TE' },
        { name: 'Player 11', position: 'TE' }
        // Add more players as needed
    ]);
    const [lineup, setLineup] = useState<Player[]>([]);

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, player: Player) => {
        event.dataTransfer.setData('text/plain', player.name);
        event.currentTarget.classList.add('dragging');
    };

    const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
        event.currentTarget.classList.remove('dragging');
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>, position: string, index: number) => {
        event.preventDefault();
        const playerName = event.dataTransfer.getData('text/plain');
        const player = players.find(p => p.name === playerName);

        if (player && player.position === position) {
            const existingPlayer = lineup.find(item => item.position === position && item.index === index);

            if (existingPlayer) {
                // Spot is already occupied, do not allow the drop
                return;
            }

            const updatedLineup = [...lineup, { ...player, position, index }];
            const updatedPlayers = players.filter(p => p.name !== playerName);
            setPlayers(updatedPlayers);
            setLineup(updatedLineup);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleRemovePlayer = (player: Player) => {
        setLineup(prevLineup => prevLineup.filter(p => p !== player));
        setPlayers(prevPlayers => [...prevPlayers, player]);
    };

    const renderLineupSpot = (position: string, index: number) => {
        const playersInSpot = lineup.filter(
            (player) => player.position === position && player.index === index
        );

        if (playersInSpot.length > 0) {
            return (
                <div
                    key={`${position}-${index}`}
                    className="lineup-spot"
                    onDrop={(e) => handleDrop(e, position, index)}
                    onDragOver={handleDragOver}
                >
                    <div className="player-name">
                        <span>{playersInSpot[0].name}</span>
                        <button
                            className="remove-button"
                            onClick={() => handleRemovePlayer(playersInSpot[0])}
                        >
                            X
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div
                key={`${position}-${index}`}
                className="lineup-spot empty-spot"
                onDrop={(e) => handleDrop(e, position, index)}
                onDragOver={handleDragOver}
            ></div>
        );
    };


    return (
        <div id="app">
            <div className="players-container">
                <div className="position-group">
                    <div className="position-header">QB</div>
                    {players
                        .filter(player => player.position === 'QB')
                        .map(player => (
                            <div
                                key={player.name}
                                className="player"
                                draggable
                                onDragStart={e => handleDragStart(e, player)}
                                onDragEnd={handleDragEnd}
                            >
                                <div>{player.name}</div>
                                <div className="position">{player.position}</div>
                            </div>
                        ))}
                </div>
                <div className="position-group">
                    <div className="position-header">RB</div>
                    {players
                        .filter(player => player.position === 'RB')
                        .map(player => (
                            <div
                                key={player.name}
                                className="player"
                                draggable
                                onDragStart={e => handleDragStart(e, player)}
                                onDragEnd={handleDragEnd}
                            >
                                <div>{player.name}</div>
                                <div className="position">{player.position}</div>
                            </div>
                        ))}
                </div>
                <div className="position-group">
                    <div className="position-header">WR</div>
                    {players
                        .filter(player => player.position === 'WR')
                        .map(player => (
                            <div
                                key={player.name}
                                className="player"
                                draggable
                                onDragStart={e => handleDragStart(e, player)}
                                onDragEnd={handleDragEnd}
                            >
                                <div>{player.name}</div>
                                <div className="position">{player.position}</div>
                            </div>
                        ))}
                </div>
                <div className="position-group">
                    <div className="position-header">TE</div>
                    {players
                        .filter(player => player.position === 'TE')
                        .map(player => (
                            <div
                                key={player.name}
                                className="player"
                                draggable
                                onDragStart={e => handleDragStart(e, player)}
                                onDragEnd={handleDragEnd}
                            >
                                <div>{player.name}</div>
                                <div className="position">{player.position}</div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="lineup-container">
                <div className="position-group">
                    <div className="position-header">QB</div>
                    {renderLineupSpot('QB', 0)}
                </div>
                <div className="position-group">
                    <div className="position-header">RB</div>
                    {renderLineupSpot('RB', 0)}
                    {renderLineupSpot('RB', 1)}
                </div>
                <div className="position-group">
                    <div className="position-header">WR</div>
                    {renderLineupSpot('WR', 0)}
                    {renderLineupSpot('WR', 1)}
                    {renderLineupSpot('WR', 2)}
                </div>
                <div className="position-group">
                    <div className="position-header">TE</div>
                    {renderLineupSpot('TE', 0)}
                </div>
                {/* Add lineup spots for Kicker and Team Defense */}
            </div>
        </div>
    );
};
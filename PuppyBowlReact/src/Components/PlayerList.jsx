import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { API_URL, COHORT } from '../api/config';

function PlayerList({ searchQuery }) {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(`${API_URL}/${COHORT}/players`);
        const data = await response.json();
        setPlayers(data.data.players);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching players:', error);
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const handleDelete = async (playerId, playerCreatedBy) => {
    // Only allow deletion if the player was created by the current user
    if (playerCreatedBy !== 'YOUR_NAME') {
      alert('You can only delete players that you created!');
      return;
    }

    try {
      await fetch(`${API_URL}/${COHORT}/players/${playerId}`, {
        method: 'DELETE',
      });
      setPlayers(players.filter(player => player.id !== playerId));
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="player-grid">
      {filteredPlayers.map(player => (
        <div key={player.id} className="player-card">
          <img src={player.imageUrl} alt={player.name} className="player-image" />
          <h3>{player.name}</h3>
          <div className="player-actions">
            <Link to={`/players/${player.id}`} className="button">
              See Details
            </Link>
            <button
              onClick={() => handleDelete(player.id, player.createdBy)}
              className="button delete-button"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

PlayerList.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default PlayerList; 
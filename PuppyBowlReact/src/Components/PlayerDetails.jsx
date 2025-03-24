import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_URL, COHORT } from '../api/config';

function PlayerDetails() {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        const response = await fetch(`${API_URL}/${COHORT}/players/${id}`);
        const data = await response.json();
        setPlayer(data.data.player);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching player details:', error);
        setLoading(false);
      }
    };

    fetchPlayerDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!player) return <div>Player not found</div>;

  return (
    <div className="player-details">
      <img src={player.imageUrl} alt={player.name} className="player-detail-image" />
      <div className="player-info">
        <h2>{player.name}</h2>
        <p><strong>Breed:</strong> {player.breed}</p>
        <p><strong>Team:</strong> {player.team}</p>
        <p><strong>Status:</strong> {player.status}</p>
        <Link to="/" className="button">Back to Players</Link>
      </div>
    </div>
  );
}

export default PlayerDetails; 
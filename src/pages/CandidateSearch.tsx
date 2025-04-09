import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import { searchGithub } from '../api/API';


const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  // Fetch a random candidate when the component loads
  useEffect(() => {
    const fetchCandidate = async () => {
      const candidates = await searchGithub();
      if (candidates.length > 0) {
        setCandidate(candidates[0]); // Display the first candidate
      } else {
        setCandidate(null); // No candidates available
      }
    };

    fetchCandidate();
  }, []);

  // Save the candidate to localStorage and fetch the next one
  const handleSave = () => {
    if (candidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidate]));
      fetchNextCandidate();
    }
  };

  // Skip the current candidate and fetch the next one
  const handleReject = () => {
    fetchNextCandidate();
  };

  // Fetch the next candidate
  const fetchNextCandidate = async () => {
    const candidates = await searchGithub();
    if (candidates.length > 0) {
      setCandidate(candidates[0]);
    } else {
      setCandidate(null); // No more candidates available
    }
  };

  if (!candidate) {
    return <p className="no-candidates">No more candidates available.</p>;
  }

  return (
    <div className="candidate-card">
      <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} className="avatar" />
      <h2>{candidate.name} ({candidate.login})</h2>
      <p>Location: {candidate.location}</p>
      <p>Email: <a href={`mailto:${candidate.email}`}>{candidate.email}</a></p>
      <p>Company: {candidate.company}</p>
      <p>Bio: {candidate.bio || "No bio available."}</p>
      <div className="buttons">
        <button className="reject" onClick={handleReject}>-</button>
        <button className="save" onClick={handleSave}>+</button>
      </div>
    </div>
  );
};

export default CandidateSearch;
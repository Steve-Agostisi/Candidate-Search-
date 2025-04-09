import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  // [variableData, methodToUpdate] = useState(initialValue)
  const [saved, setSaved] = useState<Candidate[]>([]); // Initialize state to hold saved candidates

  // useEffect is used to perform side effects in function components
  useEffect(() => { 
    // let's grab the saved canadidate (data) from the local storage
    const savedCandidates = localStorage.getItem('savedCandidates');
    console.log("data: ", savedCandidates);  // [{ "login": "octocat", "id": 1, ... }]
    console.log("type: ", typeof savedCandidates);  // string
    // let parse the data 
    const parsedData = JSON.parse(savedCandidates || '[]' );
    setSaved(parsedData); // Update the state with the parsed dat
   },[])

  return (
    <>
      <h1>Potential Candidates</h1>
      { saved ? saved.map(item => (
        <div>
          <h2>{item.login}</h2>
          <p>{item.name}</p>
          <p>{item.location}</p>
          <p>{item.email}</p>
          <p>{item.company}</p>
          <p>{item.bio}</p>
        </div>
      )) : <h2>No candidates available</h2> }
    </>
  );
};

export default SavedCandidates;

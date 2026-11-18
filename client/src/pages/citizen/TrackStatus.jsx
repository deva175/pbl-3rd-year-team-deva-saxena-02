import { useState } from 'react';

export default function TrackStatus() {
  const [id, setId] = useState('');
  const [status, setStatus] = useState(null);

  const checkStatus = () => {
    if(!id) return alert('Enter Complaint ID');
    setStatus({
      id: id,
      title: 'Street Light Not Working',
      state: 'In Progress',
      updated: '18 Nov 2026'
    });
  };

  return (
    <div style={{padding:'20px', maxWidth:'500px', margin:'auto'}}>
      <h2>Track Your Complaint</h2>
      <input 
        value={id} 
        onChange={(e)=>setId(e.target.value)}
        placeholder="Enter Complaint ID e.g. CMP-101"
        style={{width:'100%', padding:'10px', margin:'10px 0'}}
      />
      <button onClick={checkStatus} style={{padding:'10px 20px', background:'#1e3a8a', color:'white', border:'none', borderRadius:'5px'}}>
        Track Status
      </button>

      {status && (
        <div style={{marginTop:'20px', background:'white', padding:'15px', borderRadius:'10px', boxShadow:'0 2px 8px rgba(0,0,0,0.1)'}}>
          <h3>{status.title}</h3>
          <p>ID: {status.id}</p>
          <p>Status: <b>{status.state}</b></p>
          <p>Last Updated: {status.updated}</p>
        </div>
      )}
    </div>
  );
}
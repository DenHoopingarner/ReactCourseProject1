function App() {
  const title = 'Dennie is King!';
  const body = "And here's why:";
  const reasons = [
    { id: 1, reason: 'smart' },
    { id: 3, reason: 'funny' },
    { id: 2, reason: 'rich' },
    { id: 4, reason: 'tall' },
  ];
  return (
    <>
      <h1>{title}</h1>
      <p>
        {body} ({reasons.length})
      </p>
      <ol>
        {reasons.map((reason, idx) => (
          <li key={idx}>{reason.reason}</li>
        ))}
      </ol>
    </>
  );
}

export default App;

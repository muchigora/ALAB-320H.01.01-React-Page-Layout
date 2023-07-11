import Homepage from './Homepage';

function App() {
  
  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'row',
      margin: "10%",
      border: '3px solid'
    }}>
      <div className="left-column" style={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
      }}>
      <Homepage className="directory" />
      </div>
      <div className="right-column" style={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
      }}>
      <Homepage className="employee" />
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react'
import Graph from './Graphs';
import './App.css';

function App() {

  const data = {
    "Elon Musk": {
      "Agrégat": "500 milliards",
      "Trésorerie": "200 milliards",
      "Immobilisations": "300 milliards",
      "Obligations": "50 milliards"
    },
    "Bill Gates": {
      "Agrégat": "250 milliards",
      "Trésorerie": "100 milliards",
      "Immobilisations": "120 milliards",
      "Obligations": "30 milliards"
    },
    "Oprah Winfrey": {
      "Agrégat": "50 milliards",
      "Trésorerie": "20 milliards",
      "Immobilisations": "25 milliards",
      "Obligations": "5 milliards"
    }
  }


  const [selectedCelebrity, setSelectedCelebrity] = useState("Elon Musk");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    "Agrégat": true,
    "Trésorerie": true,
    "Immobilisations": true,
    "Obligations": true
  });


  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedCheckboxes(prevState => ({
      ...prevState,
      [name]: checked
    }));
  }



  return (
    <div className="container">
      <div className="left-pane">
        <div className="card">
          <div className="line">
            <label htmlFor="celebrities">Patrimoine</label>
            <select
              id="celebrities"
              value={selectedCelebrity}
              onChange={(e) => setSelectedCelebrity(e.target.value)}
            >
              <option value="Elon Musk">Elon Musk</option>
              <option value="Bill Gates">Bill Gates</option>
              <option value="Oprah Winfrey">Oprah Winfrey</option>
            </select>
          </div>

          <div className="line checkbox-group">
            {Object.keys(selectedCheckboxes).map((key) => (
              <div className="checkbox-item" key={key}>
                <input
                  type="checkbox"
                  name={key}
                  checked={selectedCheckboxes[key]}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={key}>{key}</label>
              </div>
            ))}
          </div>

          <div className="third_line">
            <label htmlFor="from">De:</label>
            <input  type="date" id="from" name="from" />
            <label  htmlFor="to">à</label>
            <input  type="date" id="to" name="to" />
          </div> 
        </div>
        <div className="card card_infos">
          <h3>Informations de {selectedCelebrity}</h3>
          <ul>
          {selectedCheckboxes["Agrégat"] && <li>Agrégat: {data[selectedCelebrity]?.["Agrégat"] || "N/A"}</li>}
            {selectedCheckboxes["Trésorerie"] && <li>Trésorerie: {data[selectedCelebrity]?.["Trésorerie"] || "N/A"}</li>}
            {selectedCheckboxes["Immobilisations"] && <li>Immobilisations: {data[selectedCelebrity]?.["Immobilisations"] || "N/A"}</li>}
            {selectedCheckboxes["Obligations"] && <li>Obligations: {data[selectedCelebrity]?.["Obligations"] || "N/A"}</li>}
          </ul>  
      </div>
    </div>  
    <div className="right-pane">
        <Graph data={data} />
    </div>
  </div>
  );
}

export default App;

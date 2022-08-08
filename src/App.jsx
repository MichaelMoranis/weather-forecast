import React, {useState} from "react"

function App() {
  const [city, setCity] = useState("cascavel");
  const [weatherforecast, setWeatherforecast] = useState(null);

  const handleChange = (e) => {
    setCity(e.target.value)
  }
  const handleSeach = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=5c7280c2bbb24def8ac112252220808&q=${city}&lang=pt`)
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
       console.log(data)
       setWeatherforecast(data)
    });
  }
  return (
    <div>
     <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a className="navbar-brand text-white" href="top">
        M.M previsao do tempo
      </a>
     </nav>
     <main className="container">
       <div className="jumbotron">
          <h2>Saiba a previsão do tempo</h2>
          <p className="lead">Digite o nome da sua cidade no campo abaixo, depois clique em pesquisar</p>
          <div className="row mb-4">
            <div className="col-md-6">
              <input 
              className="form-control"
              value={city}
              onChange={handleChange}
              />
          </div>
          </div>
          <button 
          onClick={handleSeach}
          className="btn btn-primary btn-lg">
            pesquisar
          </button>
            {
              weatherforecast ? (
                <div>
                <div className="mt-4 d-flex align-items-center">
                  <div>
                    <img alt="img" src={weatherforecast.current.condition.icon}/>
                  </div>
                  <div>
                    <h3>Clima: {weatherforecast.current.condition.text}</h3>
                    <p className="lead">temperatura: {weatherforecast.current.temp_c}.C</p>
                  </div>
                </div>
              </div>
              ) : null}
       </div>
     </main>
    </div>
  );
}

export default App;

import BackgroundContainer from '../components/backgroundContainer';
import '../style/main.css'
import { Helmet } from 'react-helmet';
import MainPage from '../components/mainPage';



function App() {


  return (

    <div className="App">
      <Helmet><meta name="viewport" content="initial-scale=0.66, user-scalable=no" />
        <title>Cairosmoke</title>
      </Helmet>
      <BackgroundContainer>
        <MainPage></MainPage>
      </BackgroundContainer>
    </div>
  );
}

export default App;

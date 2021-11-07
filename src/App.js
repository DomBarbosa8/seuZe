import Header from './componentes/Header';
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';

import './App.css';

function App() {
  const nomeEmpresa = 'Zé Pelintra';

  return (
    <>
      <Header empresa={nomeEmpresa} />
      <main>
        <Banner>
          <h2>Zé Pelintra</h2>
          <p>
            “Senhor Zé Pelintra, mensageiro de luz da nossa Santa Umbanda e de
            seus Orixás. Permitido por Deus, fazes parte daqueles que têm por
            missão proteger e defender as criações divinas e suas vibrações.
            Permite, Senhor Zé Pelintra, que com vossos conhecimentos, possa eu
            ter meus caminhos abertos, meu corpo fechado e meu espírito
            defendido de todas as más vibrações. Conto com vossa proteção e
            ajuda, a fim de não cair nas tentações e armadilhas do mundo terreno.
            Creio na sagrada Umbanda. Creio nos poderes de Deus. Creio na magia
            dos Exus. Saravá Umbanda. Saravá Estrada. Saravá Senhor Zé Pelintra, Exu
            de Lei que me guarda”.
          </p>
        </Banner>
      </main>
      <Footer empresa={nomeEmpresa} />
    </>
  );
}

export default App;

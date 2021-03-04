import './App.scss';
import ColetaDados from './components/formularios/coleta-dados/coleta-dados';
import Compartilhar from './components/formularios/compartilhar/compartilhar';

import GalleryGrid from './components/gallery/gallery-grid/gallery-grid';
import MainLayout from './components/layout/main-layout/main-layout';
import TextSeparator from './components/text-separator/text-separator';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const mail = (urlParams.get('mail') === 'true');
  console.log(mail);

  return (
    <div className="App">
      <MainLayout>
        { !mail && <ColetaDados /> }
        { !mail && <TextSeparator text="Sua seleção especial" /> }
        <GalleryGrid mail={mail}/>
        {!mail &&<TextSeparator text="Compartilhe a novidade" /> }
        { !mail && <Compartilhar /> }
      </MainLayout>
    </div>
  );
}

export default App;
 
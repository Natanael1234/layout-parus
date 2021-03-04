import './App.scss';
import ColetaDados from './components/formularios/coleta-dados/coleta-dados';
import Compartilhar from './components/formularios/compartilhar/compartilhar';

import GalleryGrid from './components/gallery/gallery-grid/gallery-grid';
import MainLayout from './components/layout/main-layout/main-layout';
import TextSeparator from './components/text-separator/text-separator';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <ColetaDados />
        <TextSeparator text="Sua seleção especial" />
        <GalleryGrid />
        <TextSeparator text="Compartilhe a novidade" />
        <Compartilhar />
      </MainLayout>
    </div>
  );
}

export default App;

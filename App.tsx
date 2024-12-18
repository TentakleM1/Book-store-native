import React from 'react';
import {Provider as StateProvider} from 'react-redux';
import { store } from 'src/store/store';
import { RootNavigation } from 'src/navigation/RootNavigation';

function App(): React.JSX.Element {
 
  return (
    <StateProvider store={store}>
      <RootNavigation />
    </StateProvider>
  );
}

export default App;

import Body from './components/Body';
import appStore from './utils/appStore.ts';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </>
  );
}

export default App;

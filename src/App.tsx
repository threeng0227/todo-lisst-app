import React, { Suspense } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Navigator } from 'navigation';
import { configureStores } from 'store/store';
import { ActivityIndicator } from 'react-native';

const { persistor, store } = configureStores();

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
          <Suspense fallback={<ActivityIndicator size={18} />}>
            <PersistGate loading={null} persistor={persistor}>
              <Navigator />
            </PersistGate>
          </Suspense>
      </Provider>
    </SafeAreaProvider>
  );
};
export default App;

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Router } from './src/router';
import { createConfig } from '@gluestack-style/react';
import { config } from '@gluestack-ui/config';

const customConfig = createConfig({
  ...config,
  tokens: {
    ...config.tokens,
    colors: {
      ...config.tokens.colors,
      rosinha: '#F10C57',
      roxinho: '#3A0F62',
      roxao: '#1C1035',
      branquinha: '#FFFFFF',
    }
  }
})

export default function App() {
  return (
    <GluestackUIProvider config={customConfig}>
      <Router />
    </GluestackUIProvider>
  );
}
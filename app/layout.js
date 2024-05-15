
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import MyNavbar from '@/components/Organisms/MyNavbar/MyNavbar';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({children}) {

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <MyNavbar>
            {children}
          </MyNavbar>
        </MantineProvider>
      </body>
    </html>
  );
}

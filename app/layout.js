
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, Notification } from '@mantine/core';
import MyNavbar from '@/components/Organisms/MyNavbar/MyNavbar';
import '@mantine/notifications/styles.css';
import { Notifications } from "@mantine/notifications";

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
        <Notifications  position="top-right" zIndex={1000} />
          <MyNavbar>
            {children}
          </MyNavbar>
        </MantineProvider>
      </body>
    </html>
  );
}

'use client'

import DarkMode from '@/components/Atoms/DarkMode/DarkMode';
import { AppShell, Avatar, Burger, Group, Skeleton, Title, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


export default function MyNavbar({ Children }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <Avatar size={50} src='/images.png'/>

          <Title size={20}>Queen Qaderi</Title>
          <Box style={{display: 'flex', flexDirection: 'row-reverse'}}>
            <DarkMode/> 
          </Box>

        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>Children</AppShell.Main>
    </AppShell>
  );
}
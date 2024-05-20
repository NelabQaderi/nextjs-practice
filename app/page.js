'use client'

import  Form from "@/components/Molecules/Form/Form";
import { Box, Button, Modal, Tabs } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Home() {
   const [opened, { open, close }] = useDisclosure(false);

   return (
     <div>

         <Box mt={20}>
            <Form/>

            <Button onClick={open}> Sign In</Button>
            <Modal opened={opened} onClose={close} withCloseButton={false} title="Sign In" 
            overlayProps={{
              backgroundOpacity: 0.55,
              blur: 3,
             }} centered>
                       <Tabs defaultValue="setting">
               <Tabs.List>
                  <Tabs.Tab value="followers">Followers</Tabs.Tab>
                  <Tabs.Tab value="following">Following</Tabs.Tab>
                  <Tabs.Tab value="friends">Friends</Tabs.Tab>
                  <Tabs.Tab value="sitting">Setting</Tabs.Tab>
               </Tabs.List>

               <Tabs.Panel value="followers">
                  <h1>list of followers</h1>
               </Tabs.Panel>
               
               <Tabs.Panel value="following">
                  <h1>list of Following</h1>
               </Tabs.Panel>
               
               <Tabs.Panel value="friends">
                  <h1>list of riends</h1>
               </Tabs.Panel>

               <Tabs.Panel value="sitting">
                  <h1>Sitting</h1> 
               </Tabs.Panel>
               
            </Tabs>
            </Modal>

         </Box>

     </div>
  );
}
 
import DarkMode from "@/components/Atoms/DarkMode/DarkMode";
import  Form from "@/components/Molecules/Form/Form";
import { Box } from "@mantine/core";

export default function Home() {

   return (
     <div>
         <Box style={{display: 'flex', flexDirection: 'row-reverse'}}>
            <DarkMode/> 
         </Box>

         <Box mt={20}>
            <Form/>
         </Box>

     </div>
  );
}
 
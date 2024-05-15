'use client'

import { Box, Button, Input, PasswordInput, Select, Table } from "@mantine/core";
import { IconSend } from "@tabler/icons-react";
import { useState } from "react";

export default function Form() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [allData, setAllData] = useState({
        username: "",
        email: "",
        password: "",
        gender: ""
    })
        
   

    const handleClick = () => {
       setAllData({
        username: username,
        email: email,
        password: password,
        gender: gender
        })
    }    

    return (
        <Box>
            <form>
                <Input.Wrapper label="user name">
                     <Input onChange={(e) => setUsername(e.target.value)} placeholder="entar your name" />
                </Input.Wrapper>

                <Input.Wrapper label="user Email">
                     <Input onChange={(e) => setEmail(e.target.value)} placeholder="entar your Email" />
                </Input.Wrapper>

                <Input.Wrapper label="password">
                     <PasswordInput onChange={(e) => setPassword(e.target.value)} placeholder="entar your passord" />
                </Input.Wrapper>

                <Input.Wrapper label="gender">
                    <Select onChange={(e) => setGender(e)} data={['Male', 'Female']} />
                </Input.Wrapper>

                <Button onClick={() => handleClick()} fullWidth leftSection ={ <IconSend />} mt={40}>Send</Button>
                 
               
            </form>

            <Table mt={60}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Username</Table.Th>
                        <Table.Th>Email</Table.Th>
                        <Table.Th>password</Table.Th>
                        <Table.Th>gender</Table.Th>
                    </Table.Tr>
               </Table.Thead>

               <Table.Tbody>
                   <Table.Tr>
                       <Table.Td>
                           {allData.username}
                       </Table.Td>
                       <Table.Td>
                           {allData.email}
                       </Table.Td>
                       <Table.Td>
                           {allData.password}
                       </Table.Td>
                       <Table.Td>
                           {allData.gender}
                       </Table.Td>
                   </Table.Tr>
               </Table.Tbody>

            </Table>
      
        </Box>
    )
}
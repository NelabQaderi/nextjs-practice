'use client'

import { Box, Button, Input, PasswordInput } from "@mantine/core";
import { IconSend } from "@tabler/icons-react";
import { useState } from "react";

export default function Form() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   

    const handleClick = () => {
        console.log(username, email, password)
    }

    return (
        <Box>
            <form>
                <Input.Wrapper label="user name">
                     <Input onChenge={(e) => setUsername(e.target.value)} placeholder="entar your name" />
                </Input.Wrapper>

                <Input.Wrapper label="user Email">
                     <Input onChenge={(e) => setEmail(e.target.value)} placeholder="entar your Email" />
                </Input.Wrapper>

                <Input.Wrapper label="password">
                     <PasswordInput onChenge={(e) => setPassword(e.target.value)} placeholder="entar your passord" />
                </Input.Wrapper>

                <Button onClick={() => handleClick()} fullWidth leftSection ={s<IconSend />} mt={40}>click me</Button>

            </form>
        </Box>
    )
}
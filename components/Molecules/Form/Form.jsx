'use client'

import { Box, Input } from "@mantine/core";

export default function Form() {
    return (
        <Box>
            <Form>
                <Input.Wrapper label="user name">
                     <Input placeholder="entar your name" />
                </Input.Wrapper>
            </Form>
        </Box>
    )
}
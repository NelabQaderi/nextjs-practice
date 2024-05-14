import { Button, Avatar } from "@mantine/core";
import Image from "next/image";

export default function About() {
    return(
        <div>
            <h1>this is about page</h1>
            <Button loading loaderProps={{ type: 'dots' }} color="cyan"> Click</Button>
            <Avatar  src="/images.png" size={200} />
            <Image src="/images.png" width={200}height={200}/>
           
        </div>
    )
};
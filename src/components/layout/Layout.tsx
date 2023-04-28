import { Box } from "@chakra-ui/react"
import { ReactNode } from "react";

type Props = {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <Box w='100vw' h='100vh' py='2em' px='5em'>
            {children}
        </Box>
    )
}

export default Layout;
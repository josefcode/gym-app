import { Spinner, Center } from "@gluestack-ui/themed"


export const Loading = () => {
    return (
        <Center flex = {1} bg = "$warmGray700">
        <Spinner />
        </Center>
    )
}
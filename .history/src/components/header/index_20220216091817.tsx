/* eslint-disable @next/next/no-img-element */
import {
    Header,
    Logo,
    Text,
    DateString
} from "./style";

export default function header() {
    const currentDate = new Date().toLocaleDateString();

    return (
        <Header
            style={{
                
            }}
        >
            <Logo src="/logo.svg" alt="logoPodcast" />

            <Text>O melhor para você ouvir, sempre</Text>

            <DateString>{currentDate}</DateString>
        </Header>
    );
};
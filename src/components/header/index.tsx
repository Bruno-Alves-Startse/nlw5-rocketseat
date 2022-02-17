/* eslint-disable @next/next/no-img-element */
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Link from "next/link";

import {
    Header,
    Logo,
    Text,
    DateString
} from "./style.module";

export default function header() {
    const currentDate = new Date().toLocaleDateString();

    return (
        <Header
            style={{
                zIndex: '999'   
            }}  
        >
            <Link href="/">
                <a><Logo src="/logo.svg" alt="logoPodcast" /></a>
            </Link>

            <Text>O melhor para você ouvir, sempre</Text>

            <DateString>{currentDate}</DateString>
        </Header>
    );
};
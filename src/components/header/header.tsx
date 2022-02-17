/* eslint-disable @next/next/no-img-element */
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Link from "next/link";

import './header.scss';

export default function header() {
    const currentDate = format(new Date(), 'dd MMM yy', { locale: ptBR })

    return (
        <header className="header" style={{zIndex: '999'}}>
            <Link href="/">
                <a><img className="logo" src="/logo.svg" alt="logoPodcast" /></a>
            </Link>

            <p className="text">O melhor para você ouvir, sempre</p>

            <p className="dateString">{currentDate}</p>
        </header>
    );
};
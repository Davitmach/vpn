import { Header } from "../components/shared/header/header";
import { LinkRef } from "../components/shared/link/link";
import { Program } from "../components/shared/program/program";
import { About, Deposit, Top, Tranzakcia } from "../components/shared/tranzakcia/tranzikcia";

export default function Referal() {
    return(
        <>
        <Header/>
        <Program/>
        <LinkRef/>
        <About/>
        <Deposit/>
        <Top/>
        </>
    )
}
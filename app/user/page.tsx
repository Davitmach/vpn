import { Header } from "../components/shared/header/header";
import { Link, LinkRef } from "../components/shared/link/link";
import { Ref } from "../components/shared/ref/ref";
import { Tranzakcia } from "../components/shared/tranzakcia/tranzikcia";

export default function User()  {
    return(
        <>
        <Header/>
        <Ref/>
        {/* <Link/> */}
        <LinkRef/>
        <Tranzakcia/>
        </>
    )
}
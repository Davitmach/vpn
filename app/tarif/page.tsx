import { Podpiska } from "../components/shared/podpiska/podpiska";
import { Header } from "../components/shared/header/header";
import { Full } from "../components/shared/fullScreen/full";

export default function Tarif() {
    return(
        <div className="pb-[24px]">
        <Header/>
        <Podpiska/>
        <Full/>
        </div>
    )
}
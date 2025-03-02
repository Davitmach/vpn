  'use client';
  import { useEffect } from "react";
  import { Connect } from "./components/shared/connect/connect";
  import { Header } from "./components/shared/header/header";
  import { Info } from "./components/shared/info/info";
  import { Support } from "./components/shared/support/support";
  import { Tarif } from "./components/shared/tarif/tarif";
  import { Loading } from "./components/shared/loading/loading";


  export default function Home() {

    return (
  <>
  <Loading/>
  <Header/>
  <Tarif/>
  <Connect/>
  <Info/>
  <Support/>
  </>
    );
  }

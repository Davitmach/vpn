'use client';

import { Full } from "../components/shared/fullScreen/full";
import { SettingsHeader } from "../components/shared/header/header";
import { PazzleAnim } from "../components/shared/pazzleAnim/pazzleAnim";

export default function Settings() {
    return(
        <>
        <SettingsHeader/>
        <PazzleAnim/>
        <Full/>
        </>
    )
}
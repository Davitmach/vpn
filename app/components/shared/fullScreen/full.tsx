'use client'

import { useEffect } from "react";

export const Full = () => {
    useEffect(() => {
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.expand();
        }
    }, []);

    

    return null;
};

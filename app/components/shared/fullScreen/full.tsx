'use client'

import { useEffect } from "react";

export const Full = () => {
    useEffect(() => {
        window.Telegram.WebApp.onEvent("themeChanged", () => {
            if (window.Telegram.WebApp) {
                window.Telegram.WebApp.expand();
            }      
          });
      
    }, []);

    

    return null;
};

'use client'

import { useEffect } from "react";

export const Full = () => {
    useEffect(() => {
        
        setTimeout(() => {
            console.log(1);
            
            if (window.Telegram.WebApp) {
                window.Telegram.WebApp.expand();
            }      
        }, 500);
      
    }, []);

    

    return null;
};

'use client';
import './style.scss';
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IState {
    title: string;
  description:string
}

interface IStates {
    dis: IState;

    conn: IState;
}

const States: IStates = {
    dis: {
        title: "Отключен",
       description:'Нет подписки'
    },

    conn: {
        title: 'Подключен',
description:'Подписка закончилась'
    }
}



export const Header = () => {
    const {push,back} = useRouter();
    const [end,setEnd] = useState<string>('')
    const [activeTarif,setActiveTarif] = useState()
    const [active, setActive] = useState<keyof IStates>('conn');
const path = usePathname();

async function checkVpnStatus() {
    try {
        const response = await fetch("https://prostovpn.su/api/vpn/status", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Telegram-InitData": window.Telegram.WebApp.initData
            }
        });
        const data = await response.json();
        setActive(data ? 'conn' : 'dis'); // Обновляем состояние в зависимости от ответа API
    } catch (error) {
        console.error("Ошибка при проверке VPN статуса:", error);
        setActive('dis'); // В случае ошибки также ставим 'dis'
    }
}

async function getSubscriptionEndDate() {
    const response = await fetch("https://prostovpn.su/api/subscription/date_end", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Telegram-InitData": window.Telegram.WebApp.initData
        }
    });
    const data = await response.json();
    if (data && data !== null) {
        const formattedDate = data.replace(/-/g, '.'); // Заменяем "-" на "."
        setEnd(formattedDate);
    }
}


useEffect(() => {
    checkVpnStatus();
    getSubscriptionEndDate()
    
}, []);
    return (
        <>
            <header className="w-full max-w-[350px] h-[80px] relative bg-[#56B2E5] flex items-center justify-between px-[20px] py-[10px] mx-auto rounded-b-[20px] rounded-tr-[20px] mt-[50px]">
                <div className="flex flex-col  justify-between h-full">
                    <div className="text-white font-[700] text-[18px] name">Prosto.vpn</div>
                    <div className="text-white font-[400] text-[18px] description leading-[1]">{States[active].description}</div>
                </div>
                <div className="flex flex-col h-full justify-between">
                    <div className="text-white font-[700] text-[18px] title">{States[active].title}</div>
                    {end && <div className="text-white font-[400] text-[18px] date">{end}</div>}
                </div>
                <div className="Back absolute bg-[#56B2E5] rounded-t-[20px] top-[-25px] p-[10px] left-[0] cursor-pointer">
                <svg onClick={()=> {
                   if(path == '/') { push('/')}else {back()}
                }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.22183 9.29287C1.8313 9.68339 1.8313 10.3166 2.22183 10.7071L8.58579 17.071C8.97631 17.4616 9.60948 17.4616 10 17.071C10.3905 16.6805 10.3905 16.0474 10 15.6568L4.34315 9.99998L10 4.34312C10.3905 3.9526 10.3905 3.31943 10 2.92891C9.60948 2.53838 8.97631 2.53838 8.58579 2.92891L2.22183 9.29287ZM17.0711 8.99998H2.92893L2.92893 11H17.0711L17.0711 8.99998Z" fill="black"/>
</svg>

                </div>
                <div className="Menu absolute bg-[#56B2E5] rounded-t-[20px] top-[-25px] p-[10px] right-[30px]">
                <svg width="45" height="22" viewBox="0 0 45 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="20" transform="translate(0 1.00366)" fill="#56B2E5"/>
<circle cx="2" cy="3.00366" r="2" fill="black"/>
<circle cx="2" cy="11.0037" r="2" fill="black"/>
<circle cx="2" cy="19.0037" r="2" fill="black"/>
<path d="M44 1.00366L24 21.0037" stroke="black" strokeWidth="2" strokeLinecap="round"/>
<path d="M44 21.0037L24 1.00366" stroke="black" strokeWidth="2" strokeLinecap="round"/>
</svg>


                </div>
            </header>
        </>
    );
};

export const SettingsHeader = () => {
    const {push} = useRouter();
    return (
        <>
            <header className="z-[99999999999999] absolute left-[50%] translate-x-[-50%] w-full max-w-[350px] h-[100px]  mt-[20px] flex justify-between mx-auto">
           <div><svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path onClick={()=> {
            push('/')
           }} className='cursor-pointer' d="M2.22183 9.29287C1.8313 9.68339 1.8313 10.3166 2.22183 10.7071L8.58579 17.071C8.97631 17.4616 9.60948 17.4616 10 17.071C10.3905 16.6805 10.3905 16.0474 10 15.6568L4.34315 9.99998L10 4.34312C10.3905 3.9526 10.3905 3.31943 10 2.92891C9.60948 2.53838 8.97631 2.53838 8.58579 2.92891L2.22183 9.29287ZM17.0711 8.99998H2.92893L2.92893 11H17.0711L17.0711 8.99998Z" fill="white"/>
</svg>
</div>
           <div><svg width="45" height="22" viewBox="0 0 45 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="3" r="2" fill="white"/>
<circle cx="2" cy="11" r="2" fill="white"/>
<circle cx="2" cy="19" r="2" fill="white"/>
<path d="M44 1L24 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
<path className='cursor-pointer' d="M44 21L24 0.999999" stroke="white" strokeWidth="2" strokeLinecap="round"/>
</svg>
</div>
              
            </header>
        </>
    );
};
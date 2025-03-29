'use client'
import { useEffect, useState } from 'react';
import './style.scss';

export const Program = ()=> {
    const [count,setCount] = useState<number>(500)
    const [lvl,setLvl] = useState<number>(1);
    const [progress, setProgress] = useState<number>(0);
    const [nextLvlCount, setNextLvlCount] = useState<number>(0);
    async function getReferralCount() {
        const response = await fetch("https://prostovpn.su/api/referral_system/referral_count", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Telegram-InitData": window.Telegram.WebApp.initData
            }
        });
        const data = await response.json();
    setCount(data)
    }
    useEffect(()=> {
setTimeout(() => {
    getReferralCount()
}, 1000);
    },[])
    useEffect(() => {
        if (count < 10) {
            setLvl(1);
            setProgress((count / 10) * 100);
            setNextLvlCount(10 - count);
        } else if (count >= 10 && count < 100) {
            setLvl(2);
            setProgress(((count - 10) / (100 - 10)) * 100);
            setNextLvlCount(100 - count);
        } else if (count >= 100 && count < 500) {
            setLvl(3);
            setProgress(((count - 100) / (500 - 100)) * 100);
            setNextLvlCount(500 - count);
        } else if (count >= 500) {
            setLvl(4);
            setProgress(100);
            setNextLvlCount(0);
        }
    }, [count]);
    return(
        <>
        <div className='max-w-[350px] mx-auto h-auto w-full bg-white rounded-[20px] p-[20px] flex flex-col gap-[10px]'>
            <div className='font-[700] text-[24px] '>Реферальная программа</div>
            <div className='flex item-center justify-between w-full'>
                <div className='flex  item-center justify-center gap-[5px]'>
                    <div className='text-[#56B2E5] font-[700] text-[18px]'>{count}</div>
                    <div className='flex items-center justify-center'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="10" cy="5.62821" rx="5" ry="5.12821" fill="#56B2E5"/>
<path d="M10 12.8077C11.2726 12.8077 14.9743 12.8596 17.4987 13.5579C19.4693 14.103 18.7552 15.9979 16.857 16.7572L13.7139 18.0144C11.3298 18.9681 8.6702 18.9681 6.28609 18.0144L3.14305 16.7572C1.24475 15.9979 0.530736 14.103 2.50126 13.5579C5.02566 12.8596 8.72742 12.8077 10 12.8077Z" fill="#56B2E5"/>
</svg>
</div>
                </div>
                <div className='text-[#56B2E5] font-[700] text-[18px]'>с подписки - {lvl == 1 ? '15' : lvl == 2 ? '20' : lvl==3? '35' :'50'}%</div>
            </div>
            <div className='relative'>
                <div className='bg-[#EFEFEF] rounded-[30px] w-full h-[30px]'></div>
                <div    style={{ width: `${progress}%` }} className=' text-nowrap text-center absolute top-[0] left-[0]   font-[400] text-[16px] h-[30px] bg-[#BBF6E2] inline-flex items-center justify-center rounded-[30px] py-[4px] px-[20px]'>{progress > 23 && `${lvl} уровень`}</div>
            </div>
        {lvl !== 4 &&  <div className=' w-full flex item-center justify-between'>
                <div className='flex items-center justify-center gap-[5px]'>
                    <div className='text-black font-[400] text-[18px]'>{nextLvlCount}</div>
                    <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="10" cy="5.62821" rx="5" ry="5.12821" fill="black"/>
<path d="M10 12.8077C11.2726 12.8077 14.9743 12.8596 17.4987 13.5579C19.4693 14.103 18.7552 15.9979 16.857 16.7572L13.7139 18.0144C11.3298 18.9681 8.6702 18.9681 6.28609 18.0144L3.14305 16.7572C1.24475 15.9979 0.530736 14.103 2.50126 13.5579C5.02566 12.8596 8.72742 12.8077 10 12.8077Z" fill="black"/>
</svg>

</div>
                </div>
                <div className='text-black font-[400] text-[18px]'>до следующего уровня</div>
            </div>}   
        </div>
        </>
    )
}
"use client";

import { useState } from "react";
 
interface IBlock {
    price:number,
    date:string,
    totalTime:string
}
export const Block = (props:IBlock)=> {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
      navigator.clipboard.writeText("Текст для копирования");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 500); // Вернем размер через 0.5 сек
    };
  
return(
    <div className="flex w-full items-center justify-between border-b border-b-[#EFEFEF] py-[10px]">
        <div>
            <div className="text-[16px] ">{props.price} рублей</div>
            <div className="text-[16px] font-[400]">{`<<${props.totalTime}>>`}</div>
        </div>
        <div>
            <div>{props.date}</div>
            <div className="flex items-center justify-end gap-[10px]">
                <div className="font-[400] text-[16px] text-[#56B2E5]">Чек</div>
                <div>      <svg
          onClick={copyToClipboard}
          className="relative cursor-pointer"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width={"11"}
            height={ "11"}
            rx="1.5"
            fill={isCopied ? '' :'#56B2E5'}
            stroke="#56B2E5"
            style={{ transition: "width 0.2s, height 0.2s" }}
          />
          <rect
            className="black_link"
            x="4.5"
            y="4.5"
            width={isCopied ? "12" : "15"}
            height={isCopied ? "12" : "15"}
            rx="1.5"
            stroke="black"
            fill={isCopied ? 'black' :''}
            style={{ transition: "width 0.2s, height 0.2s",position:'absolute',right:0,transform:'translateX(0)',bottom:0 }}
          />
        </svg></div>
            </div>
        </div>
    </div>
)
}
export const Tranzakcia = ()=> {
    const [acitve,setActive] = useState(true);
    return(
       <div className="bg-white rounded-[20px] p-[20px] max-w-[350px] w-full mx-auto" >
        <div className="flex w-full items-center justify-between">
            <div>История транзакций</div>
            <div><svg style={{transform:acitve == true ? 'rotate(180deg)' : 'rotate(0deg)' ,transition:'.2s'}}  onClick={()=> {
                setActive((prev)=> !prev)
            }} className={`cursor-pointer`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.29311 17.7784C9.68364 18.1689 10.3168 18.1689 10.7073 17.7784L17.0713 11.4145C17.4618 11.0239 17.4618 10.3908 17.0713 10.0002C16.6808 9.60972 16.0476 9.60972 15.6571 10.0002L10.0002 15.6571L4.34337 10.0002C3.95284 9.60972 3.31968 9.60972 2.92915 10.0002C2.53863 10.3908 2.53863 11.0239 2.92915 11.4145L9.29311 17.7784ZM9.00022 2.92918L9.00022 17.0713L11.0002 17.0713L11.0002 2.92918L9.00022 2.92918Z" fill={`${acitve ==true ? 'black' : '#56B2E5'} `}/>
</svg>
</div>
        </div>
        <div style={{transition:'.2s'}} className={`overflow-hidden duration-[700] ${acitve == true ? 'h-[200px]' : 'h-[0]'}`}>
            <Block totalTime="Месяц" price={400} date="22.01.2025"/>
            <Block totalTime="Месяц" price={400} date="22.01.2025"/>
            <Block totalTime="Месяц" price={400} date="22.01.2025"/>

        </div>
       </div>
    )
}
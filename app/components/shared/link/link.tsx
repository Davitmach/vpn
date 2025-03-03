"use client";

import { useState } from "react";
import "./style.scss";

export const Link = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("Текст для копирования");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 500); // Вернем размер через 0.5 сек
  };

  return (
    <div className="max-w-[350px] w-full mx-auto h-auto bg-[#56B2E5] rounded-[20px] p-[20px] gap-[12px] flex flex-col">
      <div className="font-[700] text-[18px] text-white">Ссылка на подключение</div>
      <div className="relative">
        <input
          readOnly
          className="py-[4px] bg-white rounded-[20px] w-full px-[10px] outline-none text-[16px]"
          type="text"
          defaultValue={"https//prostovpn12353450912-39123"}
        />
<div className="Link_copy absolute top-[50%] right-[10px] translate-y-[-50%] cursor-pointer">
        <svg
          onClick={copyToClipboard}
          className="relative"
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
        </svg>
        </div>
      </div>
      <div className="font-[200] text-[16px] text-white">Подключите все устройства к одному VPN</div>
    </div>  );
};

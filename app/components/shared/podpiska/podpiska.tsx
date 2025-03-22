"use client";
import axios from "axios";
import { act, useEffect, useState } from "react";
import { CancelBtn } from "../cancelBtn/cancelBtn";

import { Infoblock } from "../infoBlock/infoBlock";
import './style.scss'

export const Podpiska = ()=> {
  const [active,setActive] = useState('');
  const [count,setCount] = useState<number>(1);
  const [countActive,setCountActive] = useState<boolean>(false)
  const [amount,setAmount] = useState<number>(0) 
  const [activeTarif,setActiveTarif] = useState<string>('');
const [sub,setSub] = useState<boolean>(false);
  async function createPayment(amount:number, period:string, numberDevices:number) {
    const response = await fetch("https://prostovpn.su/api/subscription/create_payment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Telegram-InitData": window.Telegram.WebApp.initData
        },
        body: JSON.stringify({
            amount,
            period,
            number_devices: numberDevices
        })
    });
    const data = await response.json();
    console.log(data,'создание платежа');
    
    return data;
}
async function getSubscriptionEndDate() {
  const response = await fetch("https://prostovpn.su/api/subscription/date_end", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "X-Telegram-InitData": window.Telegram.WebApp.initData
      }
  });
  const data = response.json();
  if(data !== null) {
    setSub(true);
  }
}
useEffect(()=> {
setTimeout(() => {
  getSubscriptionEndDate();
}, 500);
},[])

const HandleSubmit = async () => {
  if (amount !== 0) {
      const paymentResponse = await createPayment(amount, activeTarif, count);

      
      if (paymentResponse) {
         
          window.location.href = paymentResponse;  
      } else {
          console.error("Payment creation failed or invalid response");
      }
  }
}
  
  useEffect(()=> {
if(active == 'probni') {
  setActiveTarif('Пробный период')
setAmount(1);
}
else if(active == '1') {
  setActiveTarif('1 месяц')
  count == 1 ? setAmount(199) : count == 2 ? setAmount(249) : count == 3 ?setAmount(298) : setAmount(348)
}
else if(active == '2') {
  setActiveTarif('6 месяцев')
  count == 1 ?setAmount(999) : count ==2 ?setAmount(1249) : count == 3 ? setAmount(1498) : setAmount(1747)
  
}
else if(active =='3') {
  setActiveTarif('3 месяца')
  count == 1 ?setAmount(549) :count ==2 ?setAmount(686) : count ==3 ?setAmount(823) :setAmount(960)
  
}
else if(active == '4') {
  setActiveTarif('1 год')
  count ==1 ? setAmount(1790) : count == 2 ?setAmount(2237) : count == 3 ? setAmount(2683) : setAmount(3130)
}

  },[active,count])


    return(
      <div className="max-w-[350px] w-full mx-auto mt-[10px]">
        <div className="text-white font-[600] text-[24px]">Выберите подписку</div>
        <div className=" flex flex-col gap-[5px]">

        {sub == false && <svg onClick={()=> {
            setActive('probni')
        }} className="mx-auto max-w-[350px] w-full h-[auto] mt-[10px]"  viewBox="0 0 350 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="350" height="62" rx="20" fill={ active =='probni' ?'#C4FF35' : '#BBF6E2'}/>
<path d="M39.548 24.994H48.368V37H47.036V26.254H40.88V37H39.548V24.994ZM52.438 35.956V41.14H51.142V29.53H52.438V30.574C53.32 29.476 54.454 29.35 54.994 29.35C57.334 29.35 58.63 31.294 58.63 33.31C58.63 35.362 57.316 37.216 55.048 37.216C53.842 37.216 52.996 36.676 52.438 35.956ZM54.868 36.064C56.38 36.064 57.298 34.804 57.298 33.31C57.298 31.474 56.056 30.502 54.85 30.502C53.644 30.502 52.366 31.492 52.366 33.292C52.366 34.822 53.338 36.064 54.868 36.064ZM64.1086 37.216C61.8406 37.216 60.1486 35.56 60.1486 33.292C60.1486 31.024 61.8226 29.35 64.1086 29.35C66.3946 29.35 68.0686 31.024 68.0686 33.292C68.0686 35.56 66.3766 37.216 64.1086 37.216ZM64.1086 30.502C62.7406 30.502 61.4806 31.474 61.4806 33.292C61.4806 35.128 62.7766 36.064 64.1086 36.064C65.4586 36.064 66.7366 35.11 66.7366 33.292C66.7366 31.456 65.4766 30.502 64.1086 30.502ZM75.816 24.4H77.256C76.824 25.84 75.6 26.236 74.808 26.434C74.106 26.614 73.152 26.776 72.432 27.298C71.496 28 70.92 29.35 70.866 30.718H70.902C71.388 29.89 72.288 29.35 73.62 29.35C75.852 29.35 77.508 31.06 77.508 33.292C77.508 35.524 75.87 37.216 73.422 37.216C72.162 37.216 71.334 36.73 70.848 36.28C69.714 35.236 69.588 33.742 69.588 32.428C69.588 31.096 69.642 27.694 71.712 26.272C72.522 25.714 73.458 25.552 74.322 25.354C75.33 25.12 75.654 24.814 75.816 24.4ZM73.548 30.502C72.18 30.502 70.92 31.474 70.92 33.292C70.92 35.128 72.216 36.064 73.548 36.064C74.898 36.064 76.176 35.11 76.176 33.292C76.176 31.456 74.916 30.502 73.548 30.502ZM79.4955 37V29.53H80.7915V32.59H84.3195V29.53H85.6155V37H84.3195V33.778H80.7915V37H79.4955ZM88.056 37V29.53H89.352V32.392H90.684C91.35 32.392 92.286 32.446 92.952 33.13C93.24 33.418 93.528 33.94 93.528 34.696C93.528 35.506 93.186 36.064 92.862 36.37C92.214 36.982 91.404 37 90.666 37H88.056ZM89.352 35.848H90.558C90.99 35.848 91.404 35.83 91.71 35.65C91.872 35.542 92.196 35.272 92.196 34.696C92.196 34.372 92.106 33.994 91.728 33.76C91.404 33.544 90.99 33.544 90.576 33.544H89.352V35.848ZM94.428 37V29.53H95.724V37H94.428ZM98.1635 29.53H99.4595V34.462L104.571 28.954V37H103.275V32.014L98.1635 37.522V29.53ZM98.8115 26.308L99.8915 25.894C100.071 26.506 100.575 26.974 101.421 26.974C102.267 26.974 102.771 26.506 102.951 25.894L104.031 26.308C103.653 27.37 102.681 28.054 101.421 28.054C100.161 28.054 99.1895 27.37 98.8115 26.308ZM111.224 29.53H117.236V37H115.94V30.718H112.52V37H111.224V29.53ZM125.223 34.498L126.303 35.092C126.087 35.506 125.763 35.956 125.385 36.298C124.701 36.91 123.855 37.216 122.901 37.216C121.101 37.216 119.211 36.082 119.211 33.31C119.211 31.078 120.579 29.35 122.829 29.35C124.287 29.35 125.205 30.07 125.655 30.718C126.123 31.384 126.393 32.536 126.357 33.526H120.543C120.561 35.074 121.623 36.064 122.919 36.064C123.531 36.064 124.017 35.884 124.449 35.524C124.791 35.236 125.061 34.858 125.223 34.498ZM120.633 32.446H125.025C124.809 31.276 123.927 30.502 122.829 30.502C121.731 30.502 120.831 31.33 120.633 32.446ZM129.641 35.956V41.14H128.345V29.53H129.641V30.574C130.523 29.476 131.657 29.35 132.197 29.35C134.537 29.35 135.833 31.294 135.833 33.31C135.833 35.362 134.519 37.216 132.251 37.216C131.045 37.216 130.199 36.676 129.641 35.956ZM132.071 36.064C133.583 36.064 134.501 34.804 134.501 33.31C134.501 31.474 133.259 30.502 132.053 30.502C130.847 30.502 129.569 31.492 129.569 33.292C129.569 34.822 130.541 36.064 132.071 36.064ZM137.82 29.53H139.116V34.462L144.228 28.954V37H142.932V32.014L137.82 37.522V29.53ZM150.171 37.216C147.903 37.216 146.211 35.56 146.211 33.292C146.211 31.024 147.885 29.35 150.171 29.35C152.457 29.35 154.131 31.024 154.131 33.292C154.131 35.56 152.439 37.216 150.171 37.216ZM150.171 30.502C148.803 30.502 147.543 31.474 147.543 33.292C147.543 35.128 148.839 36.064 150.171 36.064C151.521 36.064 152.799 35.11 152.799 33.292C152.799 31.456 151.539 30.502 150.171 30.502ZM156.659 29.53H161.915V35.812H163.031V38.98H161.843V37H156.155V38.98H154.967V35.812C155.615 35.794 156.101 35.362 156.353 34.84C156.605 34.318 156.659 33.616 156.659 32.86V29.53ZM160.619 35.812V30.718H157.955V33.526C157.955 34.39 157.757 35.2 157.055 35.812H160.619ZM167.375 40.06L176.627 23.338L177.671 23.878L168.419 40.564L167.375 40.06ZM187.017 37V26.254H185.001L185.703 24.994H188.349V37H187.017ZM198.424 29.53H203.68V35.812H204.796V38.98H203.608V37H197.92V38.98H196.732V35.812C197.38 35.794 197.866 35.362 198.118 34.84C198.37 34.318 198.424 33.616 198.424 32.86V29.53ZM202.384 35.812V30.718H199.72V33.526C199.72 34.39 199.522 35.2 198.82 35.812H202.384ZM211.707 34.498L212.787 35.092C212.571 35.506 212.247 35.956 211.869 36.298C211.185 36.91 210.339 37.216 209.385 37.216C207.585 37.216 205.695 36.082 205.695 33.31C205.695 31.078 207.063 29.35 209.313 29.35C210.771 29.35 211.689 30.07 212.139 30.718C212.607 31.384 212.877 32.536 212.841 33.526H207.027C207.045 35.074 208.107 36.064 209.403 36.064C210.015 36.064 210.501 35.884 210.933 35.524C211.275 35.236 211.545 34.858 211.707 34.498ZM207.117 32.446H211.509C211.293 31.276 210.411 30.502 209.313 30.502C208.215 30.502 207.315 31.33 207.117 32.446ZM214.829 37V29.53H216.125V32.59H219.653V29.53H220.949V37H219.653V33.778H216.125V37H214.829ZM223.39 37V29.53H224.686V32.392H226.018C226.684 32.392 227.62 32.446 228.286 33.13C228.574 33.418 228.862 33.94 228.862 34.696C228.862 35.506 228.52 36.064 228.196 36.37C227.548 36.982 226.738 37 226 37H223.39ZM224.686 35.848H225.892C226.324 35.848 226.738 35.83 227.044 35.65C227.206 35.542 227.53 35.272 227.53 34.696C227.53 34.372 227.44 33.994 227.062 33.76C226.738 33.544 226.324 33.544 225.91 33.544H224.686V35.848ZM235.77 31.438L234.87 30.7C235.122 30.34 235.464 29.98 235.824 29.764C236.4 29.422 236.976 29.35 237.462 29.35C238.056 29.35 238.668 29.404 239.226 29.872C239.712 30.286 239.874 30.772 239.874 31.294C239.874 32.176 239.406 32.626 239.028 32.86C239.406 32.95 239.712 33.148 239.892 33.346C240.198 33.67 240.414 34.138 240.414 34.714C240.414 35.488 240.054 36.19 239.442 36.64C238.902 37.036 238.128 37.216 237.318 37.216C236.652 37.216 235.95 37.072 235.32 36.586C234.888 36.262 234.546 35.776 234.33 35.308L235.446 34.84C235.518 35.02 235.698 35.38 236.112 35.686C236.526 35.992 236.94 36.064 237.336 36.064C237.624 36.064 238.2 36.046 238.596 35.776C238.848 35.614 239.118 35.272 239.118 34.732C239.118 34.318 238.92 34.03 238.668 33.868C238.29 33.616 237.786 33.616 237.444 33.616H236.688V32.428H237.318C237.912 32.428 238.182 32.302 238.29 32.23C238.488 32.104 238.686 31.888 238.686 31.546C238.686 31.222 238.56 30.934 238.362 30.772C238.056 30.502 237.642 30.502 237.408 30.502C237.12 30.502 236.76 30.556 236.382 30.79C236.184 30.916 235.95 31.114 235.77 31.438ZM248.116 30.592V29.53H249.412V37H248.116V35.956C247.684 36.514 246.874 37.216 245.56 37.216C243.67 37.216 241.924 35.884 241.924 33.256C241.924 30.682 243.652 29.35 245.56 29.35C247 29.35 247.774 30.142 248.116 30.592ZM245.704 30.502C244.426 30.502 243.256 31.438 243.256 33.256C243.256 34.858 244.156 36.064 245.704 36.064C247.288 36.064 248.188 34.75 248.188 33.274C248.188 31.348 246.856 30.502 245.704 30.502ZM259.632 37V26.254H257.616L258.318 24.994H260.964V37H259.632ZM271.795 35.956V41.14H270.499V29.53H271.795V30.574C272.677 29.476 273.811 29.35 274.351 29.35C276.691 29.35 277.987 31.294 277.987 33.31C277.987 35.362 276.673 37.216 274.405 37.216C273.199 37.216 272.353 36.676 271.795 35.956ZM274.225 36.064C275.737 36.064 276.655 34.804 276.655 33.31C276.655 31.474 275.413 30.502 274.207 30.502C273.001 30.502 271.723 31.492 271.723 33.292C271.723 34.822 272.695 36.064 274.225 36.064ZM279.956 41.14L282.332 36.298L278.894 29.53H280.37L283.016 34.876L285.446 29.53H286.886L281.396 41.14H279.956ZM294.013 24.4H295.453C295.021 25.84 293.797 26.236 293.005 26.434C292.303 26.614 291.349 26.776 290.629 27.298C289.693 28 289.117 29.35 289.063 30.718H289.099C289.585 29.89 290.485 29.35 291.817 29.35C294.049 29.35 295.705 31.06 295.705 33.292C295.705 35.524 294.067 37.216 291.619 37.216C290.359 37.216 289.531 36.73 289.045 36.28C287.911 35.236 287.785 33.742 287.785 32.428C287.785 31.096 287.839 27.694 289.909 26.272C290.719 25.714 291.655 25.552 292.519 25.354C293.527 25.12 293.851 24.814 294.013 24.4ZM291.745 30.502C290.377 30.502 289.117 31.474 289.117 33.292C289.117 35.128 290.413 36.064 291.745 36.064C293.095 36.064 294.373 35.11 294.373 33.292C294.373 31.456 293.113 30.502 291.745 30.502ZM303.345 29.53V37H302.049V30.718H299.385V34.084C299.385 34.714 299.385 35.542 298.809 36.244C298.575 36.532 298.017 37.036 297.009 37.036C296.883 37.036 296.739 37.018 296.613 37V35.812C296.703 35.83 296.811 35.848 296.901 35.848C297.387 35.848 297.693 35.596 297.837 35.362C298.071 35.002 298.089 34.534 298.089 34.084V29.53H303.345ZM305.796 37V29.53H307.092V32.392H308.424C309.09 32.392 310.026 32.446 310.692 33.13C310.98 33.418 311.268 33.94 311.268 34.696C311.268 35.506 310.926 36.064 310.602 36.37C309.954 36.982 309.144 37 308.406 37H305.796ZM307.092 35.848H308.298C308.73 35.848 309.144 35.83 309.45 35.65C309.612 35.542 309.936 35.272 309.936 34.696C309.936 34.372 309.846 33.994 309.468 33.76C309.144 33.544 308.73 33.544 308.316 33.544H307.092V35.848Z" fill="black"/>
</svg>}  
          <svg className="mx-auto max-w-[350px] w-full h-[auto] mt-[10px]" viewBox="0 0 350 245" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="Tarif"  d="M0 20C0 8.95431 8.95431 0 20 0H168L168 19C168 21.7614 170.239 24 173 24H175C177.761 24 180 26.2386 180 29V33C180 35.7614 177.761 38 175 38H173C170.239 38 168 40.2386 168 43L168 120H46C43.2386 120 41 122.239 41 125V127C41 129.761 38.7614 132 36 132H32C29.2386 132 27 129.761 27 127V125C27 122.239 24.7614 120 22 120H0V20Z" onClick={()=>{ 
  setActive('1')
}} fill={ active == '1' ? '#56B2E5' :'white'}/>
<text fill="black" x="55" fontSize="18" y="50">1 месяц</text>
<text fill="black" x="50" fontSize="28" y="90" fontWeight="500">{count == 1 ? 199 : count == 2 ? 249 : count == 3 ? 298 : 348} ₽</text>
<path className="Tarif" d="M0 225C0 236.046 8.95431 245 20 245H168V228.769C168 227.24 166.76 226 165.231 226C160.133 226 156 221.867 156 216.769V211.231C156 206.133 160.133 202 165.231 202C166.76 202 168 200.76 168 199.231L168 125H48.7692C47.2398 125 46 126.24 46 127.769C46 132.867 41.8672 137 36.7692 137H31.2308C26.1328 137 22 132.867 22 127.769C22 126.24 20.7602 125 19.2308 125H0V225Z" onClick={()=>{ 
  setActive('2')
}} fill={ active == '2' ? '#56B2E5' :'white'} />



<path  className="Tarif" d="M173 0H330C341.046 0 350 8.95431 350 20V120H308.41H308C306.343 120 305 118.657 305 117C305 112.029 300.971 108 296 108H291C286.029 108 282 112.029 282 117C282 118.657 280.657 120 279 120H173V45.9016C173 44.2991 174.299 43 175.902 43C180.927 43 185 38.9265 185 33.9016V28.0984C185 23.0735 180.927 19 175.902 19C174.299 19 173 17.7009 173 16.0984V0Z" onClick={()=>{ 
  setActive('3')
}} fill={ active == '3' ? '#56B2E5' :'white'}/>
<text fill="black" x="229" fontSize="18" y="50">3 месяц</text>
<text fill="black" x="225" fontSize="28" y="89" fontWeight="500">{ count == 1 ?549 :count ==2 ?686 : count ==3 ?823 :960} ₽</text>

<path className="Tarif" d="M173 245H330C341.046 245 350 236.046 350 225V125H305C302.239 125 300 122.761 300 120V118C300 115.239 297.761 113 295 113H292C289.239 113 287 115.239 287 118V120C287 122.761 284.761 125 282 125H173V201C173 204.314 170.314 207 167 207C163.686 207 161 209.686 161 213V215C161 218.314 163.686 221 167 221C170.314 221 173 223.686 173 227V245Z" onClick={()=>{ 
  setActive('4')
}} fill={ active == '4' ? '#56B2E5' :'white'}/>
<text fill="black" x="45" fontSize="18" y="175">6 месяцев</text>
<text fill="black" x="48" fontSize="28" y="213" fontWeight="500">{count == 1 ?999 : count ==2 ?1249 : count == 3 ? 1498 : 1747} ₽</text>
<text fill="black" x="243" fontSize="18" y="174">1 год</text>
<text fill="black" x="220" fontSize="28" y="213" fontWeight="500">{count ==1 ? 1790 : count == 2 ?2237 : count == 3 ? 2683 : 3130} ₽</text>


</svg>

{/* <CancelBtn/> */}
<div className="Counter w-full flex justify-between  mt-[20px]">

  <div className="text-[18px] font-[400] text-white relative">Выберите количество устройств</div>
  <div><input onClick={()=> {
    setCountActive(prev=> !prev)
  }} className={`w-[51px] h-[30px] flex item-center justify-center bg-[#FFFFFF] outline-none rounded-[20px] text-center px-[7 px] ${countActive == true ? 'rounded-b-[0]' :''} `} type="text" value={count} readOnly  onInput={(e) => {
    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
  }}  />
  <div className={`flex flex-col gap-[5px] ${countActive == true? "" :'hidden'} absolute bg-white w-[51px] rounded-[20px] rounded-t-[0] p-[7px]`}>
    {Array.from({length:4},(_,index)=> (
      <div onClick={()=> {
        setCount(index+1)
        setCountActive(false)
      }} className="text-center" key={index}>{index+1}</div>
    ))}
  </div>
  </div>
</div>
<Infoblock year={active == '4' ?false : true}  tarif={active == '1' ? 0 : active == '2' ? 8 : active =='3' ? 16 :30} type={active !=='probni' ? 'eco': 'trial'}/>
<div className="Pay mt-[13px] flex flex-col gap-[10px]">
  <div className="font-[400] text-[18px] text-white">Итого</div>
  <div className="w-full flex justify-between">
    <div className="font-[600] text-[24px] text-white">{active == 'probni' ?'1 день' :active == '1'? '1 месяц':active == '2' ? '3 месяца': active == '3' ? '6 месяцев' : '1 год' }</div>
    <div className="font-[600] text-[24px] text-white">{active == 'probni' ? '1 рубль' : active == '1' ?  count == 1 ? '199 рублей' : count == 2 ? '249 рублей' : count == 3 ? '298 рублей' : '348 рублей':active == '3' ?count == 1 ?'549 рублей'  :count ==2 ? '686 рублей' : count ==3 ?'823 рублей' :'960 рублей' :active == '2' ?count == 1 ?'999 рублей' : count ==2 ?'1249 рублей' : count == 3 ?'1498 рублей' : '1747 рублей' : count ==1 ? '1790 рублей' : count == 2 ?'2237 рублей' : count == 3 ? '2683 рублей' : '3130 рублей' }</div>
  </div>
  <div onClick={HandleSubmit}><svg  className="Pay_btn mx-auto max-w-[350px] w-full h-[auto] mt-[10px] cursor-pointer duration-[700]" viewBox="0 0 350 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="350" height="50" rx="20" fill="#BBF6E2"/>
<path d="M105.868 18.994H115.372V31H113.032V21.01H108.208V31H105.868V18.994ZM123.412 28.498L125.428 28.822C125.194 29.398 124.312 31.252 121.594 31.252C120.334 31.252 119.38 30.892 118.606 30.154C117.742 29.344 117.382 28.336 117.382 27.112C117.382 25.564 118.012 24.61 118.57 24.052C119.488 23.152 120.568 22.954 121.504 22.954C123.088 22.954 124.006 23.584 124.546 24.232C125.374 25.222 125.482 26.446 125.482 27.292V27.472H119.65C119.65 27.94 119.776 28.444 120.028 28.786C120.262 29.11 120.748 29.524 121.594 29.524C122.422 29.524 123.052 29.128 123.412 28.498ZM119.722 26.068H123.412C123.232 25.006 122.368 24.502 121.558 24.502C120.748 24.502 119.902 25.024 119.722 26.068ZM129.379 29.992V35.122H127.183V23.206H129.379V24.214C129.721 23.728 130.477 22.954 131.917 22.954C132.601 22.954 133.699 23.116 134.581 23.998C135.157 24.574 135.751 25.546 135.751 27.094C135.751 28.858 134.977 29.812 134.527 30.244C133.933 30.802 133.033 31.252 131.881 31.252C131.341 31.252 130.243 31.162 129.379 29.992ZM131.323 24.898C130.747 24.898 130.297 25.06 129.901 25.42C129.415 25.834 129.163 26.374 129.163 27.094C129.163 27.814 129.451 28.408 129.883 28.786C130.171 29.038 130.639 29.308 131.323 29.308C132.043 29.308 132.511 29.02 132.799 28.75C133.267 28.318 133.483 27.67 133.483 27.094C133.483 26.518 133.249 25.87 132.817 25.456C132.421 25.096 131.845 24.898 131.323 24.898ZM143.082 28.498L145.098 28.822C144.864 29.398 143.982 31.252 141.264 31.252C140.004 31.252 139.05 30.892 138.276 30.154C137.412 29.344 137.052 28.336 137.052 27.112C137.052 25.564 137.682 24.61 138.24 24.052C139.158 23.152 140.238 22.954 141.174 22.954C142.758 22.954 143.676 23.584 144.216 24.232C145.044 25.222 145.152 26.446 145.152 27.292V27.472H139.32C139.32 27.94 139.446 28.444 139.698 28.786C139.932 29.11 140.418 29.524 141.264 29.524C142.092 29.524 142.722 29.128 143.082 28.498ZM139.392 26.068H143.082C142.902 25.006 142.038 24.502 141.228 24.502C140.418 24.502 139.572 25.024 139.392 26.068ZM146.853 23.206H149.049V28.012L152.649 23.206H154.845V31H152.649V26.194L149.049 31H146.853V23.206ZM152.361 19.3L153.801 19.984C153.279 21.478 151.803 21.838 150.849 21.838C149.895 21.838 148.419 21.478 147.897 19.984L149.337 19.3C149.481 19.948 150.093 20.434 150.849 20.434C151.497 20.434 152.181 20.074 152.361 19.3ZM162.505 25.078H160.345V31H158.149V25.078H155.989V23.206H162.505V25.078ZM163.657 23.206H165.853V28.012L169.453 23.206H171.649V31H169.453V26.194L165.853 31H163.657V23.206ZM177.931 23.206H180.127V26.23L183.043 23.206H185.779L182.251 26.68L185.959 31H183.151L180.451 27.778L180.127 28.102V31H177.931V23.206ZM195.2 22.954C196.676 22.954 197.684 23.44 198.35 24.052C199.124 24.754 199.664 25.834 199.664 27.112C199.664 28.372 199.124 29.452 198.35 30.154C197.684 30.766 196.676 31.252 195.2 31.252C193.724 31.252 192.716 30.766 192.05 30.154C191.276 29.452 190.736 28.372 190.736 27.112C190.736 25.834 191.276 24.754 192.05 24.052C192.716 23.44 193.724 22.954 195.2 22.954ZM195.2 29.308C196.478 29.308 197.396 28.3 197.396 27.112C197.396 25.888 196.46 24.898 195.2 24.898C193.94 24.898 193.004 25.888 193.004 27.112C193.004 28.3 193.922 29.308 195.2 29.308ZM201.362 23.206H208.742V31H206.546V25.078H203.558V31H201.362V23.206ZM217.749 23.206V31H215.553V25.078H213.429V27.94C213.429 28.57 213.339 29.542 212.691 30.244C212.529 30.424 211.863 31.072 210.585 31.072C210.369 31.072 210.153 31.054 209.937 31V29.128C210.045 29.146 210.171 29.164 210.279 29.164C210.765 29.164 211.035 28.966 211.179 28.786C211.413 28.498 211.449 28.102 211.449 27.796V23.206H217.749ZM225.813 24.214V23.206H228.009V31H225.813V29.992C225.021 31.126 223.977 31.252 223.419 31.252C221.025 31.252 219.441 29.38 219.441 27.094C219.441 24.79 221.007 22.954 223.311 22.954C223.905 22.954 225.075 23.062 225.813 24.214ZM223.869 24.898C222.609 24.898 221.709 25.852 221.709 27.094C221.709 28.336 222.609 29.308 223.869 29.308C225.129 29.308 226.029 28.336 226.029 27.094C226.029 25.852 225.129 24.898 223.869 24.898ZM235.683 25.078H233.523V31H231.327V25.078H229.167V23.206H235.683V25.078ZM242.469 28.498L244.485 28.822C244.251 29.398 243.369 31.252 240.651 31.252C239.391 31.252 238.437 30.892 237.663 30.154C236.799 29.344 236.439 28.336 236.439 27.112C236.439 25.564 237.069 24.61 237.627 24.052C238.545 23.152 239.625 22.954 240.561 22.954C242.145 22.954 243.063 23.584 243.603 24.232C244.431 25.222 244.539 26.446 244.539 27.292V27.472H238.707C238.707 27.94 238.833 28.444 239.085 28.786C239.319 29.11 239.805 29.524 240.651 29.524C241.479 29.524 242.109 29.128 242.469 28.498ZM238.779 26.068H242.469C242.289 25.006 241.425 24.502 240.615 24.502C239.805 24.502 238.959 25.024 238.779 26.068Z" fill="black"/>
</svg>
</div>
</div>
        </div>
      </div>
    )
}
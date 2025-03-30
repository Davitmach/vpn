"use client";
import axios from "axios";
import { act, useEffect, useLayoutEffect, useState } from "react";
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
const [gift,setGift] = useState<boolean>(false);
const [attach,setAttach ] = useState<boolean>(false);
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

async function checkReferralGift() {
  const response = await fetch("https://prostovpn.su/api/referral_system/check_gift", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "X-Telegram-InitData": window.Telegram.WebApp.initData
      }
  });
  const data = await response.json();
 if(data == true) {
  setGift(true)
 }  
 else {
  setGift(false)
 }
}
async function getAttach() {
  const response = await fetch("https://prostovpn.su/api/subscription/check_attach", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "X-Telegram-InitData": window.Telegram.WebApp.initData
      }
  });
  const data = await response.json();
  if(data == true) {
    setAttach(true)
  }
  else {
    setAttach(false)
  }
}

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
else if(active == 'gift') {
  setActiveTarif('Подарок по реф')
  setAmount(1)
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
useLayoutEffect(()=> {
const sub =localStorage.getItem('sub');
if(sub == 'true') {
setSub(false)
}
else {
  setSub(true);
}
},[])
useEffect(()=> {
setTimeout(()=> {
  getAttach()
checkReferralGift()
},1000)
},[])
    return(
      <div className="max-w-[350px] w-full mx-auto mt-[10px]">
        <div className="text-white font-[600] text-[24px]">Выберите подписку</div>
        <div className=" flex flex-col gap-[5px]">

        {sub == true && <svg onClick={()=> {
            setActive(gift == true ?  'gift':'probni')
        }} className="mx-auto max-w-[350px] w-full h-[auto] mt-[10px]"  viewBox="0 0 350 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="350" height="62" rx="20" fill={ active =='probni' || active == 'gift' ?'#C4FF35' : '#BBF6E2'}/>
<text fill="black" x="38" font-size="18" y="36" font-weight="300">Пробный период / {gift == true ? '7 дней' : '3 дня'} за 1 рубль</text>

</svg>}  
          <svg className="mx-auto max-w-[350px] w-full h-[auto] mt-[10px]" viewBox="0 0 350 245" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="Tarif"  d="M0 20C0 8.95431 8.95431 0 20 0H168L168 19C168 21.7614 170.239 24 173 24H175C177.761 24 180 26.2386 180 29V33C180 35.7614 177.761 38 175 38H173C170.239 38 168 40.2386 168 43L168 120H46C43.2386 120 41 122.239 41 125V127C41 129.761 38.7614 132 36 132H32C29.2386 132 27 129.761 27 127V125C27 122.239 24.7614 120 22 120H0V20Z" onClick={()=>{ 
  setActive('1')
}} fill={ active == '1' ? '#56B2E5' :'white'}/>
<text onClick={()=>{ 
  setActive('1')
}} fill="black" x="55" fontSize="18" y="50">1 месяц</text>
<text onClick={()=>{ 
  setActive('1')
}} fill="black" x="50" fontSize="28" y="90" fontWeight="500">{count == 1 ? 199 : count == 2 ? 249 : count == 3 ? 298 : 348} ₽</text>
<path className="Tarif" d="M0 225C0 236.046 8.95431 245 20 245H168V228.769C168 227.24 166.76 226 165.231 226C160.133 226 156 221.867 156 216.769V211.231C156 206.133 160.133 202 165.231 202C166.76 202 168 200.76 168 199.231L168 125H48.7692C47.2398 125 46 126.24 46 127.769C46 132.867 41.8672 137 36.7692 137H31.2308C26.1328 137 22 132.867 22 127.769C22 126.24 20.7602 125 19.2308 125H0V225Z" onClick={()=>{ 
  setActive('2')
}} fill={ active == '2' ? '#56B2E5' :'white'} />



<path  className="Tarif" d="M173 0H330C341.046 0 350 8.95431 350 20V120H308.41H308C306.343 120 305 118.657 305 117C305 112.029 300.971 108 296 108H291C286.029 108 282 112.029 282 117C282 118.657 280.657 120 279 120H173V45.9016C173 44.2991 174.299 43 175.902 43C180.927 43 185 38.9265 185 33.9016V28.0984C185 23.0735 180.927 19 175.902 19C174.299 19 173 17.7009 173 16.0984V0Z" onClick={()=>{ 
  setActive('3')
}} fill={ active == '3' ? '#56B2E5' :'white'}/>
<text onClick={()=>{ 
  setActive('3')
}}  fill="black" x="229" fontSize="18" y="50">3 месяц</text>
<text onClick={()=>{ 
  setActive('3')
}}  fill="black" x="225" fontSize="28" y="89" fontWeight="500">{ count == 1 ?549 :count ==2 ?686 : count ==3 ?823 :960} ₽</text>

<path className="Tarif" d="M173 245H330C341.046 245 350 236.046 350 225V125H305C302.239 125 300 122.761 300 120V118C300 115.239 297.761 113 295 113H292C289.239 113 287 115.239 287 118V120C287 122.761 284.761 125 282 125H173V201C173 204.314 170.314 207 167 207C163.686 207 161 209.686 161 213V215C161 218.314 163.686 221 167 221C170.314 221 173 223.686 173 227V245Z" onClick={()=>{ 
  setActive('4')
}} fill={ active == '4' ? '#56B2E5' :'white'}/>
<text onClick={()=>{ 
  setActive('2')
}}  fill="black" x="45" fontSize="18" y="175">6 месяцев</text>
<text onClick={()=>{ 
  setActive('2')
}} fill="black" x="48" fontSize="28" y="213" fontWeight="500">{count == 1 ?999 : count ==2 ?1249 : count == 3 ? 1498 : 1747} ₽</text>
<text onClick={()=>{ 
  setActive('4')
}} fill="black" x="243" fontSize="18" y="174">1 год</text>
<text onClick={()=>{ 
  setActive('4')
}} fill="black" x="220" fontSize="28" y="213" fontWeight="500">{count ==1 ? 1790 : count == 2 ?2237 : count == 3 ? 2683 : 3130} ₽</text>


</svg>

{attach == true && <CancelBtn/>}
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
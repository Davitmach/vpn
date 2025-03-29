"use client";
import "./style.scss";
import { useState,useEffect } from "react";

interface IBlock {
  price: number;
  date: string;
  totalTime: string;
  check:string

}
interface IDeposit {
  earn:number,
  tarif:string,
  user:string,
  amount:number,
  percent:string
}

export const Block = (props: IBlock) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    if (props.check) {
      window.location.href = props.check; 
    }
  };

  return (
    <div className="flex w-full items-center justify-between border-b border-b-[#EFEFEF] py-[10px]">
      <div>
        <div className="text-[16px] ">{props.price} рублей</div>
        <div className="text-[16px] font-[400]">{`<<${props.totalTime}>>`}</div>
      </div>
      <div>
        <div>{props.date}</div>
        <div className="flex items-center justify-end gap-[10px]">
          <div className="font-[400] text-[16px] text-[#56B2E5]">Чек</div>
          <div>
            {" "}
            <svg
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
                height={"11"}
                rx="1.5"
                fill={isCopied ? "" : "#56B2E5"}
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
                fill={isCopied ? "black" : ""}
                style={{
                  transition: "width 0.2s, height 0.2s",
                  position: "absolute",
                  right: 0,
                  transform: "translateX(0)",
                  bottom: 0,
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export const DepositBlock = (props:IDeposit)=> {
  return(
<div className="flex w-full items-center justify-between border-b border-b-[#EFEFEF] py-[10px]">
      <div>
        <div className="text-[16px] text-[#56B2E5] ">{props.earn} рублей</div>
        <div className="text-[16px] font-[400]">{`${props.percent} от ${props.amount}`}</div>
      </div>
      <div className="flex flex-col items-end">
        <div className="inline-flex">от {props.user}</div>
        <div className="flex items-center justify-end gap-[10px]">{`Тариф <<${props.tarif}>>  ` }</div>
      </div>
    </div>
  )
}
export const Tranzakcia = () => {
  interface Trans {
    amount:number 
    cheque: string
    date_start: string
    period:string
    }
  const [acitve, setActive] = useState(false);
  const [transactions, setTransactions] = useState<Trans[]>([]);
  async function getTransactions() {

    
    const response = await fetch("https://prostovpn.su/api/subscription/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Telegram-InitData": window.Telegram.WebApp.initData,
      },
    });
    const data = await response.json();
    console.log(data,'транзакций');
    
    setTransactions(data);
  }
  useEffect(() => {
   
    setTimeout(() => {
      getTransactions();
    }, 1000);
    
  }, []);
  return (
    <div className="bg-white rounded-[20px] p-[20px] max-w-[350px] w-full mx-auto">
      <div className="flex w-full items-center justify-between">
        <div className="font-[700] text-[18px]">История транзакций</div>
        
        <div>
          <svg
            style={{
              transform: acitve == true ? "rotate(180deg)" : "rotate(0deg)",
              transition: ".2s",
            }}
            onClick={() => {
              setActive((prev) => !prev);
            }}
            className={`cursor-pointer`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.29311 17.7784C9.68364 18.1689 10.3168 18.1689 10.7073 17.7784L17.0713 11.4145C17.4618 11.0239 17.4618 10.3908 17.0713 10.0002C16.6808 9.60972 16.0476 9.60972 15.6571 10.0002L10.0002 15.6571L4.34337 10.0002C3.95284 9.60972 3.31968 9.60972 2.92915 10.0002C2.53863 10.3908 2.53863 11.0239 2.92915 11.4145L9.29311 17.7784ZM9.00022 2.92918L9.00022 17.0713L11.0002 17.0713L11.0002 2.92918L9.00022 2.92918Z"
              fill={`${acitve == true ? "black" : "#56B2E5"} `}
            />
          </svg>
        </div>
      </div>
      <div
        style={{ transition: ".2s" }}
        className={`overflow-y-auto duration-[700] ${
          acitve == true ? "h-[200px]" : "h-[0]"
        }`}
      >
        {/* {JSON.stringify(transactions)} */}
        {transactions  && (
          transactions.map((transaction, index) => (
            <Block
              key={index}
             price={transaction.amount}
      check={transaction.cheque}
      date={transaction.date_start}
      totalTime={transaction.period}
            />
          ))
        ) }

      </div>
    </div>
  );
};

 export const About = () => {
  const [acitve, setActive] = useState(false);
  return (
    <div className="bg-white rounded-[20px] p-[20px] max-w-[350px] w-full mx-auto">
      <div className="flex w-full items-center justify-between">
        <div className="font-[700] text-[18px]">Подробнее о программе</div>
        <div>
          <svg
            style={{
              transform: acitve == true ? "rotate(180deg)" : "rotate(0deg)",
              transition: ".2s",
            }}
            onClick={() => {
              setActive((prev) => !prev);
            }}
            className={`cursor-pointer`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.29311 17.7784C9.68364 18.1689 10.3168 18.1689 10.7073 17.7784L17.0713 11.4145C17.4618 11.0239 17.4618 10.3908 17.0713 10.0002C16.6808 9.60972 16.0476 9.60972 15.6571 10.0002L10.0002 15.6571L4.34337 10.0002C3.95284 9.60972 3.31968 9.60972 2.92915 10.0002C2.53863 10.3908 2.53863 11.0239 2.92915 11.4145L9.29311 17.7784ZM9.00022 2.92918L9.00022 17.0713L11.0002 17.0713L11.0002 2.92918L9.00022 2.92918Z"
              fill={`${acitve == true ? "black" : "#56B2E5"} `}
            />
          </svg>
        </div>
      </div>
      <div
        style={{ transition: ".2s" }}
        className={`tranzakcia_about_info overflow-hidden duration-[700] ${
          acitve == true ? "h-[396px]" : "h-[0]"
        }`}
      >
        Получай до 50% от подписок друзей! <br />
        <br />
        1) Пригласи друзей → получи деньги <br /> 2) Следи за своим прогрессом в
        боте <br />
        3) Поднимайся в рейтинге и получай больше бонусов
        <br />
        <br />
        Вывод денег на карту от 2000₽ (раз в неделю).
        <br />
        <br />
        Уровни:
        <br />
        <br />
        0-10 рефералов - 15% <br /> 10-100 рефералов - 20% <br />
        100-500 - 35% <br />
        500+ - 50%
      </div>
    </div>
  );
};


export const Deposit = ()=> {
  interface Dep {
    username: string,
        tariff:string,
        earned: number,
        amount: number,
        percentage_income: string
  }
  const [acitve, setActive] = useState(false);
  const [transactions, setTransactions] = useState<Dep[]>([]);
  async function getTransactions() {

    
    const response = await fetch("https://prostovpn.su/api/referral_system/accrual_history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Telegram-InitData": window.Telegram.WebApp.initData,
      },
    });
    const data = await response.json();
    console.log(data,'начисления');
    
    setTransactions(data);
  }
  useEffect(() => {
   
    setTimeout(() => {
      getTransactions();
    }, 1000);
    
  }, []);
    return(
      <div className="bg-white rounded-[20px] p-[20px] max-w-[350px] w-full mx-auto">
      <div className="flex w-full items-center justify-between">
        <div className="font-[700] text-[18px]">История начислений</div>
        <div>
          <svg
            style={{
              transform: acitve == true ? "rotate(180deg)" : "rotate(0deg)",
              transition: ".2s",
            }}
            onClick={() => {
              setActive((prev) => !prev);
            }}
            className={`cursor-pointer`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.29311 17.7784C9.68364 18.1689 10.3168 18.1689 10.7073 17.7784L17.0713 11.4145C17.4618 11.0239 17.4618 10.3908 17.0713 10.0002C16.6808 9.60972 16.0476 9.60972 15.6571 10.0002L10.0002 15.6571L4.34337 10.0002C3.95284 9.60972 3.31968 9.60972 2.92915 10.0002C2.53863 10.3908 2.53863 11.0239 2.92915 11.4145L9.29311 17.7784ZM9.00022 2.92918L9.00022 17.0713L11.0002 17.0713L11.0002 2.92918L9.00022 2.92918Z"
              fill={`${acitve == true ? "black" : "#56B2E5"} `}
            />
          </svg>
        </div>
      </div>
      <div
        style={{ transition: ".2s" }}
        className={`overflow-hidden duration-[700] ${
          acitve == true ? "h-[200px]" : "h-[0]"
        }`}
      >
             {transactions  && (
          transactions.map((transaction, index) => (
            <DepositBlock key={index} user={transaction.username} tarif={transaction.tariff} amount={transaction.amount} earn={transaction.earned} percent={transaction.percentage_income} />
          ))
        ) }
     
      </div>
    </div>
    )
}

export const Top = ()=> {
  const [acitve, setActive] = useState(false);
    return(
      <div className="bg-white rounded-[20px] p-[20px] max-w-[350px] w-full mx-auto">
      <div className="flex w-full items-center justify-between">
        <div className="font-[700] text-[18px]">ТОП-10</div>
        <div>
          <svg
            style={{
              transform: acitve == true ? "rotate(180deg)" : "rotate(0deg)",
              transition: ".2s",
            }}
            onClick={() => {
              setActive((prev) => !prev);
            }}
            className={`cursor-pointer`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.29311 17.7784C9.68364 18.1689 10.3168 18.1689 10.7073 17.7784L17.0713 11.4145C17.4618 11.0239 17.4618 10.3908 17.0713 10.0002C16.6808 9.60972 16.0476 9.60972 15.6571 10.0002L10.0002 15.6571L4.34337 10.0002C3.95284 9.60972 3.31968 9.60972 2.92915 10.0002C2.53863 10.3908 2.53863 11.0239 2.92915 11.4145L9.29311 17.7784ZM9.00022 2.92918L9.00022 17.0713L11.0002 17.0713L11.0002 2.92918L9.00022 2.92918Z"
              fill={`${acitve == true ? "black" : "#56B2E5"} `}
            />
          </svg>
        </div>
      </div>
      <div
        style={{ transition: ".2s" }}
        className={`overflow-hidden duration-[700] flex flex-col gap-[10px] ${
          acitve == true ? "h-[240px]" : "h-[0]"
        }`}
      >
     <div  className="w-full flex items-center justify-between">
      <div className="text-[#56B2E5] text-[18px]">krutoiitip</div>
      <div className="text-[#56B2E5] text-[18px]">1 место</div>
     </div>
     <div className="w-full flex items-center justify-between">
      <div className="text-[#FFD7F1] text-[18px]">krutoiitip</div>
      <div className="text-[#FFD7F1] text-[18px]">2 место</div>
     </div>
     <div className="w-full flex items-center justify-between">
      <div className="text-[#C4FF35] text-[18px]">krutoiitip</div>
      <div className="text-[#C4FF35] text-[18px]">3 место</div>
     </div>
     <div className="w-full flex items-center justify-between">
      <div className="text-[16px] font-[900]">krutoiitip</div>
      <div className="text-[16px] font-[900]">230 место</div>
     </div>
     <div className="w-full flex items-center justify-between">
      <div className="text-[16px] font-[400]">Для топ-200 </div>
      <div className="text-[16px] font-[400]">пригласи ещё 5 друзей</div>
     </div>
     <div className="text-[#CCCCCC] text-[16px]">Топ-10 рефоводов получают +10% к выплатам еженедельно!</div>

      </div>
    </div>
    )
}
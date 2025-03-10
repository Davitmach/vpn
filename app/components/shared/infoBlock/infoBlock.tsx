interface IInfoBlock {
type:'eco'|'trial',
year?:boolean,
tarif?:number
}
export const Infoblock = (props:IInfoBlock)=> {
if(props.type == 'eco') {
    return(
        <div className="w-full flex flex-col mt-[20px]">
            <div className="text-white font-[600] text-[24px]">Экономия в месяц</div>
            <div className="w-full flex flex-col gap-[10px] mt-[10px]">
                <div className="w-full flex justify-between">
                    <div className="font-[400] text-white text-[18px]">выбранный тариф</div>
                    <div className="font-[400] text-white text-[18px]">{props.tarif}%</div>
                </div>
                {props.year == true &&   <div className="w-full flex justify-between">
                    <div className="font-[400] text-white text-[18px]">с подпиской на 1 год</div>
                    <div className="font-[400] text-white text-[18px]">25%</div>
                </div> } 
             
            </div>
        </div>
    )
}
else {
    return(
        <div className="w-full flex flex-col mt-[20px]">
            <div className="text-white font-[600] text-[24px]">Пробная подписка</div>
            <div className="w-full flex flex-col gap-[10px] mt-[10px]">
                <div className="w-full flex justify-between">
                    <div className="font-[400] text-white text-[18px]">Первые 7 дней    </div>
                    <div className="font-[400] text-white text-[18px]">Бесплатно</div>
                </div>
                <div className="w-full flex justify-between">
                    <div className="font-[400] text-white text-[18px]">далее в месяц</div>
                    <div className="font-[400] text-white text-[18px]">199 рублей</div>
                </div>
            </div>
        </div>
    )
}
}
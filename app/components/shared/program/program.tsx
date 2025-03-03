import './style.scss';

export const Program = ()=> {
    return(
        <>
        <div className='max-w-[350px] mx-auto h-auto w-full bg-white rounded-[20px] p-[20px] flex flex-col gap-[10px]'>
            <div className='font-[700] text-[24px] '>Реферальная программа</div>
            <div className='flex item-center justify-between w-full'>
                <div className='flex  item-center justify-center gap-[5px]'>
                    <div className='text-[#56B2E5] font-[700] text-[18px]'>45</div>
                    <div className='flex items-center justify-center'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="10" cy="5.62821" rx="5" ry="5.12821" fill="#56B2E5"/>
<path d="M10 12.8077C11.2726 12.8077 14.9743 12.8596 17.4987 13.5579C19.4693 14.103 18.7552 15.9979 16.857 16.7572L13.7139 18.0144C11.3298 18.9681 8.6702 18.9681 6.28609 18.0144L3.14305 16.7572C1.24475 15.9979 0.530736 14.103 2.50126 13.5579C5.02566 12.8596 8.72742 12.8077 10 12.8077Z" fill="#56B2E5"/>
</svg>
</div>
                </div>
                <div className='text-[#56B2E5] font-[700] text-[18px]'>с подписки - 15%</div>
            </div>
            <div className='relative'>
                <div className='bg-[#EFEFEF] rounded-[30px] w-full h-[30px]'></div>
                <div className='text-nowrap text-center absolute top-[0] left-[0] w-[50%] font-[400] text-[16px] bg-[#BBF6E2] inline-flex rounded-[30px] py-[4px] px-[20px]'>1 уровень</div>
            </div>
            <div className='w-full flex item-center justify-between'>
                <div className='flex items-center justify-center gap-[5px]'>
                    <div className='text-black font-[400] text-[18px]'>45</div>
                    <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="10" cy="5.62821" rx="5" ry="5.12821" fill="black"/>
<path d="M10 12.8077C11.2726 12.8077 14.9743 12.8596 17.4987 13.5579C19.4693 14.103 18.7552 15.9979 16.857 16.7572L13.7139 18.0144C11.3298 18.9681 8.6702 18.9681 6.28609 18.0144L3.14305 16.7572C1.24475 15.9979 0.530736 14.103 2.50126 13.5579C5.02566 12.8596 8.72742 12.8077 10 12.8077Z" fill="black"/>
</svg>

</div>
                </div>
                <div className='text-black font-[400] text-[18px]'>до следующего уровня</div>
            </div>
        </div>
        </>
    )
}
'use client';
import {  useEffect, useState } from 'react';
import './style.scss'
import anime from "animejs";
import { useRouter } from 'next/navigation';
import { Connect } from '../connect/connect';
const Data = {
    pazzle1:{
        title:'НАСТРОЙКА НА MACOS',
        description:'3 минуты и VPN будет готов к использованию на этом устройстве'
    },
    cloud:{
        title:'ПОДКЛЮЧЕНИЕ',
        description:'Установите приложение v2RayTun и вернитесь к этому экрану'
    },
    pazzle2:{
        title:'ПОСЛЕДНИЙ ШАГ',
        description:'Добавьте вашу подписку в v2RayTun и prosto.vpn будет готов к подключению'
    }
}
const Pazzle = ()=> {
    return(
        <div className='h-full relative flex flex-col items-center justify-center'>
        <svg className='First_pazzle' width="132" height="128" viewBox="0 0 132 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className='AnimBg' d="M18.1172 96.6148C20.976 107.284 31.9428 113.616 42.6121 110.757L56.1351 107.133C58.8024 106.419 61.5441 108.002 62.2588 110.669L62.7764 112.601C63.4911 115.268 66.2328 116.851 68.9001 116.136L72.7639 115.101C75.4312 114.386 77.0141 111.645 76.2994 108.977L75.7817 107.046C75.067 104.378 76.65 101.637 79.3173 100.922L109.261 92.8984C119.93 90.0396 126.262 79.0728 123.403 68.4035L110.462 20.1072C107.603 9.4379 96.6366 3.10625 85.9673 5.96509L19.3184 23.8236C8.64906 26.6824 2.31742 37.6492 5.17625 48.3185L18.1172 96.6148Z" fill="white"/>
    <path d="M60.722 47.7126C59.997 45.3662 60.0199 39.6187 65.9346 37.2148C67.3743 39.7869 66.1089 46.2692 60.722 47.7126Z" fill="black"/>
    <path d="M76.5355 47.9376C71.6774 43.5918 64.7364 46.7894 62.0151 49.8717C51.4562 47.6585 47.5195 55.6608 49.4524 62.8746C51.3854 70.0885 57.1288 74.7126 59.9935 76.5783C62.8582 78.444 65.3168 76.2725 66.8717 75.3516C68.4267 74.4307 67.8804 73.2324 74.1948 73.8936C79.2463 74.4226 80.9624 65.8799 81.189 61.5424C79.3329 61.1993 75.7798 59.5405 74.8497 56.0695C73.6871 51.7307 75.6949 49.0033 76.5355 47.9376Z" fill="black"/>
    </svg>
    <svg className='Second_pazzle' width="157" height="139" viewBox="0 0 157 139" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className='AnimBg2' d="M26.6711 19.5288C30.177 9.05429 41.5103 3.40506 51.9849 6.91093L106.256 25.0758C107.707 25.5612 108.489 27.1305 108.004 28.5808C106.385 33.4152 108.993 38.646 113.827 40.2641L119.079 42.022C123.914 43.6401 129.144 41.0327 130.763 36.1983C131.248 34.748 132.817 33.9658 134.268 34.4512L137.331 35.4767C147.806 38.9825 153.455 50.3159 149.949 60.7905L133.841 108.916C130.467 118.998 119.558 124.435 109.477 121.061L96.9118 116.856C93.7695 115.804 90.3695 117.499 89.3177 120.641C88.266 123.783 84.8659 125.478 81.7236 124.426L79.827 123.792C76.6846 122.74 74.9899 119.34 76.0416 116.197C77.0934 113.055 75.3986 109.655 72.2562 108.603L23.4192 92.2573C12.9446 88.7514 7.29538 77.418 10.8012 66.9435L26.6711 19.5288Z" fill="white"/>
    <path d="M46.1197 56.6958L44.6571 61.0655L43.5647 60.6999L46.8402 50.9135L47.9326 51.2791L47.6381 52.1591C48.6913 51.4824 49.6828 51.6962 50.1379 51.8485C52.1104 52.5087 52.6544 54.513 52.0856 56.2123C51.5067 57.942 49.876 59.1341 47.9642 58.4942C46.9476 58.154 46.3869 57.4601 46.1197 56.6958ZM48.1375 57.4724C49.412 57.899 50.5413 57.0959 50.9628 55.8365C51.4808 54.2889 50.7081 53.1192 49.6915 52.779C48.675 52.4387 47.3184 52.9126 46.8106 54.4299C46.3789 55.7196 46.8478 57.0407 48.1375 57.4724ZM52.7191 59.8832L54.8266 53.5866L55.919 53.9522L55.6905 54.635C55.8526 54.5036 56.5464 53.9935 57.3961 54.2778C57.7299 54.3896 58.0534 54.6328 58.2808 54.8608L57.4348 55.6744C57.2479 55.4262 57.0356 55.3045 56.8687 55.2486C56.4286 55.1014 56.0946 55.192 55.8566 55.3486C55.5933 55.5304 55.269 55.8943 54.9237 56.9261L53.8115 60.2489L52.7191 59.8832ZM59.7208 62.4292C57.809 61.7893 56.85 59.9161 57.4899 58.0043C58.1298 56.0926 60.0131 55.1538 61.94 55.7987C63.867 56.4437 64.8057 58.327 64.1659 60.2388C63.526 62.1505 61.6326 63.0691 59.7208 62.4292ZM61.615 56.7698C60.4619 56.3838 59.1256 56.8477 58.6127 58.3801C58.0947 59.9277 58.923 61.0823 60.0458 61.4581C61.1838 61.839 62.5302 61.3954 63.0431 59.863C63.5611 58.3154 62.7681 57.1557 61.615 56.7698ZM70.0621 59.7827L69.0095 59.9534C68.9797 59.5385 68.7525 59.1587 68.3428 59.0216C67.9483 58.8896 67.508 58.9953 67.3455 59.4808C67.1931 59.936 67.4509 60.1741 68.0624 60.7162C68.8458 61.4003 69.1742 61.8307 69.3154 62.2154C69.4768 62.6406 69.4257 62.9948 69.3089 63.3437C68.8671 64.6638 67.6624 65.0873 66.4486 64.681C66.1906 64.5947 64.7897 64.092 64.7868 62.3363L65.8596 62.2567C65.8692 62.6311 65.9998 63.451 66.7888 63.715C67.5019 63.9537 67.9982 63.5293 68.1557 63.059C68.3537 62.4672 67.9949 62.1278 67.4895 61.6718C66.8426 61.0841 66.4383 60.6788 66.2669 60.2334C66.1257 59.8486 66.1817 59.53 66.2884 59.2113C66.6591 58.1037 67.6512 57.7103 68.7133 58.0658C69.0471 58.1775 69.922 58.5378 70.0621 59.7827ZM74.1167 61.1566L73.0243 60.791L71.2519 66.0862L70.1595 65.7206L71.9318 60.4253L71.2642 60.2019L71.5994 59.2005L72.267 59.4239L73.0288 57.148L74.1212 57.5137L73.3594 59.7896L74.4519 60.1552L74.1167 61.1566ZM76.2567 67.9638C74.3449 67.3239 73.3859 65.4507 74.0257 63.5389C74.6656 61.6272 76.549 60.6884 78.4759 61.3333C80.4028 61.9783 81.3416 63.8616 80.7017 65.7734C80.0619 67.6852 78.1684 68.6037 76.2567 67.9638ZM78.1509 62.3044C76.9978 61.9184 75.6614 62.3823 75.1485 63.9147C74.6305 65.4623 75.4589 66.617 76.5817 66.9928C77.7196 67.3736 79.066 66.93 79.5789 65.3976C80.0969 63.85 79.304 62.6903 78.1509 62.3044ZM81.4733 68.8325C81.6104 68.4228 82.0762 68.1906 82.4859 68.3278C82.8955 68.4649 83.1277 68.9306 82.9906 69.3403C82.8535 69.75 82.3877 69.9821 81.978 69.845C81.5684 69.7079 81.3362 69.2421 81.4733 68.8325ZM85.9804 64.0139L87.1942 64.4201L87.6537 69.2982L90.957 65.6796L92.1708 66.0858L86.831 71.7562L85.9804 64.0139ZM92.6008 72.2532L91.1383 76.6229L90.0458 76.2573L93.3214 66.4709L94.4138 66.8365L94.1193 67.7166C95.1725 67.0399 96.1639 67.2536 96.6191 67.4059C98.5916 68.0661 99.1355 70.0704 98.5667 71.7698C97.9878 73.4994 96.3571 74.6915 94.4454 74.0516C93.4288 73.7114 92.868 73.0175 92.6008 72.2532ZM94.6187 73.0298C95.8932 73.4564 97.0225 72.6533 97.444 71.394C97.962 69.8463 97.1893 68.6766 96.1727 68.3364C95.1561 67.9961 93.7996 68.4701 93.2917 69.9873C92.8601 71.277 93.329 72.5981 94.6187 73.0298ZM99.2003 75.4406L101.308 69.144L102.4 69.5096L102.156 70.2379C102.44 70.046 103.21 69.6118 104.257 69.9622C105 70.2111 105.581 70.743 105.773 71.4314C105.934 72.0084 105.807 72.5395 105.573 73.2374L104.268 77.1368L103.175 76.7712L104.47 72.9021C104.597 72.5228 104.714 72.0727 104.568 71.6525C104.447 71.3083 104.174 71.0145 103.689 70.852C103.309 70.7251 102.864 70.6942 102.419 70.9668C101.826 71.3253 101.547 72.0586 101.395 72.5138L100.293 75.8063L99.2003 75.4406Z" fill="black"/>
    </svg>
    <svg   className='Three_pazzle' width="143" height="104" viewBox="0 0 143 104" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className='AnimBg3' d="M140.722 34.2257C141.904 23.2435 133.959 13.3823 122.977 12.2002L67.0693 6.18242C65.5487 6.01875 64.1833 7.11877 64.0196 8.63939C63.4741 13.7081 58.9227 17.3749 53.854 16.8293L49.3416 16.3436C44.2729 15.798 40.6061 11.2467 41.1517 6.17795C41.3154 4.65732 40.2154 3.29193 38.6948 3.12826L29.517 2.14039C18.5348 0.958287 8.67359 8.90289 7.49149 19.8851L2.14053 69.598C0.958426 80.5802 8.90303 90.4414 19.8853 91.6235L95.4488 99.757L113.345 101.683C124.328 102.865 134.189 94.9208 135.371 83.9386L140.722 34.2257Z" fill="white"/>
    <path d="M37.9293 46.6564L39.2019 46.7934L40.6951 51.46L43.1471 47.218L44.4198 47.355L40.4177 54.0371L37.9293 46.6564ZM51.4855 54.7939L44.6291 54.0559L48.9759 50.0018C49.2806 49.7127 50.0872 48.9467 50.3829 48.5923C50.9337 47.9596 51.0999 47.4625 51.1461 47.033C51.2745 45.8399 50.5097 44.8725 49.2529 44.7372C48.5053 44.6567 47.8489 44.924 47.3861 45.4857C47.1451 45.7816 46.975 46.1656 46.9009 46.7048L45.7237 46.5781C45.8861 45.5174 46.2904 44.9011 46.7554 44.4684C47.2556 44.0073 48.0649 43.515 49.3853 43.6572C51.2624 43.8592 52.5185 45.3462 52.3216 47.1756C52.2446 47.8915 51.9676 48.5214 51.2336 49.3597C50.7214 49.9322 50.0785 50.5228 49.5959 50.9697L47.1159 53.2293L51.6019 53.7121L51.4855 54.7939ZM55.3854 44.48L57.0876 44.6632C57.8035 44.7403 58.8642 44.9027 59.6014 45.5292C60.1773 46.0096 60.6308 46.8791 60.5092 48.0086C60.3346 49.6313 59.1403 50.7096 57.5216 50.648L60.3839 55.7517L58.9521 55.5976L56.2228 50.6048L55.9205 50.5723L55.4205 55.2174L54.2433 55.0907L55.3854 44.48ZM56.4428 45.7203L56.0335 49.5223L56.7812 49.6028C58.2448 49.7603 59.1951 49.1546 59.3286 47.9137C59.392 47.3251 59.2803 46.7177 58.6533 46.264C58.2052 45.9422 57.6677 45.8521 57.1586 45.7973L56.4428 45.7203ZM67.4551 50.7839L67.5561 49.8453L68.7015 49.9686L67.9909 56.5705L66.8455 56.4472L66.9449 55.5245C66.51 55.9766 65.7273 56.5199 64.566 56.3949C62.8957 56.2152 61.4793 54.8719 61.7293 52.5493C61.9742 50.2744 63.6281 49.2616 65.3143 49.4431C66.587 49.5801 67.1957 50.3537 67.4551 50.7839ZM65.332 50.4749C64.2025 50.3533 63.0795 51.0693 62.9065 52.676C62.7541 54.0918 63.4348 55.2433 64.8029 55.3905C66.2028 55.5412 67.1232 54.4655 67.2636 53.1611C67.4468 51.4589 66.3501 50.5845 65.332 50.4749ZM69.7505 60.4611L72.311 56.4079L69.9164 50.0994L71.2209 50.2398L73.0508 55.2162L75.7069 50.7227L76.9796 50.8596L71.0232 60.5981L69.7505 60.4611ZM83.1797 48.5982L80.6026 48.3208L79.5804 57.8179L78.4032 57.6912L79.4254 48.1941L76.8483 47.9167L76.9681 46.8031L83.2996 47.4846L83.1797 48.5982ZM84.1648 51.633L83.7505 55.4828C83.7008 55.9441 83.6426 56.485 83.9162 56.9329C84.0672 57.1744 84.3864 57.4984 85.0227 57.5669C85.659 57.6354 86.0398 57.3867 86.2388 57.1829C86.6015 56.8035 86.6597 56.2626 86.7094 55.8013L87.1237 51.9515L88.2691 52.0748L87.8411 56.0518C87.7537 56.8632 87.6091 57.4591 87.0225 57.9753C86.3671 58.5324 85.5654 58.6553 84.9131 58.5851C84.2609 58.5148 83.5037 58.2241 82.9818 57.5404C82.5185 56.9112 82.504 56.2981 82.5914 55.4868L83.0195 51.5098L84.1648 51.633ZM89.7192 58.9093L90.4298 52.3074L91.5752 52.4307L91.493 53.1943C91.7289 52.9461 92.3877 52.3572 93.4853 52.4754C94.2648 52.5593 94.9465 52.9545 95.2808 53.5859C95.5618 54.115 95.5513 54.661 95.4725 55.3928L95.0325 59.4812L93.8871 59.3579L94.3237 55.3013C94.3665 54.9036 94.3844 54.4388 94.1516 54.0598C93.9597 53.7494 93.6303 53.5209 93.1212 53.4661C92.7235 53.4233 92.282 53.4884 91.9051 53.8501C91.4032 54.3272 91.2875 55.1032 91.2361 55.5805L90.8645 59.0325L89.7192 58.9093Z" fill="black"/>
    </svg>
    
        </div>
    )
}
const Cloud = ()=> {
    return(
        <div className='h-full relative flex flex-col items-center justify-center'>
      <svg width="227" height="150" viewBox="0 0 227 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className='Cloud' fillRule="evenodd" clipRule="evenodd" d="M50.9353 149.035C50.9353 149.035 50.9349 149.034 50.9344 149.034C50.7933 149.035 50.6521 149.036 50.5108 149.036C22.6145 149.036 0 126.422 0 98.5252C0 70.6288 22.6145 48.0144 50.5108 48.0144C52.0069 48.0144 53.4878 48.0794 54.9508 48.2068C60.7713 48.7137 66.6108 45.3692 68.8355 39.9668C78.4945 16.5116 101.578 0 128.518 0C161.292 0 188.358 24.4371 192.49 56.0843C193.093 60.7089 196.324 64.6385 200.618 66.4575C216.132 73.0285 227 88.2597 227 106C227 128.931 208.841 147.67 185.963 148.932C185.935 148.934 185.914 148.957 185.914 148.984C185.914 149.013 185.89 149.036 185.862 149.036H50.9361C50.9356 149.036 50.9353 149.036 50.9353 149.035Z" fill="#BBF6E2"/>
</svg>
<svg className='Galochka' width="66" height="45" viewBox="0 0 66 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  d="M5 18.5L26 39.5L60.5 5" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

<svg className='Arrow' width="82" height="99" viewBox="0 0 82 99" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-outside-1_125_1448" maskUnits="userSpaceOnUse" x="0" y="0.260498" width="82" height="99" fill="black">
<rect fill="white" y="0.260498" width="82" height="99"/>
<path fillRule="evenodd" clipRule="evenodd" d="M55.0024 12.2605C55.0024 11.1559 54.107 10.2605 53.0024 10.2605H29.0024C27.8979 10.2605 27.0024 11.1559 27.0024 12.2605V57.2451C27.0024 58.3497 26.107 59.2451 25.0024 59.2451H13.004C11.1817 59.2451 10.3088 61.4833 11.65 62.7171L39.6483 88.4723C40.4137 89.1763 41.5909 89.1763 42.3563 88.4723L70.3546 62.7171C71.6957 61.4833 70.8229 59.2451 69.0006 59.2451H57.0024C55.8979 59.2451 55.0024 58.3497 55.0024 57.2451V12.2605Z"/>
</mask>
<path fillRule="evenodd" clipRule="evenodd" d="M55.0024 12.2605C55.0024 11.1559 54.107 10.2605 53.0024 10.2605H29.0024C27.8979 10.2605 27.0024 11.1559 27.0024 12.2605V57.2451C27.0024 58.3497 26.107 59.2451 25.0024 59.2451H13.004C11.1817 59.2451 10.3088 61.4833 11.65 62.7171L39.6483 88.4723C40.4137 89.1763 41.5909 89.1763 42.3563 88.4723L70.3546 62.7171C71.6957 61.4833 70.8229 59.2451 69.0006 59.2451H57.0024C55.8979 59.2451 55.0024 58.3497 55.0024 57.2451V12.2605Z" fill="white"/>
<path d="M70.3546 62.7171L77.1247 70.0768L70.3546 62.7171ZM39.6483 88.4723L46.4184 81.1125L39.6483 88.4723ZM42.3563 88.4723L35.5862 81.1125L42.3563 88.4723ZM11.65 62.7171L4.8799 70.0768L11.65 62.7171ZM29.0024 20.2605H53.0024V0.260498H29.0024V20.2605ZM37.0024 57.2451V12.2605H17.0024V57.2451H37.0024ZM13.004 69.2451H25.0024V49.2451H13.004V69.2451ZM46.4184 81.1125L18.4201 55.3573L4.8799 70.0768L32.8782 95.832L46.4184 81.1125ZM63.5845 55.3573L35.5862 81.1125L49.1264 95.832L77.1247 70.0768L63.5845 55.3573ZM57.0024 69.2451H69.0006V49.2451H57.0024V69.2451ZM45.0024 12.2605V57.2451H65.0024V12.2605H45.0024ZM57.0024 49.2451C61.4207 49.2451 65.0024 52.8268 65.0024 57.2451H45.0024C45.0024 63.8725 50.375 69.2451 57.0024 69.2451V49.2451ZM77.1247 70.0768C85.1717 62.6745 79.9344 49.2451 69.0006 49.2451V69.2451C61.7113 69.2451 58.2198 60.2922 63.5845 55.3573L77.1247 70.0768ZM32.8782 95.832C37.4705 100.056 44.5341 100.056 49.1264 95.832L35.5862 81.1125C38.6478 78.2962 43.3568 78.2962 46.4184 81.1125L32.8782 95.832ZM13.004 49.2451C2.07013 49.2451 -3.1671 62.6745 4.8799 70.0768L18.4201 55.3573C23.7848 60.2922 20.2933 69.2451 13.004 69.2451V49.2451ZM17.0024 57.2451C17.0024 52.8268 20.5842 49.2451 25.0024 49.2451V69.2451C31.6299 69.2451 37.0024 63.8725 37.0024 57.2451H17.0024ZM53.0024 20.2605C48.5842 20.2605 45.0024 16.6788 45.0024 12.2605H65.0024C65.0024 5.63308 59.6299 0.260498 53.0024 0.260498V20.2605ZM29.0024 0.260498C22.375 0.260498 17.0024 5.63307 17.0024 12.2605H37.0024C37.0024 16.6788 33.4207 20.2605 29.0024 20.2605V0.260498Z" fill="#393957" mask="url(#path-1-outside-1_125_1448)"/>
</svg>


    
        </div>
    )
}
const Pazzle2 = ()=> {
    return(
      <div className='h-full flex items-center justify-center'>
        <div className=' h-[400px] relative flex flex-col items-center justify-center  '>
<svg className='Purple_block flex-shrink-0' width="130" height="101" viewBox="0 0 130 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M130 20C130 8.9543 121.046 0 110 0L20 0C8.9543 0 0 8.95431 0 20L0 70C0 81.0457 8.95431 90 20 90H69.5C72.5376 90 75 92.4624 75 95.5C75 98.5376 77.4624 101 80.5 101H83.5C86.5376 101 89 98.5376 89 95.5C89 92.4624 91.4624 90 94.5 90H110C121.046 90 130 81.0457 130 70V20Z" fill="#FFD7F1"/>
<path d="M34.24 49.072V53.68H33.088V43.36H34.24V44.288C35.024 43.312 36.032 43.2 36.512 43.2C38.592 43.2 39.744 44.928 39.744 46.72C39.744 48.544 38.576 50.192 36.56 50.192C35.488 50.192 34.736 49.712 34.24 49.072ZM36.4 49.168C37.744 49.168 38.56 48.048 38.56 46.72C38.56 45.088 37.456 44.224 36.384 44.224C35.312 44.224 34.176 45.104 34.176 46.704C34.176 48.064 35.04 49.168 36.4 49.168ZM41.5099 50V43.36H42.6619V44.08C42.7739 43.904 43.2699 43.2 44.1659 43.2C44.5179 43.2 44.9019 43.328 45.1899 43.472L44.6459 44.512C44.3899 44.336 44.1499 44.288 43.9739 44.288C43.5099 44.288 43.2219 44.48 43.0459 44.704C42.8539 44.96 42.6619 45.408 42.6619 46.496V50H41.5099ZM48.9576 50.192C46.9416 50.192 45.4376 48.72 45.4376 46.704C45.4376 44.688 46.9256 43.2 48.9576 43.2C50.9896 43.2 52.4776 44.688 52.4776 46.704C52.4776 48.72 50.9736 50.192 48.9576 50.192ZM48.9576 44.224C47.7416 44.224 46.6216 45.088 46.6216 46.704C46.6216 48.336 47.7736 49.168 48.9576 49.168C50.1576 49.168 51.2936 48.32 51.2936 46.704C51.2936 45.072 50.1736 44.224 48.9576 44.224ZM57.9243 44.4L56.9803 44.896C56.8203 44.512 56.4843 44.224 56.0523 44.224C55.6363 44.224 55.2523 44.464 55.2523 44.976C55.2523 45.456 55.5723 45.6 56.3243 45.92C57.2843 46.32 57.7323 46.624 57.9883 46.944C58.2763 47.296 58.3403 47.648 58.3403 48.016C58.3403 49.408 57.3323 50.192 56.0523 50.192C55.7803 50.192 54.2923 50.16 53.7323 48.496L54.7243 48.08C54.8523 48.432 55.2363 49.168 56.0683 49.168C56.8203 49.168 57.1562 48.608 57.1562 48.112C57.1562 47.488 56.7083 47.28 56.0843 47.008C55.2843 46.656 54.7723 46.4 54.4683 46.032C54.2122 45.712 54.1643 45.392 54.1643 45.056C54.1643 43.888 54.9803 43.2 56.1003 43.2C56.4523 43.2 57.3963 43.264 57.9243 44.4ZM62.2053 44.416H61.0533V50H59.9013V44.416H59.1973V43.36H59.9013V40.96H61.0533V43.36H62.2053V44.416ZM66.3951 50.192C64.3791 50.192 62.8751 48.72 62.8751 46.704C62.8751 44.688 64.3631 43.2 66.3951 43.2C68.4271 43.2 69.9151 44.688 69.9151 46.704C69.9151 48.72 68.4111 50.192 66.3951 50.192ZM66.3951 44.224C65.1791 44.224 64.0591 45.088 64.0591 46.704C64.0591 48.336 65.2111 49.168 66.3951 49.168C67.5951 49.168 68.7311 48.32 68.7311 46.704C68.7311 45.072 67.6111 44.224 66.3951 44.224ZM71.6178 49.36C71.6178 48.928 71.9858 48.56 72.4178 48.56C72.8498 48.56 73.2178 48.928 73.2178 49.36C73.2178 49.792 72.8498 50.16 72.4178 50.16C71.9858 50.16 71.6178 49.792 71.6178 49.36ZM74.3624 43.36H75.6424L77.6264 47.84L79.6104 43.36H80.8904L77.6264 50.432L74.3624 43.36ZM83.2556 49.072V53.68H82.1036V43.36H83.2556V44.288C84.0396 43.312 85.0476 43.2 85.5276 43.2C87.6076 43.2 88.7596 44.928 88.7596 46.72C88.7596 48.544 87.5916 50.192 85.5756 50.192C84.5036 50.192 83.7516 49.712 83.2556 49.072ZM85.4156 49.168C86.7596 49.168 87.5756 48.048 87.5756 46.72C87.5756 45.088 86.4716 44.224 85.3996 44.224C84.3276 44.224 83.1916 45.104 83.1916 46.704C83.1916 48.064 84.0556 49.168 85.4156 49.168ZM90.5255 50V43.36H91.6775V44.128C91.8855 43.856 92.4775 43.2 93.5815 43.2C94.3655 43.2 95.0855 43.52 95.4855 44.112C95.8215 44.608 95.8695 45.152 95.8695 45.888V50H94.7175V45.92C94.7175 45.52 94.6855 45.056 94.4135 44.704C94.1895 44.416 93.8375 44.224 93.3255 44.224C92.9255 44.224 92.4935 44.336 92.1575 44.736C91.7095 45.264 91.6775 46.048 91.6775 46.528V50H90.5255Z" fill="black"/>
</svg>
<svg className='White_block flex-shrink-0' width="145" height="90" viewBox="0 0 145 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M145 20C145 8.9543 136.046 0 125 0H58.5385C57.1365 0 56 1.13651 56 2.53846C56 7.21164 52.2116 11 47.5385 11H40.4615C35.7884 11 32 7.21164 32 2.53846C32 1.13651 30.8635 0 29.4615 0H20C8.9543 0 0 8.95431 0 20V70C0 81.0457 8.9543 90 20 90H96H125C136.046 90 145 81.0457 145 70V20Z" fill="white"/>
<path d="M43.128 43.36H44.408L46.392 47.84L48.376 43.36H49.656L46.392 50.432L43.128 43.36ZM57.4773 50H50.5813L54.4693 45.504C54.7413 45.184 55.4613 44.336 55.7173 43.952C56.1973 43.264 56.3093 42.752 56.3093 42.32C56.3093 41.12 55.4453 40.24 54.1813 40.24C53.4293 40.24 52.8053 40.576 52.4053 41.184C52.1973 41.504 52.0693 41.904 52.0533 42.448H50.8693C50.9173 41.376 51.2533 40.72 51.6693 40.24C52.1173 39.728 52.8693 39.152 54.1973 39.152C56.0853 39.152 57.4933 40.496 57.4933 42.336C57.4933 43.056 57.2853 43.712 56.6453 44.624C56.1973 45.248 55.6213 45.904 55.1893 46.4L52.9653 48.912H57.4773V50ZM60.251 39.328H61.963C62.683 39.328 63.755 39.376 64.555 39.92C65.179 40.336 65.723 41.152 65.723 42.288C65.723 43.92 64.651 45.12 63.035 45.232L66.427 50H64.987L61.739 45.328H61.435V50H60.251V39.328ZM61.435 40.448V44.272H62.187C63.659 44.272 64.539 43.568 64.539 42.32C64.539 41.728 64.363 41.136 63.691 40.752C63.211 40.48 62.667 40.448 62.155 40.448H61.435ZM72.926 44.304V43.36H74.078V50H72.926V49.072C72.542 49.568 71.822 50.192 70.654 50.192C68.974 50.192 67.422 49.008 67.422 46.672C67.422 44.384 68.958 43.2 70.654 43.2C71.934 43.2 72.622 43.904 72.926 44.304ZM70.782 44.224C69.646 44.224 68.606 45.056 68.606 46.672C68.606 48.096 69.406 49.168 70.782 49.168C72.19 49.168 72.99 48 72.99 46.688C72.99 44.976 71.806 44.224 70.782 44.224ZM76.2439 53.68L78.3559 49.376L75.2999 43.36H76.6119L78.9639 48.112L81.1239 43.36H82.4039L77.5239 53.68H76.2439ZM88.3264 40.448H85.7344V50H84.5504V40.448H81.9584V39.328H88.3264V40.448ZM89.6306 43.36V47.232C89.6306 47.696 89.6306 48.24 89.9506 48.656C90.1266 48.88 90.4786 49.168 91.1186 49.168C91.7586 49.168 92.1106 48.88 92.2866 48.656C92.6066 48.24 92.6066 47.696 92.6066 47.232V43.36H93.7586V47.36C93.7586 48.176 93.6786 48.784 93.1506 49.36C92.5586 49.984 91.7746 50.192 91.1186 50.192C90.4626 50.192 89.6786 49.984 89.0866 49.36C88.5586 48.784 88.4786 48.176 88.4786 47.36V43.36H89.6306ZM95.9318 50V43.36H97.0838V44.128C97.2918 43.856 97.8838 43.2 98.9878 43.2C99.7718 43.2 100.492 43.52 100.892 44.112C101.228 44.608 101.276 45.152 101.276 45.888V50H100.124V45.92C100.124 45.52 100.092 45.056 99.8198 44.704C99.5958 44.416 99.2438 44.224 98.7318 44.224C98.3318 44.224 97.8998 44.336 97.5638 44.736C97.1158 45.264 97.0838 46.048 97.0838 46.528V50H95.9318Z" fill="black"/>
</svg>
<svg  className="Gray flex-shrink-0" width="71" height="83" viewBox="0 0 71 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M65.5 5V14C65.5 25.0457 56.5457 34 45.5 34H17.75C10.9845 34 5.5 39.4845 5.5 46.25V46.25C5.5 53.0155 10.9845 58.5 17.75 58.5H46.5C56.9934 58.5 65.5 67.0066 65.5 77.5V77.5" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

<svg className='Gradient_green flex-shrink-0' width="71" height="83" viewBox="0 0 71 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M65.5 5V14C65.5 25.0457 56.5457 34 45.5 34H17.75C10.9845 34 5.5 39.4845 5.5 46.25V46.25C5.5 53.0155 10.9845 58.5 17.75 58.5H46.5C56.9934 58.5 65.5 67.0066 65.5 77.5V77.5" stroke="url(#paint0_linear_125_1610)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_125_1610" x1="35.5" y1="5" x2="36" y2="107.5" gradientUnits="userSpaceOnUse">
<stop stopColor="#C4FF35"/>
<stop offset="0.742344" stopColor="#FBFFF2"/>
<stop offset="1" stopColor="white"/>
</linearGradient>
</defs>
</svg>
<svg className='Full_green flex-shrink-0' width="71" height="83" viewBox="0 0 71 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M65.5 5V14C65.5 25.0457 56.5457 34 45.5 34H17.75C10.9845 34 5.5 39.4845 5.5 46.25V46.25C5.5 53.0155 10.9845 58.5 17.75 58.5H46.5C56.9934 58.5 65.5 67.0066 65.5 77.5V77.5" stroke="url(#paint0_linear_125_1600)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_125_1600" x1="35.5" y1="5" x2="35.5" y2="106.5" gradientUnits="userSpaceOnUse">
<stop offset="0.757434" stopColor="#C4FF35"/>
<stop offset="0.905051" stopColor="white"/>
</linearGradient>
</defs>
</svg>

<div className='flex-shrink-0 Btn text-white font-[400] text-[16px] bg-[#CCCCCC] rounded-[10px] py-[10px] px-[20px] cursor-pointer'>Подключено</div>




    
        </div>
        </div>
    )
}



export const PazzleAnim = ()=> {
    const [active,setActive] = useState<number>(1);
    const [first,setFirst] = useState<boolean>(true);
    const [deeplink,setDeeplink] = useState<string>('');
    const {push} = useRouter();
    async function redirectToUrl(url:string) {
      const response = await fetch(`https://prostovpn.su/api/redirect?url=${url}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
              "X-Telegram-InitData": window.Telegram.WebApp.initData
          }
      });
      return response.json();
  }
  
    const Connect = async () => {
setTimeout(() => {
  console.log('deadaedae');
  
     // Проверяем, что WebApp API доступен
     if (window.Telegram && window.Telegram.WebApp) {
      const deeplink = "v2raytun://import/https://prostosetup.su:20196/servers/a298bb1239d04498";
      
      // Открываем ссылку через Telegram API
      Telegram.WebApp.openLink(deeplink, { try_instant_view: false });
    } else {
      console.error("Telegram WebApp API не доступен");
    }
      
}, 1000);

 
    };
  
  async function installVpn() {
    const response = await fetch("https://prostovpn.su/api/vpn/install", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Telegram-InitData": window.Telegram.WebApp.initData,
      },
    });
  
    // Возвращаем ответ в формате JSON
    const data =await response.json();
    if(data.deeplink) {
    setDeeplink(data.deeplink)
  }}
    function redirectToV2RayTun() {

      
      const checklog = localStorage.getItem('install');
      if(checklog !== 'true') { 
      const userAgent = navigator.userAgent.toLowerCase();
      if (/iphone|ipad|ipod/.test(userAgent)) {
          window.location.href = "https://apps.apple.com/us/app/v2raytun/id6476628951";
      } 
      else if (/android/.test(userAgent)) {
      
  redirectToUrl('market://details?id=com.v2raytun.android')
      
      }
       else if (/win/.test(userAgent)) {
    
    
          window.location.href = "https://github.com/2dust/v2rayN";
      } else if (/mac/.test(userAgent)) {
          window.location.href = "https://github.com/2dust/v2rayN";
      } else {
          alert("Ваша платформа не поддерживается!");
      }
    }
    localStorage.setItem('install','true');
  }
  
useEffect(()=> {
  setTimeout(() => {
    installVpn();    
  }, 1000);

},[])
  
    useEffect(() => { 

        
        var tl = anime.timeline({
            easing: "easeOutExpo",
     loop:true,
     endDelay:500,
     delay:400
          });
          anime.set(".First_pazzle", { translateX: 0, translateY: 0 });
          anime.set(".Second_pazzle", { translateX: -80, translateY: 20 });
          anime.set(".Three_pazzle", { translateX: 20, translateY: 40 });
          anime.set(".AnimBg", { fill: "#ffffff" });
          anime.set(".AnimBg2", { fill: "#ffffff" });
          anime.set(".AnimBg3", { fill: "#ffffff" });
          anime.set('.Galochka',{opacity:0})
          anime.set('.Arrow',{translateY: -90 })
          anime.set('.Purple_block',{translateY:70,translateX: -90,rotate:-20})
          anime.set('.Gray',{opacity:0})
          anime.set('.Full_green',{opacity:0})
          anime.set('.Gradient_green',{opacity:0})
        

  
  
        const startAnimation = () => {
          
            tl.add({
                targets: [".First_pazzle", ".AnimBg"], // Add both elements to the same animation
                translateY: 40,
                rotate: 15,
                fill: "#C4FF35", // Replace "newColor" with your desired color (e.g., "red")
                translateX:-1
              })
              
            
              .add({
                targets: [".Second_pazzle",".AnimBg2"],
                rotate: -18,
                translateX: -37,
                translateY: 0, fill: "#C4FF35",
              })
            
              .add({
                targets: [".Three_pazzle",".AnimBg3"],
                rotate: -6,
                translateX: 6,
                fill: "#C4FF35",
                translateY: -33,
              })
          
           
       
              tl.add({
                targets: [".Three_pazzle", ".First_pazzle", ".Second_pazzle",".AnimBg", ".AnimBg2", ".AnimBg3"],
                fill:"#ffffff",
                translateX: (target:any) => {
                  if (target.classList.contains("Three_pazzle")) return 20;
                  if (target.classList.contains("First_pazzle")) return 0;
                  if (target.classList.contains("Second_pazzle")) return -80;
                },
                translateY: (target:any) => {
                  if (target.classList.contains("Three_pazzle")) return 40;
                  if (target.classList.contains("First_pazzle")) return 0;
                  if (target.classList.contains("Second_pazzle")) return 20;
                },
                rotate: (target:any) => {
                  if (target.classList.contains("Three_pazzle")) return 0;  // Example rotation for .Three_pazzle
                  if (target.classList.contains("Second_pazzle")) return 0; // Example rotation for .Second_pazzle
                  return 0; // No rotation for .First_pazzle
                },
                easing: "easeOutExpo", // You can customize easing if needed
                duration: 1000, // Set duration to 1000ms or whatever you want
              });
          }; 
          const startAnimation2 = () => {
          
            tl.add({
                targets: [".Arrow",".Cloud"], 
                translateY: -10,
           fill:'#56B2E5'
              })
              tl.add({
                targets: [".Arrow"], 
          opacity:0,
          duration:400,
          delay: 0,
           offset: "+=500"
              })
              tl.add({
                targets: [".Cloud",'.Galochka'], 
          opacity:1,
          fill:'#C4FF35',
          delay:0,
          offset:"+=1000"
      
              })
              
            
          };     
          const startAnimation3 = () => {
          
            tl.add({
                targets: ['.Purple_block',".Gray"], 
                translateY: 128,
                translateX:-45,
                rotate:0,
                opacity:1
           
              })
              tl.add({
                targets: ".Gradient_green", 
             
                opacity:1
           
              })
              tl.add({
                targets: [".Full_green",".Btn"], 
                opacity:1,
                backgroundColor:'#C4FF35',
                color:'#000000'
           
              })
              tl.add({
                targets: [".Full_green",".Btn"], 
                opacity:1,
                backgroundColor:'#C4FF35',
                color:'#000000'
           
              })
              tl.add({
                targets: [".Full_green",".Gray",".Gradient_green",".Btn",".Purple_block"], 
                opacity:0,
          backgroundColor:'#CCCCCC',
          color:"#ffffff",
          translateY:70,translateX: -90,rotate:-20,
           duration:600
              })
              
            
          };        
          if(active == 1) {
            
            startAnimation(); 
          }
          else if(active == 2) {   
            startAnimation2();    
          }
          else {
            startAnimation3();
          }

      }, [active]);
    return(
    <div className='flex flex-col justify-between mt-[40px] max-w-[350px] mx-auto w-full gap-[4vh]  absolute left-[50%] translate-x-[-50%] h-[90vh] top-[0]'>
 {active == 1 ? <Pazzle/> : active == 2 ? <Cloud/> :<Pazzle2/>}

    <div className=''>
        <div>
            <div className='text-[28px] font-[400] text-white'>{active == 1 ? Data.pazzle1.title : active == 2 ? Data.cloud.title : Data.pazzle2.title}</div>
            <div className='font-[400] text-[16px] text-white'>{active == 1 ? Data.pazzle1.description: active == 2 ? Data.cloud.description : Data.pazzle2.description}</div>
        </div>
        <div className='flex h-[50px] gap-[5px] justify-between mt-[30px]'>
            <button onClick={()=> {
                if(active ==1) {
                    push('/')
                }
                else if(active ==2) {
                 
                    setActive(1)
                    setFirst(false)
                }
                else if(active == 3) {
                    setActive(2)
                    setFirst(false)
                }
            }} className=' hover:bg-[#000000] hover:text-white active:bg-[#000000] active:text-white bg-white text-[18px] font-[500] rounded-[20px] py-[1px] px-[6%] flex-[1 1 auto]'>{ active == 1 ? 'Отмена' :'Назад'}</button>
            <button onClick={()=> {
                if(active == 1 ) {
                    setActive(2)
                    setFirst(false)
                }
                else if(active == 2) {
                  
                  
                  redirectToV2RayTun()
                  
                    setActive(3)
                    setFirst(false)
                }
                else {
                  Connect()
                  
                }
            }} className='hover:bg-[#000000] hover:text-[#C4FF35] active:bg-[#000000] active:text-[#C4FF35] leading-[1] text-nowrap bg-[#C4FF35] font-[500] text-[18px] w-full rounded-[20px] py-[14px] px-[8%] cursor-pointer flex-[2 2 auto] '>{active == 1 ?  'Начать настройку' : active == 2 ? localStorage.getItem('loaded') == 'true' ?'Далее' : 'Установить' :'Добавить'}</button>
        </div>
    </div>
    </div>
    )
}
"use client";
import { useState } from "react";
import { CancelBtn } from "../cancelBtn/cancelBtn";
import { Free } from "../free/free"
import { Infoblock } from "../infoBlock/infoBlock";
import './style.scss'
export const Podpiska = ()=> {
  const [active,setActive] = useState('');
  const [count,setCount] = useState<number>(1);
  const [countActive,setCountActive] = useState<boolean>(false)
    return(
      <div className="max-w-[350px] w-full mx-auto mt-[10px]">
        <div className="text-white font-[600] text-[24px]">Выберите подписку</div>
        <div>
          <Free/>
          <svg className="mx-auto max-w-[350px] w-full h-[auto] mt-[10px]" viewBox="0 0 350 245" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="Tarif"  d="M0 20C0 8.95431 8.95431 0 20 0H168L168 19C168 21.7614 170.239 24 173 24H175C177.761 24 180 26.2386 180 29V33C180 35.7614 177.761 38 175 38H173C170.239 38 168 40.2386 168 43L168 120H46C43.2386 120 41 122.239 41 125V127C41 129.761 38.7614 132 36 132H32C29.2386 132 27 129.761 27 127V125C27 122.239 24.7614 120 22 120H0V20Z" onClick={()=>{ 
  setActive('1')
}} fill={ active == '1' ? '#56B2E5' :'white'}/>
<path d="M57.788 49V38.254H55.772L56.474 36.994H59.12V49H57.788ZM67.7916 49L69.5916 40.954L72.6876 47.038L75.7116 40.954L77.5116 49H76.1796L75.1896 44.374L72.6516 49.522L70.0776 44.374L69.1236 49H67.7916ZM84.641 46.498L85.721 47.092C85.505 47.506 85.181 47.956 84.803 48.298C84.119 48.91 83.273 49.216 82.319 49.216C80.519 49.216 78.629 48.082 78.629 45.31C78.629 43.078 79.997 41.35 82.247 41.35C83.705 41.35 84.623 42.07 85.073 42.718C85.541 43.384 85.811 44.536 85.775 45.526H79.961C79.979 47.074 81.041 48.064 82.337 48.064C82.949 48.064 83.435 47.884 83.867 47.524C84.209 47.236 84.479 46.858 84.641 46.498ZM80.051 44.446H84.443C84.227 43.276 83.345 42.502 82.247 42.502C81.149 42.502 80.249 43.33 80.051 44.446ZM93.6131 42.07V43.618C92.9291 42.754 91.9391 42.502 91.2731 42.502C89.8871 42.502 88.6271 43.474 88.6271 45.292C88.6271 47.11 89.9231 48.064 91.2551 48.064C92.0291 48.064 92.9831 47.722 93.6671 46.894V48.442C92.8571 49.036 91.9931 49.216 91.2911 49.216C88.9691 49.216 87.2951 47.56 87.2951 45.31C87.2951 43.024 88.9871 41.35 91.2911 41.35C92.4791 41.35 93.2531 41.818 93.6131 42.07ZM94.7916 49L97.1136 45.922C97.0236 45.922 96.2136 45.85 95.6736 45.328C95.3676 45.04 95.0796 44.536 95.0796 43.834C95.0796 43.132 95.3316 42.538 95.7456 42.16C96.3936 41.548 97.2036 41.53 97.9416 41.53H100.552V49H99.2556V45.994H98.4636L96.3396 49H94.7916ZM99.2556 44.914V42.682H98.0496C97.5276 42.682 97.1496 42.718 96.8796 42.88C96.6636 43.024 96.4116 43.312 96.4116 43.798C96.4116 44.194 96.5556 44.5 96.8796 44.698C97.2576 44.932 97.7256 44.914 98.0316 44.914H99.2556ZM103.003 49V41.53H104.299V47.812H107.647V41.53H108.943V47.812H110.167V50.98H108.979V49H103.003Z" fill="black"/>
<path d="M54.5871 88V72.46H51.8991V69.324H58.2271V88H54.5871ZM68.7435 88.504L65.8035 87.076L70.2555 81.252C69.6675 81.448 68.9395 81.616 68.2675 81.616C66.9515 81.616 65.2715 81.084 64.1795 80.02C63.1995 79.096 62.4155 77.5 62.4155 75.54C62.4155 73.972 62.8635 72.404 64.1235 71.032C65.7195 69.296 67.5395 68.904 69.4435 68.904C71.4315 68.904 73.2235 69.268 74.7635 70.808C75.7715 71.816 76.5835 73.244 76.5835 75.344C76.5835 77.612 75.5475 79.432 74.2315 81.168L68.7435 88.504ZM69.4995 71.816C68.3235 71.816 67.5395 72.292 67.0635 72.768C66.6155 73.216 66.0555 74 66.0555 75.232C66.0555 76.352 66.4475 77.192 67.0915 77.808C67.7915 78.48 68.5755 78.704 69.4995 78.704C70.5075 78.704 71.2635 78.396 71.9355 77.696C72.6075 76.996 72.9435 76.212 72.9435 75.26C72.9435 74.084 72.4675 73.272 71.9075 72.74C71.4315 72.292 70.6195 71.816 69.4995 71.816ZM84.6576 88.504L81.7176 87.076L86.1696 81.252C85.5816 81.448 84.8536 81.616 84.1816 81.616C82.8656 81.616 81.1856 81.084 80.0936 80.02C79.1136 79.096 78.3296 77.5 78.3296 75.54C78.3296 73.972 78.7776 72.404 80.0376 71.032C81.6336 69.296 83.4536 68.904 85.3576 68.904C87.3456 68.904 89.1376 69.268 90.6776 70.808C91.6856 71.816 92.4976 73.244 92.4976 75.344C92.4976 77.612 91.4616 79.432 90.1456 81.168L84.6576 88.504ZM85.4136 71.816C84.2376 71.816 83.4536 72.292 82.9776 72.768C82.5296 73.216 81.9696 74 81.9696 75.232C81.9696 76.352 82.3616 77.192 83.0056 77.808C83.7056 78.48 84.4896 78.704 85.4136 78.704C86.4216 78.704 87.1776 78.396 87.8496 77.696C88.5216 76.996 88.8576 76.212 88.8576 75.26C88.8576 74.084 88.3816 73.272 87.8216 72.74C87.3456 72.292 86.5336 71.816 85.4136 71.816ZM108.143 69.324C110.243 69.324 111.699 69.548 113.071 70.752C114.779 72.264 114.975 74.336 114.975 75.316C114.975 77.668 113.967 78.816 113.435 79.348C112.567 80.188 111.223 81 108.703 81H106.351V82.764H111.503V85.284H106.351V88H102.711V85.284H100.751V82.764H102.711V81H100.751V77.948H102.711V69.324H108.143ZM106.351 72.46V77.948H107.835C108.535 77.948 109.431 77.948 110.215 77.36C110.887 76.828 111.223 75.988 111.223 75.176C111.223 74.14 110.719 73.44 110.187 73.048C109.431 72.516 108.479 72.46 107.611 72.46H106.351Z" fill="black"/>
<path className="Tarif" d="M0 225C0 236.046 8.95431 245 20 245H168V228.769C168 227.24 166.76 226 165.231 226C160.133 226 156 221.867 156 216.769V211.231C156 206.133 160.133 202 165.231 202C166.76 202 168 200.76 168 199.231L168 125H48.7692C47.2398 125 46 126.24 46 127.769C46 132.867 41.8672 137 36.7692 137H31.2308C26.1328 137 22 132.867 22 127.769C22 126.24 20.7602 125 19.2308 125H0V225Z" onClick={()=>{ 
  setActive('2')
}} fill={ active == '2' ? '#56B2E5' :'white'} />
<path d="M53.548 161.706L54.556 162.462L51.802 166.296C52.144 166.188 52.486 166.134 52.864 166.134C55.168 166.134 56.752 167.862 56.752 170.094C56.752 172.488 55.024 174.216 52.63 174.216C49.804 174.216 48.472 172.02 48.472 170.13C48.472 169.68 48.562 168.636 49.462 167.376L53.548 161.706ZM52.612 172.992C54.268 172.992 55.42 171.75 55.42 170.13C55.42 168.528 54.232 167.358 52.594 167.358C50.956 167.358 49.804 168.564 49.804 170.13C49.804 171.732 50.938 172.992 52.612 172.992ZM62.2916 174L64.0916 165.954L67.1876 172.038L70.2116 165.954L72.0116 174H70.6796L69.6896 169.374L67.1516 174.522L64.5776 169.374L63.6236 174H62.2916ZM79.141 171.498L80.221 172.092C80.005 172.506 79.681 172.956 79.303 173.298C78.619 173.91 77.773 174.216 76.819 174.216C75.019 174.216 73.129 173.082 73.129 170.31C73.129 168.078 74.497 166.35 76.747 166.35C78.205 166.35 79.123 167.07 79.573 167.718C80.041 168.384 80.311 169.536 80.275 170.526H74.461C74.479 172.074 75.541 173.064 76.837 173.064C77.449 173.064 77.935 172.884 78.367 172.524C78.709 172.236 78.979 171.858 79.141 171.498ZM74.551 169.446H78.943C78.727 168.276 77.845 167.502 76.747 167.502C75.649 167.502 74.749 168.33 74.551 169.446ZM88.1131 167.07V168.618C87.4291 167.754 86.4391 167.502 85.7731 167.502C84.3871 167.502 83.1271 168.474 83.1271 170.292C83.1271 172.11 84.4231 173.064 85.7551 173.064C86.5291 173.064 87.4831 172.722 88.1671 171.894V173.442C87.3571 174.036 86.4931 174.216 85.7911 174.216C83.4691 174.216 81.7951 172.56 81.7951 170.31C81.7951 168.024 83.4871 166.35 85.7911 166.35C86.9791 166.35 87.7531 166.818 88.1131 167.07ZM89.2916 174L91.6136 170.922C91.5236 170.922 90.7136 170.85 90.1736 170.328C89.8676 170.04 89.5796 169.536 89.5796 168.834C89.5796 168.132 89.8316 167.538 90.2456 167.16C90.8936 166.548 91.7036 166.53 92.4416 166.53H95.0516V174H93.7556V170.994H92.9636L90.8396 174H89.2916ZM93.7556 169.914V167.682H92.5496C92.0276 167.682 91.6496 167.718 91.3796 167.88C91.1636 168.024 90.9116 168.312 90.9116 168.798C90.9116 169.194 91.0556 169.5 91.3796 169.698C91.7576 169.932 92.2256 169.914 92.5316 169.914H93.7556ZM97.5033 174V166.53H98.7993V172.812H102.147V166.53H103.443V172.812H104.667V175.98H103.479V174H97.5033ZM111.573 171.498L112.653 172.092C112.437 172.506 112.113 172.956 111.735 173.298C111.051 173.91 110.205 174.216 109.251 174.216C107.451 174.216 105.561 173.082 105.561 170.31C105.561 168.078 106.929 166.35 109.179 166.35C110.637 166.35 111.555 167.07 112.005 167.718C112.473 168.384 112.743 169.536 112.707 170.526H106.893C106.911 172.074 107.973 173.064 109.269 173.064C109.881 173.064 110.367 172.884 110.799 172.524C111.141 172.236 111.411 171.858 111.573 171.498ZM106.983 169.446H111.375C111.159 168.276 110.277 167.502 109.179 167.502C108.081 167.502 107.181 168.33 106.983 169.446ZM114.695 166.53H117.521C117.917 166.53 118.565 166.548 119.087 166.962C119.357 167.178 119.735 167.61 119.735 168.366C119.735 169.104 119.375 169.572 118.925 169.86C119.141 169.914 119.501 170.022 119.861 170.364C120.275 170.76 120.455 171.228 120.455 171.804C120.455 172.596 120.095 173.172 119.681 173.496C119.231 173.838 118.511 174 117.917 174H114.695V166.53ZM115.991 169.572H117.359C117.485 169.572 117.899 169.554 118.187 169.356C118.331 169.248 118.547 169.032 118.547 168.582C118.547 168.222 118.385 168.006 118.187 167.862C117.881 167.664 117.539 167.682 117.143 167.682H115.991V169.572ZM115.991 172.848H117.593C117.953 172.848 118.439 172.83 118.763 172.596C118.997 172.416 119.195 172.11 119.195 171.768C119.195 171.426 119.069 171.12 118.817 170.922C118.493 170.67 118.007 170.652 117.647 170.652H115.991V172.848Z" fill="black"/>
<path d="M56.224 213.504L53.284 212.076L57.736 206.252C57.148 206.448 56.42 206.616 55.748 206.616C54.432 206.616 52.752 206.084 51.66 205.02C50.68 204.096 49.896 202.5 49.896 200.54C49.896 198.972 50.344 197.404 51.604 196.032C53.2 194.296 55.02 193.904 56.924 193.904C58.912 193.904 60.704 194.268 62.244 195.808C63.252 196.816 64.064 198.244 64.064 200.344C64.064 202.612 63.028 204.432 61.712 206.168L56.224 213.504ZM56.98 196.816C55.804 196.816 55.02 197.292 54.544 197.768C54.096 198.216 53.536 199 53.536 200.232C53.536 201.352 53.928 202.192 54.572 202.808C55.272 203.48 56.056 203.704 56.98 203.704C57.988 203.704 58.744 203.396 59.416 202.696C60.088 201.996 60.424 201.212 60.424 200.26C60.424 199.084 59.948 198.272 59.388 197.74C58.912 197.292 58.1 196.816 56.98 196.816ZM72.1381 213.504L69.1981 212.076L73.6501 206.252C73.0621 206.448 72.3341 206.616 71.6621 206.616C70.3461 206.616 68.6661 206.084 67.5741 205.02C66.5941 204.096 65.8101 202.5 65.8101 200.54C65.8101 198.972 66.2581 197.404 67.5181 196.032C69.1141 194.296 70.9341 193.904 72.8381 193.904C74.8261 193.904 76.6181 194.268 78.1581 195.808C79.1661 196.816 79.9781 198.244 79.9781 200.344C79.9781 202.612 78.9421 204.432 77.6261 206.168L72.1381 213.504ZM72.8941 196.816C71.7181 196.816 70.9341 197.292 70.4581 197.768C70.0101 198.216 69.4501 199 69.4501 200.232C69.4501 201.352 69.8421 202.192 70.4861 202.808C71.1861 203.48 71.9701 203.704 72.8941 203.704C73.9021 203.704 74.6581 203.396 75.3301 202.696C76.0021 201.996 76.3381 201.212 76.3381 200.26C76.3381 199.084 75.8621 198.272 75.3021 197.74C74.8261 197.292 74.0141 196.816 72.8941 196.816ZM88.0521 213.504L85.1121 212.076L89.5641 206.252C88.9761 206.448 88.2481 206.616 87.5761 206.616C86.2601 206.616 84.5801 206.084 83.4881 205.02C82.5081 204.096 81.7241 202.5 81.7241 200.54C81.7241 198.972 82.1721 197.404 83.4321 196.032C85.0281 194.296 86.8481 193.904 88.7521 193.904C90.7401 193.904 92.5321 194.268 94.0721 195.808C95.0801 196.816 95.8921 198.244 95.8921 200.344C95.8921 202.612 94.8561 204.432 93.5401 206.168L88.0521 213.504ZM88.8081 196.816C87.6321 196.816 86.8481 197.292 86.3721 197.768C85.9241 198.216 85.3641 199 85.3641 200.232C85.3641 201.352 85.7561 202.192 86.4001 202.808C87.1001 203.48 87.8841 203.704 88.8081 203.704C89.8161 203.704 90.5721 203.396 91.2441 202.696C91.9161 201.996 92.2521 201.212 92.2521 200.26C92.2521 199.084 91.7761 198.272 91.2161 197.74C90.7401 197.292 89.9281 196.816 88.8081 196.816ZM111.537 194.324C113.637 194.324 115.093 194.548 116.465 195.752C118.173 197.264 118.369 199.336 118.369 200.316C118.369 202.668 117.361 203.816 116.829 204.348C115.961 205.188 114.617 206 112.097 206H109.745V207.764H114.897V210.284H109.745V213H106.105V210.284H104.145V207.764H106.105V206H104.145V202.948H106.105V194.324H111.537ZM109.745 197.46V202.948H111.229C111.929 202.948 112.825 202.948 113.609 202.36C114.281 201.828 114.617 200.988 114.617 200.176C114.617 199.14 114.113 198.44 113.581 198.048C112.825 197.516 111.873 197.46 111.005 197.46H109.745Z" fill="black"/>
<path  className="Tarif" d="M173 0H330C341.046 0 350 8.95431 350 20V120H308.41H308C306.343 120 305 118.657 305 117C305 112.029 300.971 108 296 108H291C286.029 108 282 112.029 282 117C282 118.657 280.657 120 279 120H173V45.9016C173 44.2991 174.299 43 175.902 43C180.927 43 185 38.9265 185 33.9016V28.0984C185 23.0735 180.927 19 175.902 19C174.299 19 173 17.7009 173 16.0984V0Z" onClick={()=>{ 
  setActive('3')
}} fill={ active == '3' ? '#56B2E5' :'white'}/>
<path d="M231.38 39.964H230.048C230.084 39.298 230.3 38.686 230.606 38.2C231.398 36.958 232.676 36.796 233.396 36.796C235.664 36.796 236.78 38.38 236.78 40.036C236.78 40.9 236.456 42.088 235.232 42.7C235.646 42.862 236.96 43.528 236.96 45.598C236.96 47.848 235.322 49.216 233.27 49.216C232.028 49.216 230.57 48.694 229.922 47.146C229.742 46.714 229.67 46.318 229.652 45.886H230.984C231.038 46.318 231.182 46.768 231.416 47.092C231.812 47.668 232.514 47.992 233.27 47.992C234.602 47.992 235.628 46.894 235.628 45.562C235.628 44.878 235.358 43.96 234.44 43.546C234.062 43.366 233.54 43.276 233.072 43.294V42.106C233.54 42.142 234.062 42.052 234.44 41.854C234.818 41.656 235.448 41.152 235.448 40.072C235.448 39.01 234.872 38.02 233.396 38.02C232.91 38.02 232.316 38.11 231.848 38.704C231.614 39.01 231.416 39.46 231.38 39.964ZM243.292 49L245.092 40.954L248.188 47.038L251.212 40.954L253.012 49H251.68L250.69 44.374L248.152 49.522L245.578 44.374L244.624 49H243.292ZM260.141 46.498L261.221 47.092C261.005 47.506 260.681 47.956 260.303 48.298C259.619 48.91 258.773 49.216 257.819 49.216C256.019 49.216 254.129 48.082 254.129 45.31C254.129 43.078 255.497 41.35 257.747 41.35C259.205 41.35 260.123 42.07 260.573 42.718C261.041 43.384 261.311 44.536 261.275 45.526H255.461C255.479 47.074 256.541 48.064 257.837 48.064C258.449 48.064 258.935 47.884 259.367 47.524C259.709 47.236 259.979 46.858 260.141 46.498ZM255.551 44.446H259.943C259.727 43.276 258.845 42.502 257.747 42.502C256.649 42.502 255.749 43.33 255.551 44.446ZM269.113 42.07V43.618C268.429 42.754 267.439 42.502 266.773 42.502C265.387 42.502 264.127 43.474 264.127 45.292C264.127 47.11 265.423 48.064 266.755 48.064C267.529 48.064 268.483 47.722 269.167 46.894V48.442C268.357 49.036 267.493 49.216 266.791 49.216C264.469 49.216 262.795 47.56 262.795 45.31C262.795 43.024 264.487 41.35 266.791 41.35C267.979 41.35 268.753 41.818 269.113 42.07ZM270.292 49L272.614 45.922C272.524 45.922 271.714 45.85 271.174 45.328C270.868 45.04 270.58 44.536 270.58 43.834C270.58 43.132 270.832 42.538 271.246 42.16C271.894 41.548 272.704 41.53 273.442 41.53H276.052V49H274.756V45.994H273.964L271.84 49H270.292ZM274.756 44.914V42.682H273.55C273.028 42.682 272.65 42.718 272.38 42.88C272.164 43.024 271.912 43.312 271.912 43.798C271.912 44.194 272.056 44.5 272.38 44.698C272.758 44.932 273.226 44.914 273.532 44.914H274.756ZM278.503 49V41.53H279.799V47.812H283.147V41.53H284.443V47.812H285.667V50.98H284.479V49H278.503ZM292.753 42.592V41.53H294.049V49H292.753V47.956C292.321 48.514 291.511 49.216 290.197 49.216C288.307 49.216 286.561 47.884 286.561 45.256C286.561 42.682 288.289 41.35 290.197 41.35C291.637 41.35 292.411 42.142 292.753 42.592ZM290.341 42.502C289.063 42.502 287.893 43.438 287.893 45.256C287.893 46.858 288.793 48.064 290.341 48.064C291.925 48.064 292.825 46.75 292.825 45.274C292.825 43.348 291.493 42.502 290.341 42.502Z" fill="black"/>
<path d="M240.216 69.324V72.46H234L233.328 75.4C233.692 75.344 234.112 75.288 234.588 75.288C236.576 75.288 238.34 76.072 239.404 77.164C240.888 78.676 241.056 80.524 241.056 81.644C241.056 83.66 240.44 85.228 239.152 86.516C237.668 88 236.016 88.42 234.028 88.42C233.02 88.42 231.424 88.336 229.996 87.636C229.24 87.272 228.4 86.684 227.728 86.04L228.932 82.904C229.436 83.576 230.024 84.136 230.864 84.584C231.788 85.088 232.684 85.284 233.58 85.284C235.12 85.284 235.988 84.64 236.436 84.164C236.968 83.604 237.416 82.652 237.416 81.448C237.416 80.384 237.108 79.572 236.324 78.872C235.372 78.032 234.308 77.92 233.412 77.92C232.096 77.92 230.78 78.284 229.38 79.124L231.592 69.324H240.216ZM255.117 69.324V81.56H257.301V84.472H255.117V88H251.701V84.472H242.573V82.848L251.841 69.324H255.117ZM246.885 81.56H251.701V74.448L246.885 81.56ZM265.095 88.504L262.155 87.076L266.607 81.252C266.019 81.448 265.291 81.616 264.619 81.616C263.303 81.616 261.623 81.084 260.531 80.02C259.551 79.096 258.767 77.5 258.767 75.54C258.767 73.972 259.215 72.404 260.475 71.032C262.071 69.296 263.891 68.904 265.795 68.904C267.783 68.904 269.575 69.268 271.115 70.808C272.123 71.816 272.935 73.244 272.935 75.344C272.935 77.612 271.899 79.432 270.583 81.168L265.095 88.504ZM265.851 71.816C264.675 71.816 263.891 72.292 263.415 72.768C262.967 73.216 262.407 74 262.407 75.232C262.407 76.352 262.799 77.192 263.443 77.808C264.143 78.48 264.927 78.704 265.851 78.704C266.859 78.704 267.615 78.396 268.287 77.696C268.959 76.996 269.295 76.212 269.295 75.26C269.295 74.084 268.819 73.272 268.259 72.74C267.783 72.292 266.971 71.816 265.851 71.816ZM288.58 69.324C290.68 69.324 292.136 69.548 293.508 70.752C295.216 72.264 295.412 74.336 295.412 75.316C295.412 77.668 294.404 78.816 293.872 79.348C293.004 80.188 291.66 81 289.14 81H286.788V82.764H291.94V85.284H286.788V88H283.148V85.284H281.188V82.764H283.148V81H281.188V77.948H283.148V69.324H288.58ZM286.788 72.46V77.948H288.272C288.972 77.948 289.868 77.948 290.652 77.36C291.324 76.828 291.66 75.988 291.66 75.176C291.66 74.14 291.156 73.44 290.624 73.048C289.868 72.516 288.916 72.46 288.048 72.46H286.788Z" fill="black"/>
<path className="Tarif" d="M173 245H330C341.046 245 350 236.046 350 225V125H305C302.239 125 300 122.761 300 120V118C300 115.239 297.761 113 295 113H292C289.239 113 287 115.239 287 118V120C287 122.761 284.761 125 282 125H173V201C173 204.314 170.314 207 167 207C163.686 207 161 209.686 161 213V215C161 218.314 163.686 221 167 221C170.314 221 173 223.686 173 227V245Z" onClick={()=>{ 
  setActive('4')
}} fill={ active == '4' ? '#56B2E5' :'white'}/>
<path d="M247.788 174V163.254H245.772L246.474 161.994H249.12V174H247.788ZM258.656 174V166.53H263.084V167.718H259.952V174H258.656ZM267.491 174.216C265.223 174.216 263.531 172.56 263.531 170.292C263.531 168.024 265.205 166.35 267.491 166.35C269.777 166.35 271.451 168.024 271.451 170.292C271.451 172.56 269.759 174.216 267.491 174.216ZM267.491 167.502C266.123 167.502 264.863 168.474 264.863 170.292C264.863 172.128 266.159 173.064 267.491 173.064C268.841 173.064 270.119 172.11 270.119 170.292C270.119 168.456 268.859 167.502 267.491 167.502ZM273.979 166.53H279.235V172.812H280.351V175.98H279.163V174H273.475V175.98H272.287V172.812C272.935 172.794 273.421 172.362 273.673 171.84C273.925 171.318 273.979 170.616 273.979 169.86V166.53ZM277.939 172.812V167.718H275.275V170.526C275.275 171.39 275.077 172.2 274.375 172.812H277.939Z" fill="black"/>
<path d="M226.884 213V197.46H224.196V194.324H230.524V213H226.884ZM234.56 212.188L243.156 197.46H234.476V194.324H248.868L237.64 213.56L234.56 212.188ZM255.369 213.504L252.429 212.076L256.881 206.252C256.293 206.448 255.565 206.616 254.893 206.616C253.577 206.616 251.897 206.084 250.805 205.02C249.825 204.096 249.041 202.5 249.041 200.54C249.041 198.972 249.489 197.404 250.749 196.032C252.345 194.296 254.165 193.904 256.069 193.904C258.057 193.904 259.849 194.268 261.389 195.808C262.397 196.816 263.209 198.244 263.209 200.344C263.209 202.612 262.173 204.432 260.857 206.168L255.369 213.504ZM256.125 196.816C254.949 196.816 254.165 197.292 253.689 197.768C253.241 198.216 252.681 199 252.681 200.232C252.681 201.352 253.073 202.192 253.717 202.808C254.417 203.48 255.201 203.704 256.125 203.704C257.133 203.704 257.889 203.396 258.561 202.696C259.233 201.996 259.569 201.212 259.569 200.26C259.569 199.084 259.093 198.272 258.533 197.74C258.057 197.292 257.245 196.816 256.125 196.816ZM272.667 213.42C268.943 213.42 265.443 210.088 265.443 203.648C265.443 197.236 268.943 193.904 272.667 193.904C276.391 193.904 279.891 197.236 279.891 203.676C279.891 210.088 276.391 213.42 272.667 213.42ZM272.667 197.04C271.099 197.04 269.083 198.804 269.083 203.648C269.083 208.52 271.071 210.284 272.667 210.284C274.263 210.284 276.251 208.52 276.251 203.648C276.251 198.804 274.235 197.04 272.667 197.04ZM295.424 194.324C297.524 194.324 298.98 194.548 300.352 195.752C302.06 197.264 302.256 199.336 302.256 200.316C302.256 202.668 301.248 203.816 300.716 204.348C299.848 205.188 298.504 206 295.984 206H293.632V207.764H298.784V210.284H293.632V213H289.992V210.284H288.032V207.764H289.992V206H288.032V202.948H289.992V194.324H295.424ZM293.632 197.46V202.948H295.116C295.816 202.948 296.712 202.948 297.496 202.36C298.168 201.828 298.504 200.988 298.504 200.176C298.504 199.14 298 198.44 297.468 198.048C296.712 197.516 295.76 197.46 294.892 197.46H293.632Z" fill="black"/>
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
    {Array.from({length:10},(_,index)=> (
      <div onClick={()=> {
        console.log(index+1);
        setCount(index+1)
        setCountActive(false)
        
        // setCountActive(false)
      }} className="text-center" key={index}>{index+1}</div>
    ))}
  </div>
  </div>
</div>
<Infoblock type='trial'/>
<div className="Pay mt-[13px] flex flex-col gap-[10px]">
  <div className="font-[400] text-[18px] text-white">Итого</div>
  <div className="w-full flex justify-between">
    <div className="font-[600] text-[24px] text-white">1 день</div>
    <div className="font-[600] text-[24px] text-white">1 рубль</div>
  </div>
  <div><svg  className="Pay_btn mx-auto max-w-[350px] w-full h-[auto] mt-[10px] cursor-pointer duration-[700]" viewBox="0 0 350 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="350" height="50" rx="20" fill="#BBF6E2"/>
<path d="M105.868 18.994H115.372V31H113.032V21.01H108.208V31H105.868V18.994ZM123.412 28.498L125.428 28.822C125.194 29.398 124.312 31.252 121.594 31.252C120.334 31.252 119.38 30.892 118.606 30.154C117.742 29.344 117.382 28.336 117.382 27.112C117.382 25.564 118.012 24.61 118.57 24.052C119.488 23.152 120.568 22.954 121.504 22.954C123.088 22.954 124.006 23.584 124.546 24.232C125.374 25.222 125.482 26.446 125.482 27.292V27.472H119.65C119.65 27.94 119.776 28.444 120.028 28.786C120.262 29.11 120.748 29.524 121.594 29.524C122.422 29.524 123.052 29.128 123.412 28.498ZM119.722 26.068H123.412C123.232 25.006 122.368 24.502 121.558 24.502C120.748 24.502 119.902 25.024 119.722 26.068ZM129.379 29.992V35.122H127.183V23.206H129.379V24.214C129.721 23.728 130.477 22.954 131.917 22.954C132.601 22.954 133.699 23.116 134.581 23.998C135.157 24.574 135.751 25.546 135.751 27.094C135.751 28.858 134.977 29.812 134.527 30.244C133.933 30.802 133.033 31.252 131.881 31.252C131.341 31.252 130.243 31.162 129.379 29.992ZM131.323 24.898C130.747 24.898 130.297 25.06 129.901 25.42C129.415 25.834 129.163 26.374 129.163 27.094C129.163 27.814 129.451 28.408 129.883 28.786C130.171 29.038 130.639 29.308 131.323 29.308C132.043 29.308 132.511 29.02 132.799 28.75C133.267 28.318 133.483 27.67 133.483 27.094C133.483 26.518 133.249 25.87 132.817 25.456C132.421 25.096 131.845 24.898 131.323 24.898ZM143.082 28.498L145.098 28.822C144.864 29.398 143.982 31.252 141.264 31.252C140.004 31.252 139.05 30.892 138.276 30.154C137.412 29.344 137.052 28.336 137.052 27.112C137.052 25.564 137.682 24.61 138.24 24.052C139.158 23.152 140.238 22.954 141.174 22.954C142.758 22.954 143.676 23.584 144.216 24.232C145.044 25.222 145.152 26.446 145.152 27.292V27.472H139.32C139.32 27.94 139.446 28.444 139.698 28.786C139.932 29.11 140.418 29.524 141.264 29.524C142.092 29.524 142.722 29.128 143.082 28.498ZM139.392 26.068H143.082C142.902 25.006 142.038 24.502 141.228 24.502C140.418 24.502 139.572 25.024 139.392 26.068ZM146.853 23.206H149.049V28.012L152.649 23.206H154.845V31H152.649V26.194L149.049 31H146.853V23.206ZM152.361 19.3L153.801 19.984C153.279 21.478 151.803 21.838 150.849 21.838C149.895 21.838 148.419 21.478 147.897 19.984L149.337 19.3C149.481 19.948 150.093 20.434 150.849 20.434C151.497 20.434 152.181 20.074 152.361 19.3ZM162.505 25.078H160.345V31H158.149V25.078H155.989V23.206H162.505V25.078ZM163.657 23.206H165.853V28.012L169.453 23.206H171.649V31H169.453V26.194L165.853 31H163.657V23.206ZM177.931 23.206H180.127V26.23L183.043 23.206H185.779L182.251 26.68L185.959 31H183.151L180.451 27.778L180.127 28.102V31H177.931V23.206ZM195.2 22.954C196.676 22.954 197.684 23.44 198.35 24.052C199.124 24.754 199.664 25.834 199.664 27.112C199.664 28.372 199.124 29.452 198.35 30.154C197.684 30.766 196.676 31.252 195.2 31.252C193.724 31.252 192.716 30.766 192.05 30.154C191.276 29.452 190.736 28.372 190.736 27.112C190.736 25.834 191.276 24.754 192.05 24.052C192.716 23.44 193.724 22.954 195.2 22.954ZM195.2 29.308C196.478 29.308 197.396 28.3 197.396 27.112C197.396 25.888 196.46 24.898 195.2 24.898C193.94 24.898 193.004 25.888 193.004 27.112C193.004 28.3 193.922 29.308 195.2 29.308ZM201.362 23.206H208.742V31H206.546V25.078H203.558V31H201.362V23.206ZM217.749 23.206V31H215.553V25.078H213.429V27.94C213.429 28.57 213.339 29.542 212.691 30.244C212.529 30.424 211.863 31.072 210.585 31.072C210.369 31.072 210.153 31.054 209.937 31V29.128C210.045 29.146 210.171 29.164 210.279 29.164C210.765 29.164 211.035 28.966 211.179 28.786C211.413 28.498 211.449 28.102 211.449 27.796V23.206H217.749ZM225.813 24.214V23.206H228.009V31H225.813V29.992C225.021 31.126 223.977 31.252 223.419 31.252C221.025 31.252 219.441 29.38 219.441 27.094C219.441 24.79 221.007 22.954 223.311 22.954C223.905 22.954 225.075 23.062 225.813 24.214ZM223.869 24.898C222.609 24.898 221.709 25.852 221.709 27.094C221.709 28.336 222.609 29.308 223.869 29.308C225.129 29.308 226.029 28.336 226.029 27.094C226.029 25.852 225.129 24.898 223.869 24.898ZM235.683 25.078H233.523V31H231.327V25.078H229.167V23.206H235.683V25.078ZM242.469 28.498L244.485 28.822C244.251 29.398 243.369 31.252 240.651 31.252C239.391 31.252 238.437 30.892 237.663 30.154C236.799 29.344 236.439 28.336 236.439 27.112C236.439 25.564 237.069 24.61 237.627 24.052C238.545 23.152 239.625 22.954 240.561 22.954C242.145 22.954 243.063 23.584 243.603 24.232C244.431 25.222 244.539 26.446 244.539 27.292V27.472H238.707C238.707 27.94 238.833 28.444 239.085 28.786C239.319 29.11 239.805 29.524 240.651 29.524C241.479 29.524 242.109 29.128 242.469 28.498ZM238.779 26.068H242.469C242.289 25.006 241.425 24.502 240.615 24.502C239.805 24.502 238.959 25.024 238.779 26.068Z" fill="black"/>
</svg>
</div>
</div>
        </div>
      </div>
    )
}
'use client';
import { useState } from "react";
export const CancelBtn = ()=> {
    const [active,setActive] = useState<boolean>(false)
    async function cancel() {
        const response = await fetch("https://prostovpn.su/api/subscription/detach", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Telegram-InitData": window.Telegram.WebApp.initData
            }
        });
        return response.json();
    }
   const handle = ()=> {
    setTimeout(()=> {
cancel()
setActive(true)
    },1000)
   }
   if(active == false) {
    return(
        <>
        <svg onClick={handle} className="max-w-[350px] mx-auto mt-[10px] cursor-pointer" viewBox="0 0 350 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="350" height="62" rx="20" fill="#CCCCCC"/>
<path d="M111.146 37.216C107.672 37.216 104.9 34.57 104.9 31.006C104.9 27.424 107.69 24.796 111.146 24.796C114.602 24.796 117.392 27.424 117.392 31.006C117.392 34.57 114.62 37.216 111.146 37.216ZM111.146 26.056C108.446 26.056 106.268 28.252 106.268 31.006C106.268 33.76 108.446 35.956 111.146 35.956C113.846 35.956 116.024 33.76 116.024 31.006C116.024 28.252 113.846 26.056 111.146 26.056ZM124.411 30.718H122.071V37H120.775V30.718H118.435V29.53H124.411V30.718ZM124.909 37L126.709 28.954L129.805 35.038L132.829 28.954L134.629 37H133.297L132.307 32.374L129.769 37.522L127.195 32.374L126.241 37H124.909ZM141.758 34.498L142.838 35.092C142.622 35.506 142.298 35.956 141.92 36.298C141.236 36.91 140.39 37.216 139.436 37.216C137.636 37.216 135.746 36.082 135.746 33.31C135.746 31.078 137.114 29.35 139.364 29.35C140.822 29.35 141.74 30.07 142.19 30.718C142.658 31.384 142.928 32.536 142.892 33.526H137.078C137.096 35.074 138.158 36.064 139.454 36.064C140.066 36.064 140.552 35.884 140.984 35.524C141.326 35.236 141.596 34.858 141.758 34.498ZM137.168 32.446H141.56C141.344 31.276 140.462 30.502 139.364 30.502C138.266 30.502 137.366 31.33 137.168 32.446ZM144.88 37V29.53H146.176V32.59H149.704V29.53H151V37H149.704V33.778H146.176V37H144.88ZM153.441 29.53H154.737V34.462L159.849 28.954V37H158.553V32.014L153.441 37.522V29.53ZM167.196 30.718H164.856V37H163.56V30.718H161.22V29.53H167.196V30.718ZM168.558 37V29.53H169.854V32.392H171.186C171.852 32.392 172.788 32.446 173.454 33.13C173.742 33.418 174.03 33.94 174.03 34.696C174.03 35.506 173.688 36.064 173.364 36.37C172.716 36.982 171.906 37 171.168 37H168.558ZM169.854 35.848H171.06C171.492 35.848 171.906 35.83 172.212 35.65C172.374 35.542 172.698 35.272 172.698 34.696C172.698 34.372 172.608 33.994 172.23 33.76C171.906 33.544 171.492 33.544 171.078 33.544H169.854V35.848ZM179.966 29.53H185.978V37H184.682V30.718H181.262V37H179.966V29.53ZM191.913 37.216C189.645 37.216 187.953 35.56 187.953 33.292C187.953 31.024 189.627 29.35 191.913 29.35C194.199 29.35 195.873 31.024 195.873 33.292C195.873 35.56 194.181 37.216 191.913 37.216ZM191.913 30.502C190.545 30.502 189.285 31.474 189.285 33.292C189.285 35.128 190.581 36.064 191.913 36.064C193.263 36.064 194.541 35.11 194.541 33.292C194.541 31.456 193.281 30.502 191.913 30.502ZM198.401 29.53H203.657V35.812H204.773V38.98H203.585V37H197.897V38.98H196.709V35.812C197.357 35.794 197.843 35.362 198.095 34.84C198.347 34.318 198.401 33.616 198.401 32.86V29.53ZM202.361 35.812V30.718H199.697V33.526C199.697 34.39 199.499 35.2 198.797 35.812H202.361ZM206.14 29.53H212.152V37H210.856V30.718H207.436V37H206.14V29.53ZM214.595 29.53H215.891V34.462L221.003 28.954V37H219.707V32.014L214.595 37.522V29.53ZM229.304 30.07V31.618C228.62 30.754 227.63 30.502 226.964 30.502C225.578 30.502 224.318 31.474 224.318 33.292C224.318 35.11 225.614 36.064 226.946 36.064C227.72 36.064 228.674 35.722 229.358 34.894V36.442C228.548 37.036 227.684 37.216 226.982 37.216C224.66 37.216 222.986 35.56 222.986 33.31C222.986 31.024 224.678 29.35 226.982 29.35C228.17 29.35 228.944 29.818 229.304 30.07ZM231.347 29.53H232.643V32.59L235.667 29.53H237.251L234.011 32.86L237.647 37H235.955L233.039 33.724L232.643 34.102V37H231.347V29.53ZM238.923 41.14L241.299 36.298L237.861 29.53H239.337L241.983 34.876L244.413 29.53H245.853L240.363 41.14H238.923Z" fill="black"/>
</svg>
</>
    )
}
else return <></>
}
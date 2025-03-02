'use client';

import { useRouter } from "next/navigation";

export const Connect = ()=> {
    const {push} = useRouter();
    return(
        <>
        <svg className="w-full mx-auto max-w-[350px] h-[auto]" width="350" height="155" viewBox="0 0 350 155" fill="none" xmlns="http://www.w3.org/2000/svg">
<path onClick={()=> {
    push('/tarif')
}} d="M75 84.5H160C162.761 84.5 165 82.2614 165 79.5V78.5V75.5C165 72.7386 167.239 70.5 170 70.5H174.5H179H188C190.761 70.5 193 72.7386 193 75.5V78.5V79.5C193 82.2614 195.239 84.5 198 84.5H275V123C275 124.381 273.881 125.5 272.5 125.5C268.358 125.5 265 128.858 265 133V142C265 146.142 268.358 149.5 272.5 149.5C273.881 149.5 275 150.619 275 152V154.5H175.5H75V124.5C75 122.843 76.3431 121.5 78 121.5C82.9706 121.5 87 117.471 87 112.5V106.5C87 101.529 82.9706 97.5 78 97.5C76.3431 97.5 75 96.1569 75 94.5V84.5Z" fill="#C4FF35"/>
<path onClick={()=> {
    push('/tarif')
}} d="M119.573 113.494H129.077V125.5H126.737V115.51H121.913V125.5H119.573V113.494ZM135.551 117.454C137.027 117.454 138.035 117.94 138.701 118.552C139.475 119.254 140.015 120.334 140.015 121.612C140.015 122.872 139.475 123.952 138.701 124.654C138.035 125.266 137.027 125.752 135.551 125.752C134.075 125.752 133.067 125.266 132.401 124.654C131.627 123.952 131.087 122.872 131.087 121.612C131.087 120.334 131.627 119.254 132.401 118.552C133.067 117.94 134.075 117.454 135.551 117.454ZM135.551 123.808C136.829 123.808 137.747 122.8 137.747 121.612C137.747 120.388 136.811 119.398 135.551 119.398C134.291 119.398 133.355 120.388 133.355 121.612C133.355 122.8 134.273 123.808 135.551 123.808ZM142.434 117.706H148.914V123.628H150.066V127.768H148.086V125.5H142.722V127.768H140.742V123.628C141.426 123.592 141.894 123.106 142.128 122.638C142.344 122.17 142.434 121.558 142.434 120.64V117.706ZM146.718 123.628V119.578H144.414V121.306C144.414 122.314 144.198 123.07 143.55 123.628H146.718ZM151.259 117.706H153.455V120.73L156.371 117.706H159.107L155.579 121.18L159.287 125.5H156.479L153.779 122.278L153.455 122.602V125.5H151.259V117.706ZM167.61 117.706V125.5H165.414V119.578H163.29V122.44C163.29 123.07 163.2 124.042 162.552 124.744C162.39 124.924 161.724 125.572 160.446 125.572C160.23 125.572 160.014 125.554 159.798 125.5V123.628C159.906 123.646 160.032 123.664 160.14 123.664C160.626 123.664 160.896 123.466 161.04 123.286C161.274 122.998 161.31 122.602 161.31 122.296V117.706H167.61ZM171.894 120.64H172.956C173.118 119.668 173.604 119.002 174.072 118.552C174.882 117.778 175.89 117.454 177.114 117.454C178.554 117.454 179.544 117.94 180.21 118.552C180.966 119.236 181.506 120.352 181.506 121.612C181.506 122.854 180.966 123.952 180.21 124.654C179.724 125.104 178.752 125.752 177.114 125.752C175.71 125.752 174.72 125.266 174.072 124.654C173.658 124.258 173.118 123.556 172.956 122.512H171.894V125.5H169.698V117.706H171.894V120.64ZM177.114 123.808C178.356 123.808 179.238 122.818 179.238 121.612C179.238 120.37 178.356 119.398 177.114 119.398C175.872 119.398 174.99 120.37 174.99 121.612C174.99 122.818 175.872 123.808 177.114 123.808ZM187.626 125.5V122.836C187.068 122.944 186.438 123.016 185.79 123.016C185.196 123.016 184.296 122.944 183.612 122.296C182.982 121.702 182.91 121.036 182.91 120.46V117.706H185.106V120.01C185.106 120.28 185.106 120.604 185.376 120.856C185.682 121.144 186.204 121.144 186.492 121.144C186.888 121.144 187.23 121.108 187.626 121.036V117.706H189.822V125.5H187.626ZM191.917 117.706H194.113V122.512L197.713 117.706H199.909V125.5H197.713V120.694L194.113 125.5H191.917V117.706ZM207.569 119.578H205.409V125.5H203.213V119.578H201.053V117.706H207.569V119.578ZM208.722 117.706H210.918V120.478H212.628C213.312 120.478 214.176 120.676 214.716 121.27C215.058 121.63 215.31 122.17 215.31 122.944C215.31 123.97 214.86 124.6 214.482 124.924C213.906 125.428 213.258 125.5 212.736 125.5H208.722V117.706ZM210.918 123.772H211.944C212.178 123.772 212.52 123.754 212.754 123.574C212.898 123.466 213.042 123.25 213.042 122.944C213.042 122.656 212.898 122.476 212.754 122.386C212.52 122.224 212.196 122.206 211.998 122.206H210.918V123.772ZM222.904 117.922V120.082C222.436 119.65 221.86 119.398 221.104 119.398C219.646 119.398 218.908 120.46 218.908 121.594C218.908 122.872 219.862 123.808 221.176 123.808C221.662 123.808 222.31 123.664 222.904 123.124V125.266C222.472 125.482 221.788 125.752 220.888 125.752C219.664 125.752 218.584 125.284 217.882 124.618C217.288 124.06 216.64 123.088 216.64 121.63C216.64 120.262 217.198 119.164 217.99 118.462C218.944 117.616 220.042 117.454 220.798 117.454C221.608 117.454 222.274 117.616 222.904 117.922ZM223.876 125.5L226.18 122.584C226.054 122.566 225.406 122.458 224.92 121.972C224.614 121.666 224.308 121.126 224.308 120.316C224.308 119.344 224.794 118.714 225.244 118.354C226.018 117.742 226.918 117.706 227.656 117.706H230.752V125.5H228.556V122.764H228.304L226.396 125.5H223.876ZM228.556 121.18V119.434H227.602C227.35 119.434 227.098 119.434 226.864 119.65C226.648 119.848 226.576 120.082 226.576 120.334C226.576 120.586 226.63 120.802 226.864 120.982C227.098 121.162 227.368 121.18 227.602 121.18H228.556Z" fill="black"/>
<path d="M0 104.5C0 93.4543 8.95431 84.5 20 84.5H70V97.5C70 100.261 72.2386 102.5 75 102.5H77C79.7614 102.5 82 104.739 82 107.5V111.5C82 114.261 79.7614 116.5 77 116.5H75C72.2386 116.5 70 118.739 70 121.5V154.5H20C8.9543 154.5 0 145.546 0 134.5V104.5Z" fill="#C4FF35"/>
<ellipse cx="35" cy="114.628" rx="5" ry="5.12821" fill="black"/>
<path d="M35 121.808C36.2753 121.808 39.9905 122.642 42.5152 123.911C44.4763 124.897 43.5684 126.864 41.4704 127.509L37.9409 128.595C36.0246 129.185 33.9754 129.185 32.0591 128.595L28.5296 127.509C26.4316 126.864 25.5237 124.897 27.4848 123.911C30.0095 122.642 33.7247 121.808 35 121.808Z" fill="black"/>
<path onClick={()=> {
    push('/settings')
}} d="M350 104.5C350 93.4543 341.046 84.5 330 84.5H280V125.5C280 128.261 277.761 130.5 275 130.5C272.239 130.5 270 132.739 270 135.5V139.5C270 142.261 272.239 144.5 275 144.5C277.761 144.5 280 146.739 280 149.5V154.5H330C341.046 154.5 350 145.546 350 134.5V104.5Z" fill="#C4FF35"/>
<path onClick={()=> {
    push('/settings')
}} fillRule="evenodd" clipRule="evenodd" d="M316.794 112.535C317.183 111.67 318.144 111.186 319.018 111.556C319.587 111.797 320.128 112.087 320.636 112.422C321.441 112.952 321.52 114.054 320.932 114.817C319.925 116.124 320.981 117.999 322.621 117.817L322.935 117.782C323.888 117.676 324.807 118.26 324.927 119.212C324.975 119.595 325 119.986 325 120.382C325 120.686 324.985 120.988 324.957 121.285C324.864 122.243 323.948 122.844 322.991 122.738L322.844 122.721C321.173 122.535 320.097 124.447 321.123 125.779C321.711 126.542 321.647 127.641 320.857 128.192C320.411 128.503 319.937 128.779 319.44 129.017C318.492 129.47 317.416 128.947 316.985 127.989C316.231 126.311 313.842 126.328 313.088 128.005C312.657 128.963 311.581 129.496 310.631 129.051C310.087 128.796 309.571 128.495 309.088 128.153C308.309 127.602 308.249 126.514 308.831 125.758C309.851 124.434 308.781 122.534 307.12 122.718L306.992 122.733C306.044 122.838 305.137 122.242 305.044 121.293C305.015 120.993 305 120.689 305 120.382C305 119.983 305.025 119.59 305.074 119.204C305.193 118.261 306.104 117.682 307.049 117.787L307.343 117.82C308.974 118.001 310.023 116.136 309.022 114.836C308.439 114.08 308.515 112.988 309.309 112.458C309.833 112.108 310.393 111.805 310.982 111.556C311.856 111.186 312.817 111.67 313.206 112.535C313.901 114.083 316.099 114.083 316.794 112.535ZM315 123.593C316.841 123.593 318.334 122.155 318.334 120.382C318.334 118.608 316.841 117.17 315 117.17C313.159 117.17 311.667 118.608 311.667 120.382C311.667 122.155 313.159 123.593 315 123.593Z" fill="black"/>
<path d="M0 20C0 8.95431 8.95431 0 20 0H330C341.046 0 350 8.95431 350 20V65C350 73.2843 343.284 80 335 80L202.655 79.517C200.081 79.5076 198 77.4185 198 74.8447C198 69.6838 193.816 65.5 188.655 65.5H179H169.344C164.183 65.5 160 69.6835 160 74.8441C160 77.4181 157.918 79.5072 155.344 79.5161L15 80C6.71573 80 0 73.2843 0 65V20Z" fill="white"/>
<path d="M21.548 22.494H30.368V34.5H29.036V23.754H22.88V34.5H21.548V22.494ZM36.634 34.716C34.366 34.716 32.674 33.06 32.674 30.792C32.674 28.524 34.348 26.85 36.634 26.85C38.92 26.85 40.594 28.524 40.594 30.792C40.594 33.06 38.902 34.716 36.634 34.716ZM36.634 28.002C35.266 28.002 34.006 28.974 34.006 30.792C34.006 32.628 35.302 33.564 36.634 33.564C37.984 33.564 39.262 32.61 39.262 30.792C39.262 28.956 38.002 28.002 36.634 28.002ZM43.1214 27.03H48.3774V33.312H49.4934V36.48H48.3054V34.5H42.6174V36.48H41.4294V33.312C42.0774 33.294 42.5634 32.862 42.8154 32.34C43.0674 31.818 43.1214 31.116 43.1214 30.36V27.03ZM47.0814 33.312V28.218H44.4174V31.026C44.4174 31.89 44.2194 32.7 43.5174 33.312H47.0814ZM50.8607 27.03H52.1567V30.09L55.1807 27.03H56.7647L53.5247 30.36L57.1607 34.5H55.4687L52.5527 31.224L52.1567 31.602V34.5H50.8607V27.03ZM64.2998 27.03V34.5H63.0038V28.218H60.3398V31.584C60.3398 32.214 60.3398 33.042 59.7638 33.744C59.5298 34.032 58.9718 34.536 57.9638 34.536C57.8378 34.536 57.6938 34.518 57.5678 34.5V33.312C57.6578 33.33 57.7658 33.348 57.8558 33.348C58.3418 33.348 58.6478 33.096 58.7918 32.862C59.0258 32.502 59.0438 32.034 59.0438 31.584V27.03H64.2998ZM68.0473 30.09H69.3973C69.5233 29.19 69.9373 28.452 70.4053 27.966C71.0533 27.282 72.0433 26.85 73.2313 26.85C75.5353 26.85 77.1913 28.524 77.1913 30.792C77.1913 33.06 75.5173 34.716 73.2313 34.716C71.6833 34.716 70.7113 34.014 70.1533 33.312C69.7933 32.862 69.4153 32.178 69.3253 31.278H68.0473V34.5H66.7513V27.03H68.0473V30.09ZM73.2313 28.002C71.8453 28.002 70.6573 29.01 70.6573 30.792C70.6573 32.628 71.9173 33.564 73.2313 33.564C74.5813 33.564 75.8593 32.61 75.8593 30.792C75.8593 28.974 74.5993 28.002 73.2313 28.002ZM83.1751 34.5V31.566C82.7071 31.638 81.9331 31.728 81.4111 31.728C81.0331 31.728 80.1691 31.71 79.5931 31.188C79.0891 30.738 78.9631 30.072 78.9631 29.352V27.03H80.2591V29.172C80.2591 29.442 80.2951 29.838 80.4211 30.054C80.6551 30.504 81.1591 30.54 81.5551 30.54C82.0411 30.54 82.6171 30.486 83.1751 30.378V27.03H84.4711V34.5H83.1751ZM86.9135 27.03H88.2095V31.962L93.3215 26.454V34.5H92.0255V29.514L86.9135 35.022V27.03ZM100.669 28.218H98.3288V34.5H97.0328V28.218H94.6928V27.03H100.669V28.218ZM107.399 31.998L108.479 32.592C108.263 33.006 107.939 33.456 107.561 33.798C106.877 34.41 106.031 34.716 105.077 34.716C103.277 34.716 101.387 33.582 101.387 30.81C101.387 28.578 102.755 26.85 105.005 26.85C106.463 26.85 107.381 27.57 107.831 28.218C108.299 28.884 108.569 30.036 108.533 31.026H102.719C102.737 32.574 103.799 33.564 105.095 33.564C105.707 33.564 106.193 33.384 106.625 33.024C106.967 32.736 107.237 32.358 107.399 31.998ZM102.809 29.946H107.201C106.985 28.776 106.103 28.002 105.005 28.002C103.907 28.002 103.007 28.83 102.809 29.946ZM116.371 27.57V29.118C115.687 28.254 114.697 28.002 114.031 28.002C112.645 28.002 111.385 28.974 111.385 30.792C111.385 32.61 112.681 33.564 114.013 33.564C114.787 33.564 115.741 33.222 116.425 32.394V33.942C115.615 34.536 114.751 34.716 114.049 34.716C111.727 34.716 110.053 33.06 110.053 30.81C110.053 28.524 111.745 26.85 114.049 26.85C115.237 26.85 116.011 27.318 116.371 27.57ZM118.413 34.5V27.03H119.709V29.892H121.041C121.707 29.892 122.643 29.946 123.309 30.63C123.597 30.918 123.885 31.44 123.885 32.196C123.885 33.006 123.543 33.564 123.219 33.87C122.571 34.482 121.761 34.5 121.023 34.5H118.413ZM119.709 33.348H120.915C121.347 33.348 121.761 33.33 122.067 33.15C122.229 33.042 122.553 32.772 122.553 32.196C122.553 31.872 122.463 31.494 122.085 31.26C121.761 31.044 121.347 31.044 120.933 31.044H119.709V33.348ZM129.822 27.03H131.118V30.09L134.142 27.03H135.726L132.486 30.36L136.122 34.5H134.43L131.514 31.224L131.118 31.602V34.5H129.822V27.03ZM140.537 22.494H142.013L145.397 31.656L148.781 22.494H150.257L145.397 35.22L140.537 22.494ZM151.943 22.494H154.121C155.327 22.494 156.335 22.638 157.145 23.34C158.027 24.096 158.243 25.158 158.243 25.914C158.243 27.606 157.181 29.28 154.445 29.28H153.275V34.5H151.943V22.494ZM153.275 23.754V28.02H154.373C155.957 28.02 156.911 27.228 156.911 25.842C156.911 23.934 155.129 23.754 154.265 23.754H153.275ZM161.484 34.5H160.152V21.99L169.512 31.8V22.494H170.844V35.04L161.484 25.23V34.5ZM181.806 34.5V31.566C181.338 31.638 180.564 31.728 180.042 31.728C179.664 31.728 178.8 31.71 178.224 31.188C177.72 30.738 177.594 30.072 177.594 29.352V27.03H178.89V29.172C178.89 29.442 178.926 29.838 179.052 30.054C179.286 30.504 179.79 30.54 180.186 30.54C180.672 30.54 181.248 30.486 181.806 30.378V27.03H183.102V34.5H181.806ZM191.088 31.998L192.168 32.592C191.952 33.006 191.628 33.456 191.25 33.798C190.566 34.41 189.72 34.716 188.766 34.716C186.966 34.716 185.076 33.582 185.076 30.81C185.076 28.578 186.444 26.85 188.694 26.85C190.152 26.85 191.07 27.57 191.52 28.218C191.988 28.884 192.258 30.036 192.222 31.026H186.408C186.426 32.574 187.488 33.564 188.784 33.564C189.396 33.564 189.882 33.384 190.314 33.024C190.656 32.736 190.926 32.358 191.088 31.998ZM186.498 29.946H190.89C190.674 28.776 189.792 28.002 188.694 28.002C187.596 28.002 186.696 28.83 186.498 29.946ZM195.506 33.456V38.64H194.21V27.03H195.506V28.074C196.388 26.976 197.522 26.85 198.062 26.85C200.402 26.85 201.698 28.794 201.698 30.81C201.698 32.862 200.384 34.716 198.116 34.716C196.91 34.716 196.064 34.176 195.506 33.456ZM197.936 33.564C199.448 33.564 200.366 32.304 200.366 30.81C200.366 28.974 199.124 28.002 197.918 28.002C196.712 28.002 195.434 28.992 195.434 30.792C195.434 32.322 196.406 33.564 197.936 33.564ZM209.229 31.998L210.309 32.592C210.093 33.006 209.769 33.456 209.391 33.798C208.707 34.41 207.861 34.716 206.907 34.716C205.107 34.716 203.217 33.582 203.217 30.81C203.217 28.578 204.585 26.85 206.835 26.85C208.293 26.85 209.211 27.57 209.661 28.218C210.129 28.884 210.399 30.036 210.363 31.026H204.549C204.567 32.574 205.629 33.564 206.925 33.564C207.537 33.564 208.023 33.384 208.455 33.024C208.797 32.736 209.067 32.358 209.229 31.998ZM204.639 29.946H209.031C208.815 28.776 207.933 28.002 206.835 28.002C205.737 28.002 204.837 28.83 204.639 29.946ZM213.147 28.938L212.247 28.2C212.499 27.84 212.841 27.48 213.201 27.264C213.777 26.922 214.353 26.85 214.839 26.85C215.433 26.85 216.045 26.904 216.603 27.372C217.089 27.786 217.251 28.272 217.251 28.794C217.251 29.676 216.783 30.126 216.405 30.36C216.783 30.45 217.089 30.648 217.269 30.846C217.575 31.17 217.791 31.638 217.791 32.214C217.791 32.988 217.431 33.69 216.819 34.14C216.279 34.536 215.505 34.716 214.695 34.716C214.029 34.716 213.327 34.572 212.697 34.086C212.265 33.762 211.923 33.276 211.707 32.808L212.823 32.34C212.895 32.52 213.075 32.88 213.489 33.186C213.903 33.492 214.317 33.564 214.713 33.564C215.001 33.564 215.577 33.546 215.973 33.276C216.225 33.114 216.495 32.772 216.495 32.232C216.495 31.818 216.297 31.53 216.045 31.368C215.667 31.116 215.163 31.116 214.821 31.116H214.065V29.928H214.695C215.289 29.928 215.559 29.802 215.667 29.73C215.865 29.604 216.063 29.388 216.063 29.046C216.063 28.722 215.937 28.434 215.739 28.272C215.433 28.002 215.019 28.002 214.785 28.002C214.497 28.002 214.137 28.056 213.759 28.29C213.561 28.416 213.327 28.614 213.147 28.938ZM229.82 27.57V29.118C229.136 28.254 228.146 28.002 227.48 28.002C226.094 28.002 224.834 28.974 224.834 30.792C224.834 32.61 226.13 33.564 227.462 33.564C228.236 33.564 229.19 33.222 229.874 32.394V33.942C229.064 34.536 228.2 34.716 227.498 34.716C225.176 34.716 223.502 33.06 223.502 30.81C223.502 28.524 225.194 26.85 227.498 26.85C228.686 26.85 229.46 27.318 229.82 27.57ZM237.407 31.998L238.487 32.592C238.271 33.006 237.947 33.456 237.569 33.798C236.885 34.41 236.039 34.716 235.085 34.716C233.285 34.716 231.395 33.582 231.395 30.81C231.395 28.578 232.763 26.85 235.013 26.85C236.471 26.85 237.389 27.57 237.839 28.218C238.307 28.884 238.577 30.036 238.541 31.026H232.727C232.745 32.574 233.807 33.564 235.103 33.564C235.715 33.564 236.201 33.384 236.633 33.024C236.975 32.736 237.245 32.358 237.407 31.998ZM232.817 29.946H237.209C236.993 28.776 236.111 28.002 235.013 28.002C233.915 28.002 233.015 28.83 232.817 29.946ZM241.825 33.456V38.64H240.529V27.03H241.825V28.074C242.707 26.976 243.841 26.85 244.381 26.85C246.721 26.85 248.017 28.794 248.017 30.81C248.017 32.862 246.703 34.716 244.435 34.716C243.229 34.716 242.383 34.176 241.825 33.456ZM244.255 33.564C245.767 33.564 246.685 32.304 246.685 30.81C246.685 28.974 245.443 28.002 244.237 28.002C243.031 28.002 241.753 28.992 241.753 30.792C241.753 32.322 242.725 33.564 244.255 33.564ZM250.003 27.03H252.829C253.225 27.03 253.873 27.048 254.395 27.462C254.665 27.678 255.043 28.11 255.043 28.866C255.043 29.604 254.683 30.072 254.233 30.36C254.449 30.414 254.809 30.522 255.169 30.864C255.583 31.26 255.763 31.728 255.763 32.304C255.763 33.096 255.403 33.672 254.989 33.996C254.539 34.338 253.819 34.5 253.225 34.5H250.003V27.03ZM251.299 30.072H252.667C252.793 30.072 253.207 30.054 253.495 29.856C253.639 29.748 253.855 29.532 253.855 29.082C253.855 28.722 253.693 28.506 253.495 28.362C253.189 28.164 252.847 28.182 252.451 28.182H251.299V30.072ZM251.299 33.348H252.901C253.261 33.348 253.747 33.33 254.071 33.096C254.305 32.916 254.503 32.61 254.503 32.268C254.503 31.926 254.377 31.62 254.125 31.422C253.801 31.17 253.315 31.152 252.955 31.152H251.299V33.348ZM257.738 27.03H259.034V31.962L264.146 26.454V34.5H262.85V29.514L257.738 35.022V27.03ZM272.447 27.57V29.118C271.763 28.254 270.773 28.002 270.107 28.002C268.721 28.002 267.461 28.974 267.461 30.792C267.461 32.61 268.757 33.564 270.089 33.564C270.863 33.564 271.817 33.222 272.501 32.394V33.942C271.691 34.536 270.827 34.716 270.125 34.716C267.803 34.716 266.129 33.06 266.129 30.81C266.129 28.524 267.821 26.85 270.125 26.85C271.313 26.85 272.087 27.318 272.447 27.57ZM20.144 49.03H21.584L23.816 54.07L26.048 49.03H27.488L23.816 56.986L20.144 49.03ZM36.2869 56.5H28.5289L32.9029 51.442C33.2089 51.082 34.0189 50.128 34.3069 49.696C34.8469 48.922 34.9729 48.346 34.9729 47.86C34.9729 46.51 34.0009 45.52 32.5789 45.52C31.7329 45.52 31.0309 45.898 30.5809 46.582C30.3469 46.942 30.2029 47.392 30.1849 48.004H28.8529C28.9069 46.798 29.2849 46.06 29.7529 45.52C30.2569 44.944 31.1029 44.296 32.5969 44.296C34.7209 44.296 36.3049 45.808 36.3049 47.878C36.3049 48.688 36.0709 49.426 35.3509 50.452C34.8469 51.154 34.1989 51.892 33.7129 52.45L31.2109 55.276H36.2869V56.5ZM39.4074 44.494H41.3334C42.1434 44.494 43.3494 44.548 44.2494 45.16C44.9514 45.628 45.5634 46.546 45.5634 47.824C45.5634 49.66 44.3574 51.01 42.5394 51.136L46.3554 56.5H44.7354L41.0814 51.244H40.7394V56.5H39.4074V44.494ZM40.7394 45.754V50.056H41.5854C43.2414 50.056 44.2314 49.264 44.2314 47.86C44.2314 47.194 44.0334 46.528 43.2774 46.096C42.7374 45.79 42.1254 45.754 41.5494 45.754H40.7394ZM53.6668 50.092V49.03H54.9628V56.5H53.6668V55.456C53.2348 56.014 52.4248 56.716 51.1108 56.716C49.2208 56.716 47.4748 55.384 47.4748 52.756C47.4748 50.182 49.2028 48.85 51.1108 48.85C52.5508 48.85 53.3248 49.642 53.6668 50.092ZM51.2548 50.002C49.9768 50.002 48.8068 50.938 48.8068 52.756C48.8068 54.358 49.7068 55.564 51.2548 55.564C52.8388 55.564 53.7388 54.25 53.7388 52.774C53.7388 50.848 52.4068 50.002 51.2548 50.002ZM57.3994 60.64L59.7754 55.798L56.3374 49.03H57.8134L60.4594 54.376L62.8894 49.03H64.3294L58.8394 60.64H57.3994ZM70.9922 45.754H68.0762V56.5H66.7442V45.754H63.8282V44.494H70.9922V45.754ZM72.4595 49.03V53.386C72.4595 53.908 72.4595 54.52 72.8195 54.988C73.0175 55.24 73.4135 55.564 74.1335 55.564C74.8535 55.564 75.2495 55.24 75.4475 54.988C75.8075 54.52 75.8075 53.908 75.8075 53.386V49.03H77.1035V53.53C77.1035 54.448 77.0135 55.132 76.4195 55.78C75.7535 56.482 74.8715 56.716 74.1335 56.716C73.3955 56.716 72.5135 56.482 71.8475 55.78C71.2535 55.132 71.1635 54.448 71.1635 53.53V49.03H72.4595ZM79.5482 56.5V49.03H80.8442V49.894C81.0782 49.588 81.7442 48.85 82.9862 48.85C83.8682 48.85 84.6782 49.21 85.1282 49.876C85.5062 50.434 85.5602 51.046 85.5602 51.874V56.5H84.2642V51.91C84.2642 51.46 84.2282 50.938 83.9222 50.542C83.6702 50.218 83.2742 50.002 82.6982 50.002C82.2482 50.002 81.7622 50.128 81.3842 50.578C80.8802 51.172 80.8442 52.054 80.8442 52.594V56.5H79.5482Z" fill="black"/>
</svg>

        </>
    )
}
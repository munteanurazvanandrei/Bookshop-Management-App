import "./employeeDashboard.css";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
export default function EmployeeDashboard() {
  // eslint-disable-next-line
  const [totalTransactions, setTotalTransactions] = useState(0);
  const nav = useNavigate();
  useEffect(() => { 
    fetch ("http://localhost:3000/sales_transactions")
    .then((r)=>{
    if (r.ok){
      r.json().then(body =>setTotalTransactions (body.length))
    }
    })
  },[])
    

  // Employee dashboard
  return (
    <div className="employee-dashboard">
      <div className="employee-dashboard-heading">FROST BOOKSHOP</div>
      <div className="pointofsale-title"> Point of Sale </div>
      <div className="make-a-sale" onClick={()=>nav("/make-a-sale")}>
        <div className="make-sale-telephone">
          <svg
            width="44"
            height="54"
            viewBox="0 0 44 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.9235 0H10.9745C8.5601 0 6.58469 2.43 6.58469 5.4V10.8C6.58469 13.77 8.5601 16.2 10.9745 16.2H32.9235C35.3379 16.2 37.3133 13.77 37.3133 10.8V5.4C37.3133 2.43 35.3379 0 32.9235 0ZM32.9235 10.8H10.9745V5.4H32.9235V10.8ZM39.5082 54H4.3898C1.97541 54 0 51.57 0 48.6V45.9H43.898V48.6C43.898 51.57 41.9226 54 39.5082 54ZM36.2817 22.113C35.9354 21.158 35.3719 20.3465 34.6593 19.7765C33.9466 19.2064 33.1151 18.902 32.265 18.9H11.633C9.89899 18.9 8.31866 20.169 7.6163 22.113L0 43.2H43.898L36.2817 22.113ZM16.4617 37.8H14.2668C13.6523 37.8 13.1694 37.206 13.1694 36.45C13.1694 35.694 13.6523 35.1 14.2668 35.1H16.4617C17.0763 35.1 17.5592 35.694 17.5592 36.45C17.5592 37.206 17.0763 37.8 16.4617 37.8ZM16.4617 32.4H14.2668C13.6523 32.4 13.1694 31.806 13.1694 31.05C13.1694 30.294 13.6523 29.7 14.2668 29.7H16.4617C17.0763 29.7 17.5592 30.294 17.5592 31.05C17.5592 31.806 17.0763 32.4 16.4617 32.4ZM16.4617 27H14.2668C13.6523 27 13.1694 26.406 13.1694 25.65C13.1694 24.894 13.6523 24.3 14.2668 24.3H16.4617C17.0763 24.3 17.5592 24.894 17.5592 25.65C17.5592 26.406 17.0763 27 16.4617 27ZM23.0464 37.8H20.8515C20.237 37.8 19.7541 37.206 19.7541 36.45C19.7541 35.694 20.237 35.1 20.8515 35.1H23.0464C23.661 35.1 24.1439 35.694 24.1439 36.45C24.1439 37.206 23.661 37.8 23.0464 37.8ZM23.0464 32.4H20.8515C20.237 32.4 19.7541 31.806 19.7541 31.05C19.7541 30.294 20.237 29.7 20.8515 29.7H23.0464C23.661 29.7 24.1439 30.294 24.1439 31.05C24.1439 31.806 23.661 32.4 23.0464 32.4ZM23.0464 27H20.8515C20.237 27 19.7541 26.406 19.7541 25.65C19.7541 24.894 20.237 24.3 20.8515 24.3H23.0464C23.661 24.3 24.1439 24.894 24.1439 25.65C24.1439 26.406 23.661 27 23.0464 27ZM29.6311 37.8H27.4362C26.8217 37.8 26.3388 37.206 26.3388 36.45C26.3388 35.694 26.8217 35.1 27.4362 35.1H29.6311C30.2457 35.1 30.7286 35.694 30.7286 36.45C30.7286 37.206 30.2457 37.8 29.6311 37.8ZM29.6311 32.4H27.4362C26.8217 32.4 26.3388 31.806 26.3388 31.05C26.3388 30.294 26.8217 29.7 27.4362 29.7H29.6311C30.2457 29.7 30.7286 30.294 30.7286 31.05C30.7286 31.806 30.2457 32.4 29.6311 32.4ZM29.6311 27H27.4362C26.8217 27 26.3388 26.406 26.3388 25.65C26.3388 24.894 26.8217 24.3 27.4362 24.3H29.6311C30.2457 24.3 30.7286 24.894 30.7286 25.65C30.7286 26.406 30.2457 27 29.6311 27Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="make-a-sale-text">Make a Sale</div>
      </div>

      <div className="sales-history">
        <div className="sales-history-svg">
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.9565 0.0804462C29.2057 -0.3334 34.4569 0.856301 39.0152 3.49213C43.5735 6.12797 47.224 10.0857 49.4838 14.8416C51.7436 19.5976 52.5061 24.9275 51.6705 30.1263C50.8348 35.3251 48.4404 40.1476 44.804 43.9558C41.1676 47.764 36.4606 50.3783 31.3059 51.4529C26.1512 52.5274 20.7917 52.0116 15.9366 49.9735C11.0815 47.9355 6.95965 44.4714 4.11638 40.0395C1.27311 35.6076 -0.157529 30.4169 0.0137666 25.1542C0.0233695 24.8341 0.0959256 24.519 0.227293 24.227C0.358661 23.9349 0.546268 23.6716 0.779401 23.452C1.01253 23.2325 1.28663 23.061 1.58603 22.9474C1.88544 22.8338 2.20429 22.7802 2.52439 22.7898C2.84449 22.7994 3.15956 22.872 3.45162 23.0033C3.74367 23.1347 4.00699 23.3223 4.22655 23.5555C4.4461 23.7886 4.61758 24.0627 4.73121 24.3621C4.84483 24.6615 4.89837 24.9803 4.88877 25.3004C4.72407 30.2822 6.32624 35.1618 9.412 39.0763C12.4978 42.9908 16.8683 45.6881 21.7508 46.6912C26.6333 47.6944 31.7133 46.9387 36.0925 44.5579C40.4716 42.1771 43.8679 38.3245 45.6806 33.6813C47.4934 29.0381 47.606 23.9035 45.9984 19.1853C44.3908 14.4672 41.1667 10.4694 36.8961 7.89901C32.6254 5.32859 27.5835 4.35105 22.6617 5.13927C17.7399 5.92748 13.2553 8.43066 10.001 12.2062L9.33802 13.0122H17.0698L17.4013 13.0382C17.9847 13.1185 18.5193 13.4072 18.9063 13.8511C19.2933 14.295 19.5065 14.864 19.5065 15.4529C19.5065 16.0419 19.2933 16.6109 18.9063 17.0548C18.5193 17.4986 17.9847 17.7874 17.4013 17.8677L17.0698 17.8904H4.06977L3.73827 17.8677C3.21127 17.7953 2.72242 17.5526 2.34628 17.1764C1.97015 16.8003 1.72738 16.3114 1.65502 15.7844L1.63227 15.4529V2.45295L1.65502 2.12145C1.72738 1.59445 1.97015 1.1056 2.34628 0.729464C2.72242 0.353327 3.21127 0.110559 3.73827 0.0381962L4.06977 0.0154463L4.40127 0.0381962C4.92826 0.110559 5.41711 0.353327 5.79325 0.729464C6.16938 1.1056 6.41215 1.59445 6.48452 2.12145L6.50727 2.45295L6.50402 8.8002C10.9648 3.73327 17.226 0.606138 23.9565 0.083696V0.0804462ZM25.185 13.0122L25.5165 13.0349C26.0435 13.1073 26.5324 13.3501 26.9085 13.7262C27.2846 14.1023 27.5274 14.5912 27.5998 15.1182L27.6225 15.4497V25.9959L33.31 25.9992L33.6415 26.0219C34.2274 26.0996 34.7651 26.3874 35.1546 26.8319C35.5441 27.2764 35.7588 27.8473 35.7588 28.4383C35.7588 29.0293 35.5441 29.6002 35.1546 30.0447C34.7651 30.4892 34.2274 30.7771 33.6415 30.8547L33.31 30.8742H25.185L24.8535 30.8547C24.326 30.7822 23.8368 30.5389 23.4606 30.1621C23.0844 29.7854 22.842 29.2958 22.7703 28.7682L22.7475 28.4367V15.4497L22.7703 15.1182C22.8426 14.5912 23.0854 14.1023 23.4615 13.7262C23.8377 13.3501 24.3265 13.1073 24.8535 13.0349L25.185 13.0122Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="total-transactions">{totalTransactions}</div>
        <div className="sales-history-text">Sales History</div>
      </div>
      <button type="button" className="button">

        {" "}
        Logout <span></span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C13.5527 1.99884 15.0842 2.35978 16.4729 3.05414C17.8617 3.74851 19.0693 4.75718 20 6H17.29C16.1352 4.98176 14.7112 4.31836 13.1887 4.0894C11.6663 3.86044 10.1101 4.07566 8.70689 4.70922C7.30371 5.34277 6.11315 6.36776 5.27807 7.66119C4.44299 8.95462 3.99887 10.4615 3.999 12.0011C3.99913 13.5407 4.4435 15.0475 5.27879 16.3408C6.11409 17.6341 7.30482 18.6589 8.7081 19.2922C10.1114 19.9255 11.6676 20.1405 13.19 19.9113C14.7125 19.6821 16.1364 19.0184 17.291 18H20.001C19.0702 19.243 17.8624 20.2517 16.4735 20.9461C15.0846 21.6405 13.5528 22.0013 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z"
            fill="white"
            fill-opacity="0.96"
          />
        </svg>

      </button>
    </div>
  );
}

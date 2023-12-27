import React from "react";
import "./style.scss";

const NumberSelector = (props) => {

     return (
          <>
               <div className="main-container">
                    <p>{props.timername}</p>
                    <div className="inner-time-seletor">
                         <div className="hour">
                              <label htmlFor="numberDropdown">Hour:</label>
                              <select className="numberDropdown1">
                                   {[...Array(60)].map((_, index) => (
                                        <option key={index + 1} value={index}>
                                             {index}
                                        </option>
                                   ))}
                              </select>
                         </div>
                         <div className="minute">
                              <label htmlFor="numberDropdown">Min:</label>
                              <select className="numberDropdown2">
                                   {[...Array(60)].map((_, index) => (
                                        <option key={index + 1} value={index}>
                                             {index}
                                        </option>
                                   ))}
                              </select>
                         </div>
                         <div className="second">
                              <label htmlFor="numberDropdown">Sec</label>
                              <select className="numberDropdown3">
                                   {[...Array(60)].map((_, index) => (
                                        <option key={index + 1} value={index}>
                                             {index}
                                        </option>
                                   ))}
                              </select>
                         </div>
                    </div>

               </div>
          </>
     );
};

export default NumberSelector;
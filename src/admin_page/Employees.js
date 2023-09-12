import React, { useContext } from 'react';
import AdminSidebar from '../utils/AdminSidebar';
import { ContextData } from '../context/Context';

function Employees() {
    const { employees } = useContext(ContextData);

    return (
        <div className='dashboard employees'>
            <div className="dashboard_main">
                <AdminSidebar />

                <div className="dashboard_main_card">
                    <div className="employees_wrapper">
                        <h1>Hodimlar</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Rasmi</th>
                                    <th>Ism familiya</th>
                                    <th>Tel</th>
                                    <th>Lavozimi</th>
                                    <th colSpan={2}>Manzil</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map((value, index) => (
                                        <tr key={index}>
                                            <td><span>{value.table_num}</span></td>
                                            <td>
                                                <h3>{value.full_name}</h3>
                                                <h4>{value.age}</h4>
                                            </td>
                                            <td>{value.phone_num}</td>
                                            <td><span style={value.position === "Menejer" ? { backgroundColor: "#E5EDFE", color: "#3071FF" } : value.position === "Ofitsiant" ? { backgroundColor: "#FFF5EE", color: "#FF5C00" } : value.position === "Hisobchi" ? { backgroundColor: "#EEFFEE", color: "#35C335" } : ""}>{value.position}</span></td>
                                            <td>{value.address}</td>
                                            <td>
                                                <div className="employees_table_btns">
                                                    <button>
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <circle cx="10" cy="10" r="2.5" stroke="#FF5C00" strokeWidth="1.5" />
                                                                <path d="M11.6666 3.35127C11.6666 2.96208 11.3977 2.61972 11.012 2.5677C10.681 2.52305 10.3431 2.5 9.99993 2.5C9.65671 2.5 9.31886 2.52306 8.98787 2.5677C8.60218 2.61973 8.33325 2.96209 8.33325 3.35127V3.47607C8.33325 4.0291 7.96294 4.50414 7.46501 4.74476C7.20426 4.87077 6.95431 5.01561 6.71693 5.17753C6.26018 5.48907 5.66381 5.57204 5.185 5.2956L5.07602 5.23268C4.73929 5.03827 4.30879 5.09966 4.07047 5.40688C3.65767 5.93901 3.31491 6.52821 3.05604 7.16064C2.90875 7.52047 3.07087 7.92401 3.40759 8.11842L3.51795 8.18213C3.99638 8.45835 4.2229 9.01574 4.18245 9.56669C4.17194 9.70976 4.1666 9.85425 4.1666 10C4.1666 10.1457 4.17194 10.2902 4.18245 10.4333C4.2229 10.9842 3.99637 11.5416 3.51795 11.8178L3.40758 11.8815C3.07086 12.0759 2.90874 12.4795 3.05602 12.8393C3.31489 13.4718 3.65764 14.061 4.07044 14.5931C4.30877 14.9003 4.73927 14.9617 5.076 14.7673L5.18497 14.7044C5.66378 14.4279 6.26015 14.5109 6.7169 14.8225C6.95429 14.9844 7.20425 15.1292 7.46501 15.2552C7.96294 15.4959 8.33325 15.9709 8.33325 16.5239V16.6487C8.33325 17.0379 8.60218 17.3803 8.98787 17.4323C9.31886 17.4769 9.65671 17.5 9.99993 17.5C10.3431 17.5 10.681 17.4769 11.012 17.4323C11.3977 17.3803 11.6666 17.0379 11.6666 16.6487V16.5239C11.6666 15.9709 12.0369 15.4959 12.5348 15.2553C12.7956 15.1292 13.0455 14.9844 13.2829 14.8225C13.7397 14.5109 14.336 14.428 14.8149 14.7044L14.9238 14.7673C15.2606 14.9617 15.6911 14.9003 15.9294 14.5931C16.3422 14.061 16.685 13.4718 16.9438 12.8394C17.0911 12.4795 16.929 12.076 16.5923 11.8816L16.4819 11.8179C16.0035 11.5417 15.777 10.9843 15.8174 10.4333C15.8279 10.2902 15.8333 10.1457 15.8333 10C15.8333 9.85424 15.8279 9.70973 15.8174 9.56665C15.777 9.01569 16.0035 8.4583 16.4819 8.18208L16.5923 8.11837C16.929 7.92397 17.0911 7.52042 16.9438 7.16058C16.6849 6.52816 16.3422 5.93897 15.9294 5.40683C15.691 5.09962 15.2605 5.03824 14.9238 5.23264L14.8148 5.29557C14.336 5.57201 13.7396 5.48904 13.2829 5.1775C13.0455 5.01559 12.7956 4.87075 12.5348 4.74475C12.0369 4.50412 11.6666 4.02908 11.6666 3.47606V3.35127Z" stroke="#FF5C00" strokeWidth="1.5" />
                                                            </svg>
                                                        </span>
                                                        <span>Tahrirlash</span>
                                                    </button>
                                                    <button>
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path d="M4.16675 4.1665L15.8334 15.8332M15.8334 4.1665L4.16675 15.8332" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                                            </svg>
                                                        </span>
                                                        <span>O'chirish</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Employees;
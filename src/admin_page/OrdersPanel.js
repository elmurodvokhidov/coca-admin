import React from 'react';
import AdminSidebar from '../utils/AdminSidebar';
import { ChartComponent } from '../utils/ChartComponent';

function OrdersPanel() {
    return (
        <div className='dashboard'>
            <div className="dashboard_main">
                <AdminSidebar />

                <div className="dashboard_main_card">
                    {/* top of the dashboard */}
                    <div className="dashboard_top">
                        <select name="dashboard_select" id="dashboard_select">
                            <option value="oy">Oy</option>
                            <option value="kun">Kun</option>
                            <option value="hafta">Hafta</option>
                            <option value="yil">Yil</option>
                        </select>

                        <div className="dashboard_top_calendar">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path d="M3.344 4.655C3.40834 3.95958 3.9637 3.4117 4.65918 3.35176C7.51803 3.10537 9.50301 3.10465 12.3389 3.35024C13.0378 3.41076 13.5939 3.96415 13.6557 4.66325C13.9054 7.48491 13.8823 9.47722 13.6469 12.3225C13.5884 13.0294 13.0286 13.5924 12.3221 13.6523C9.47788 13.8935 7.49526 13.893 4.68727 13.6535C3.97912 13.5931 3.41926 13.0271 3.36142 12.3184C3.13152 9.50187 3.08036 7.50461 3.344 4.655Z" stroke="#FF7527" />
                                    <path d="M5.83325 2.1665V4.49984" stroke="#FF7527" strokeLinecap="round" />
                                    <path d="M11.1667 2.1665V4.49984" stroke="#FF7527" strokeLinecap="round" />
                                    <path d="M3.5 6.5H13.5" stroke="#FF7527" strokeLinecap="round" />
                                    <path d="M5.83325 8.8335H5.83992" stroke="#FF7527" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M5.83325 11.1665H5.83992" stroke="#FF7527" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8.50659 8.8335H8.51326" stroke="#FF7527" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8.50659 11.1665H8.51326" stroke="#FF7527" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M11.1799 8.8335H11.1866" stroke="#FF7527" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M11.1799 11.1665H11.1866" stroke="#FF7527" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </span>
                            <span>Today : Apr 25, 2018 12:00 AM - Apr 26, 2018 12:00 AM</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                    <path d="M2.25 3.875L6.35858 7.98358C6.43668 8.06168 6.56332 8.06168 6.64142 7.98358L10.75 3.875" stroke="#828487" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* middle of the dashboard */}
                    <div className="dashboard_main_middle">
                        <div className="dashboard_middle_left">
                            <div className="dashboard_middle_left_top">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14 20.9617C11.4757 21.0582 9.16166 20.9724 6.23865 20.7048C5.19543 20.6092 4.36239 19.736 4.26588 18.6277C3.87042 14.0861 3.94716 10.903 4.292 6.41419C4.37877 5.28469 5.21856 4.38258 6.28078 4.28634C10.4928 3.90469 13.4667 3.9038 17.7331 4.28821C18.7928 4.38368 19.6326 5.28098 19.7203 6.4076C19.9822 9.77112 20.0688 12.3867 19.9433 15.3485M14 20.9617L19.9433 15.3485M14 20.9617V17.8485C14 16.4678 15.1193 15.3485 16.5 15.3485H19.9433M8 3V5.5M16 3V5.5" stroke="#828487" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M8 9.5H16" stroke="#828487" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M8 13H13" stroke="#828487" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <span>Barcha buyurtmalar</span>
                            </div>

                            <div className="dashboard_middle_left_middle">
                                <h1>342</h1>
                                <div>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                            <path d="M1.25 5.25L5 1.5L8.75 5.25" stroke="#73CB50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5 10.5V1.5" stroke="#73CB50" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        4.2%
                                    </span>
                                    <span>Ohirgi oy ichida</span>
                                </div>
                                <button>
                                    <span>Batafsil</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M5.16663 13.6665L10.6919 8.14126C10.77 8.06315 10.77 7.93652 10.6919 7.85842L5.16663 2.33317" stroke="#FF7527" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>


                        <div className="dashboard_middle_left dashboard_middle_right">
                            <div className="dashboard_middle_left_top">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <circle cx="12.5" cy="12" r="9" stroke="#FF3C00" strokeWidth="1.5" />
                                        <path d="M9.5 9L15.5 15M15.5 9L9.5 15" stroke="#FF3C00" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <span>Bekor qilingan buyurtmalar</span>
                            </div>

                            <div className="dashboard_middle_left_middle">
                                <h1>12</h1>
                                <div>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                            <path d="M1.75 6.75L5.5 10.5L9.25 6.75" stroke="#FF3C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.5 1.5V10.5" stroke="#FF3C00" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        1.5%
                                    </span>
                                    <span>Ohirgi oy ichida</span>
                                </div>
                                <button>
                                    <span>Batafsil</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M5.16663 13.6665L10.6919 8.14126C10.77 8.06315 10.77 7.93652 10.6919 7.85842L5.16663 2.33317" stroke="#FF7527" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* footer of the dashboard */}
                    <div className="dashboard_footer">
                        <h1>Vaqt bo'yicha statistika</h1>
                        <ChartComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrdersPanel;
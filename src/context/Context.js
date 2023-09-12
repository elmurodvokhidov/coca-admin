import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ContextData = React.createContext();

function ContextFunction({ children }) {

    // Employees data state
    const [employees, setEmployees] = useState([
        {
            table_num: 'T-06',
            full_name: 'Eshmatov Toshmat',
            age: '28',
            phone_num: '+998 99 111 44 56',
            position: 'Menejer',
            address: 'Namangan',
        },
        {
            table_num: 'T-06',
            full_name: 'Alakimov Alakim',
            age: '30',
            phone_num: '+998 99 886 20 66',
            position: 'Ofitsiant',
            address: 'Toshkent',
        },
        {
            table_num: 'T-06',
            full_name: 'Birnarsayev Birnarsa',
            age: '25',
            phone_num: '+998 99 001 56 11',
            position: 'Hisobchi',
            address: 'Samarqand',
        },
    ]);

    // Active link to Admin siderbar state
    const [activeSidebarLink, setActiveSidebarLink] = useState();

    // The IDENTIFICATOR CONDITION that changes the value of 'admin state'
    const location = useLocation();

    // Access the pathname from the location object
    const currentPath = location.pathname;

    useEffect(() => {
        if (currentPath === '/') {
            setActiveSidebarLink('dashboard');
        }
        else if (currentPath === '/employees') {
            setActiveSidebarLink('employees');
        }
        else if (currentPath === '/panel') {
            setActiveSidebarLink('panel')
        }
    }, [currentPath, activeSidebarLink]);

    return (
        <ContextData.Provider value={{
            employees,
            setEmployees,
            activeSidebarLink,
            setActiveSidebarLink,
        }}>
            {children}
        </ContextData.Provider>
    )
};

export default ContextFunction;
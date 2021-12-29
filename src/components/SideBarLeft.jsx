import React from 'react'
import { Tab, TabList } from 'react-tabs';

const tablists = [
    {ttite: "Dashboard", icon: "fas fa-tachometer-alt", disabled: true},
    {ttite: "Email", icon: "far fa-envelope", disabled: false},
    {ttite: "Contacts", icon: "fas fa-address-book", disabled: false},
    {ttite: "Crypto", icon: "fab fa-bitcoin", disabled: false},
    {ttite: "Kanban", icon: "fas fa-th-large", disabled: true},
    {ttite: "Invoicing", icon: "far fa-file", disabled: true},
    {ttite: "Banking", icon: "fab fa-cc-visa", disabled: true},
    {ttite: "Ticketing", icon: "fas fa-ticket-alt", disabled: true},
    {ttite: "File Manager", icon: "fas fa-folder-open", disabled: true},
    {ttite: "User", icon: "far fa-user", disabled: true},
    {ttite: "Calander", icon: "fas fa-calendar-week", disabled: true},
    {ttite: "Todo List", icon: "fas fa-th-list", disabled: true},
    {ttite: "Chat", icon: "fas fa-comments", disabled: true},
    {ttite: "Lastest Activity", icon: "fas fa-chart-line", disabled: true},
]

const SideBarLeft = () => {
    return (
    <div className="side_bar_left">
        <h2 className='title'>Portu.</h2>
        <TabList className="nav_list">
            {tablists.map((tab, index) => {
                return(
                    <Tab className="nav_item" key={index} disabled={tab.disabled}>
                        <i className={tab.icon}></i>
                        <span>{tab.ttite}</span>
                    </Tab>
                )
            })}
        </TabList>
    </div>
    )
}

export default SideBarLeft;

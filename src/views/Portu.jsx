import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SideBarRight from '../components/SideBarRight';
import { tablists } from '../components/data';
import MainContent from '../components/MainContent';


const Portu = () => {

    return (
        <main className='portu'>
            <div className='portu_wrapper'>
                <Tabs defaultIndex={1}>
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
                    <div className="main_content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-8 col-lg-12 col-md-12 col-12">
                                    <TabPanel>1</TabPanel>
                                    <TabPanel >
                                        <div className="email_tab">
                                            <MainContent />
                                        </div>
                                    </TabPanel>
                                    <TabPanel>3</TabPanel>
                                    <TabPanel>4</TabPanel>
                                    <TabPanel>5</TabPanel>
                                    <TabPanel>6</TabPanel>
                                    <TabPanel>7</TabPanel>
                                    <TabPanel>8</TabPanel>
                                    <TabPanel>9</TabPanel>
                                    <TabPanel>10</TabPanel>
                                    <TabPanel>11</TabPanel>
                                    <TabPanel>12</TabPanel>
                                    <TabPanel>13</TabPanel>
                                    <TabPanel>14</TabPanel>
                                </div>
                                <div className="col-xl-4 col-lg-12 col-md-12 col-12">
                                   <SideBarRight/>                                                               
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </main>
    )
}

export default Portu

import React, { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import img from "../assets/images/img.png"
import Item from '../components/Item';
import { items, tab_list } from '../components/data';

const MainContent = () => {

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      const endOffset = itemOffset + 5;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / 5));
    }, [itemOffset]);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * 5) % items.length;
      setItemOffset(newOffset);
    };

    return (
        <>
            <header className='header'>
                <div className="inner">
                    <h4 className='title'>Email</h4>
                    <div className="header_right">
                        <span className='icon'>
                            <i className="far fa-bell"></i>
                        </span>
                        <span className='icon'>
                            <i className="fas fa-cog"></i>
                        </span>
                        <div className="user">
                            <div>
                                <p>nella vita</p>
                                <span>admin</span>
                            </div>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </header>

            <div className="content">
                <Tabs className="tabs">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-12">
                            <TabList className="tab_list">
                                <div className="new_mail">
                                    <i className="fas fa-plus"></i>
                                    <span>New Mail</span>
                                </div>
                                {tab_list.map((item, index) => {
                                return(
                                <Tab className="tab" key={index}>
                                    <i className={item.icon}></i>
                                    <span>{item.title}</span>
                                </Tab>
                                )

                                })}
                            </TabList>
                        </div>
                        <div className="col-lg-8 col-md-12 col-12">
                            <div className='inner_content'>
                                <div className="search">
                                    <i className="fas fa-search"></i>
                                    <input type="search" name="search" id="search" placeholder='Search here...' />
                                </div>
                                <TabPanel>
                                    <div className="mail">
                                        <Tabs className="inner">
                                            <TabList className="mail_nav">
                                                <input type="checkbox" name="checkbox" id="checkbox" />
                                                <Tab className="nav_item">
                                                    <i className="fas fa-indent"></i>
                                                    <span>primary</span>
                                                </Tab>
                                                <Tab className="nav_item">
                                                    <i className="far fa-user-circle"></i>
                                                    <span>social</span>
                                                </Tab>
                                                <Tab className="nav_item">
                                                    <i className="fas fa-ticket-alt"></i>
                                                    <span>promotional</span>
                                                </Tab>
                                            </TabList>
                                            <TabPanel className="tab_panel">
                                                <div className="primary">
                                                    <Item currentItems={currentItems} />
                                                    <div className="paginate">
                                                        <p className='data'>
                                                            showing 1-5 from
                                                            {items.length} data
                                                        </p>
                                                        <ReactPaginate breakLabel="..." nextLabel={<i
                                                            className="fas fa-caret-right"></i>}
                                                            onPageChange={handlePageClick}
                                                            pageRangeDisplayed={5}
                                                            pageCount={pageCount}
                                                            previousLabel={<i className="fas fa-caret-left"></i>}
                                                            renderOnZeroPageCount={null}
                                                            containerClassName="paginateContainer"
                                                            pageClassName="paginateLi"
                                                            pageLinkClassName="paginateLink"
                                                            previousLinkClassName="paginatePrev"
                                                            nextLinkClassName="paginateNext"
                                                            activeClassName="activePaginate"
                                                        />
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel>2</TabPanel>
                                            <TabPanel>3</TabPanel>
                                        </Tabs>
                                    </div>
                                </TabPanel>
                                <TabPanel>2</TabPanel>
                                <TabPanel>3</TabPanel>
                                <TabPanel>4</TabPanel>
                                <TabPanel>5</TabPanel>
                                <TabPanel>6</TabPanel>
                                <TabPanel>7</TabPanel>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </>
    )
}

export default MainContent;

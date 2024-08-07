import React from 'react'
import formData from '@/formsdata.json'
import { FormsTable } from '@/components'
import { useState } from 'react';
import { LayoutDashboard, Users, Group, Dices, TicketCheck, Newspaper, UserRoundPlus, LogOut } from 'lucide-react';

const UserDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(!window.matchMedia("(min-width: 768px)").matches);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  };

  const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <button
            onClick={toggleSidebar}
            aria-controls="sidebar-multi-level-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 dark:text-gray-400 rounded-lg sm:hidden hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
        >
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>

        <aside
            id="sidebar-multi-level-sidebar"
            className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center justify-center py-4">
                    <img src="/images/logo2.png" alt="Logo" className="h-12 dark:hidden" />
                    <img src="/images/logo2.png" alt="Logo" className="h-12 hidden dark:block" />
                </div>
                <ul className="space-y-2 font-medium">
                    <li>
                        <button
                            type="button"
                            className="flex items-center w-full p-2 text-base text-gray-900 dark:text-gray-100 transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700"
                            aria-controls="dropdown-example"
                            onClick={toggleSidebar}
                        >
                            <span className="ms-3">Al Wahdania</span>
                        </button>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={() => setActiveTab("Dashboard")}
                            className={`flex items-center p-2 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-700 group ${activeTab === "Dashboard" ? "bg-gray-300 dark:bg-gray-700" : "text-gray-900 dark:text-gray-100"}`}
                        >
                            <LayoutDashboard className="text-gray-600 dark:text-gray-300" />
                            <span className="ms-3">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={() => setActiveTab("Members")}
                            className={`flex items-center p-2 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-700 group ${activeTab === "Members" ? "bg-gray-300 dark:bg-gray-700" : "text-gray-900 dark:text-gray-100"}`}
                        >
                            <Users className="text-gray-600 dark:text-gray-300" />
                            <span className="ms-3">Members</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={() => setActiveTab("Team")}
                            className={`flex items-center p-2 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-700 group ${activeTab === "Team" ? "bg-gray-300 dark:bg-gray-700" : "text-gray-900 dark:text-gray-100"}`}
                        >
                            <Group className="text-gray-600 dark:text-gray-300" />
                            <span className="ms-3">Team</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={() => setActiveTab("Events")}
                            className={`flex items-center p-2 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-700 group ${activeTab === "Events" ? "bg-gray-300 dark:bg-gray-700" : "text-gray-900 dark:text-gray-100"}`}
                        >
                            <Dices className="text-gray-600 dark:text-gray-300" />
                            <span className="ms-3">Events</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={() => setActiveTab("Blogs")}
                            className={`flex items-center p-2 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-700 group ${activeTab === "Blogs" ? "bg-gray-300 dark:bg-gray-700" : "text-gray-900 dark:text-gray-100"}`}
                        >
                            <Newspaper className="text-gray-600 dark:text-gray-300" />
                            <span className="ms-3">Blogs</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={() => setActiveTab("Users")}
                            className={`flex items-center p-2 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-700 group ${activeTab === "Users" ? "bg-gray-300 dark:bg-gray-700" : "text-gray-900 dark:text-gray-100"}`}
                        >
                            <UserRoundPlus className="text-gray-600 dark:text-gray-300" />
                            <span className="ms-3">Users</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={() => setActiveTab("Certificates")}
                            className={`flex items-center p-2 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-700 group ${activeTab === "Certificates" ? "bg-gray-300 dark:bg-gray-700" : "text-gray-900 dark:text-gray-100"}`}
                        >
                            <TicketCheck className="text-gray-600 dark:text-gray-300" />
                            <span className="ms-3">Certificates</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`flex items-center p-2 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-700 group ${activeTab === "Logout" ? "bg-gray-300 dark:bg-gray-700" : "text-gray-900 dark:text-gray-100"}`}
                        >
                            <LogOut className="text-gray-600 dark:text-gray-300" />
                            <span className="ms-3">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>

        <div className="p-4 sm:ml-64">
            {
                activeTab === "Dashboard" ?
                <div>
                <h1 className='text-3xl lg:text-6xl text-center font-mono text-gray-900 dark:text-gray-100'>User Dashboard</h1>
                <div className='w-full p-4 lg:p-10'>
                  <h2 className='text-xl lg:text-3xl mb-3 lg:mb-5 text-gray-900 dark:text-gray-300'>Submitted Incident Forms</h2>
                  <div className='rounded-lg overflow-hidden bg-white dark:bg-gray-800'>
                    <FormsTable forms={formData} />
                  </div>
                </div>
              </div>
                : null}
        </div>
    </div>
  );
}

export default UserDashboard

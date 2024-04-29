import React from 'react'
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import StProfile from '../Components/StProfile';
import TableMarks from '../Components/TableMarks';
import { useSelector } from 'react-redux';
import AdminList from '../Components/AdminList';
import ChartStudent from './ChartStudent';

const Profile = () => {

  return (
    <>
    <div className="overflow-x-auto mt-7">
      <Tabs aria-label="Full width  tabs" style="fullWidth">
        <Tabs.Item active title="Profile" icon={HiUserCircle}>
          <StProfile/>
        </Tabs.Item>
        <Tabs.Item title="Marks" icon={MdDashboard}>
         <TableMarks/>
        </Tabs.Item>
        <Tabs.Item title="Dashboard" icon={HiAdjustments}>
          <ChartStudent/>
        </Tabs.Item>
 
      </Tabs>
    </div>
    </>
  )
}

export default Profile

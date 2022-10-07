import React from 'react';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col shadow-lg bg-primary text-secondary">
      <SideBarIcon icon={<FaFire size="20" />} />
      <SideBarIcon icon={<BsPlus size="20" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      <SideBarIcon icon={<BsGearFill size="20" />} />
    </div>
  );
}

function SideBarIcon({ icon, text = 'tooltip' }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
}

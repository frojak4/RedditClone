'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import CommunityInList from './CommunityInList';
import { Pathway_Gothic_One } from 'next/font/google';

const SideBar = () => {

    const pathname = usePathname();

    const communities = [
        '/gaming', '/flowers', '/norway'
    ]

  return (
    <div className="hidden md:flex flex-col justify-between w-4/12 pt-8  border-r border-mutedmidgray">
        <div className="gap-2 px-4 flex flex-col">
        <CommunityInList active={pathname === '/home'} name={'home'}/>
        <h3 className="text-sm font-light px-4 py-2 border-b border-mutedmidgray/80 text-center">Your communities: </h3>
        {communities.map((community, i) => {
            return <CommunityInList name={community} active={pathname === community} key={i} />
        })}
        <h3 className="text-sm font-light px-4 py-2 border-b border-mutedmidgray/80 text-center">Other: </h3>
        <CommunityInList active={pathname === '/contact'} name={'contact'}/>
        <CommunityInList active={pathname === '/about'} name={'about'}/>
        </div>
        <div className="text-center text-sm">Made by Frode Jakobsen, 2025</div>
    </div>
  )
}

export default SideBar
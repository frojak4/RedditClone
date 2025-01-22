import PostInList from '@/components/PostInList'
import React from 'react'
import { FaPlus } from "react-icons/fa6";

const SubPage = async ({params}) => {

    const {slug} = await params


    const posts: Post[] = [
        {
            community: 'gaming',
            created_at: '13h ago',
            header: 'Hello gaming friends!',
            content: 'How are you guys doing?',
            user: 'Hubert69',
            upvotes: 4
        },
        {
            community: 'flowers',
            created_at: '13h ago',
            header: 'Hello flower friends!',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            user: 'fridtjof420',
            upvotes: 13
        },
        {
            community: 'norway',
            created_at: '13h ago',
            header: 'VERY NICE COUNTRY YES',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            user: 'frode',
            upvotes: 69
        },
        {
            community: 'gaming',
            created_at: '13h ago',
            header: 'Hello gaming friends!',
            content: 'How are you guys doing?',
            user: 'Hubert69',
            upvotes: 4
        },
        {
            community: 'flowers',
            created_at: '13h ago',
            header: 'Hello flower friends!',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            user: 'fridtjof420',
            upvotes: 13
        },
        {
            community: 'norway',
            created_at: '13h ago',
            header: 'VERY NICE COUNTRY YES',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            user: 'frode',
            upvotes: 69
        },
        {
            community: 'gaming',
            created_at: '13h ago',
            header: 'Hello gaming friends!',
            content: 'How are you guys doing?',
            user: 'Hubert69',
            upvotes: 4
        },
        {
            community: 'flowers',
            created_at: '13h ago',
            header: 'Hello flower friends!',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            user: 'fridtjof420',
            upvotes: 13
        },
        {
            community: 'norway',
            created_at: '13h ago',
            header: 'VERY NICE COUNTRY YES',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            user: 'frode',
            upvotes: 69
        },
        
    ]


  return (
    <div className='overflow-auto h-full max-h-[90vh]'>
        <section className="py-12">
            <div className="flex justify-between px-12 md:px-40">
                <h1 className="text-3xl">r/{slug}</h1>
                <div className="flex gap-6">
                    <button className="flex p-2 border border-white/30 hover:border-foreground rounded-full"><span className="mt-1"><FaPlus/></span>Create Post</button>
                    <button className="bg-lightestpurp/70 hover:bg-lightestpurp px-4 py-2 rounded-full">Join</button>
                </div>
            </div>
        </section>
        <div className="flex flex-col gap-2 overflow-auto md:px-36 px-8 pt-2">
            {posts.map((post, i) => {
                return <PostInList key={i} post={post} />
            })}
        </div>
    </div>
  )
}

export default SubPage
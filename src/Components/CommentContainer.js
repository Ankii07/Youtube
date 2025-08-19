import React, { useState } from 'react'
import my_pic from "../assets/my_pic.jpeg"
// n-level nesting..
const commentData = [
     {
        name: "Henry Ford",
        text: "Video is really awesome. ",
        replies: []
    },
    {   
        name: "Ankit Kumar",
        text: "Video can be improved as well.",
        replies: [
            {
                name: "Ankit Kumar",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
                replies: []
            },
            {
                name: "Ankit Kumar",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
                replies: []
            },
            {
                name: "Ankit Kumar",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
                replies: [
                    {
                        name: "Ankit Kumar",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
                        replies: []
                    },
                    {
                        name: "Ankit Kumar",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
                        replies: []
                    },
                    {
                        name: "Ankit Kumar",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
                        replies: [
                            {
                                name: "Ankit Kumar",
                                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
                                replies: []
                            },
                            {
                                name: "Ankit Kumar",
                                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
                                replies: []
                            },
                            {
                                name: "Ankit Kumar",
                                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
                                replies: [
                                    {
                                        name: "Ankit Kumar",
                                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
                                        replies: []
                                    },
                                    {
                                        name: "Ankit Kumar",
                                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
                                        replies: []
                                    },
                                    {
                                        name: "Ankit Kumar",
                                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
                                        replies: []
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "Ankit Kumar",
        text: "Lorem ipsum dolor sit amet consectetu.",
        replies: []
    },
    {
        name: "Ankit Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing quia.",
        replies: []
    },
    {
        name: "Ankit Kumar",
        text: "Lorem ipsum dolor sit amet consectetur am, quia.",
        replies: []
    },
    {
        name: "Ankit Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        replies: []
    },
]

const Comment = ({data}) => {
    const { name, text, replies } = data;
    return(
            <div className='flex gap-4 min-w-[50vw] mt-5'>
                <img className='min-w-10 min-h-10 max-h-10 rounded-full' src={my_pic} alt="" />
                <div className='flex flex-col  gap-2 min-w-[350px]'>
                <p className='font-bold text-sm flex '>{name}</p>
                <p className=' mt-1 min-w-[50vw] flex'>{text}</p>
                </div>
            </div>
    
    )
}

// important 
// recursive approach in components
const CommentList = ({comments}) => {
    const [showReplies, setShowReplies] = useState(false);
    
    const handleReply = () => {
        setShowReplies(!showReplies);
    }
    return (
        
            comments.map((comment, index) => (
                <div className='flex flex-col bg-slate-500 bg-opacity-30 min-w-[50vw] mt-5 rounded-lg '>
                    <Comment key={index} data={comment} />
                      <div className='ml-10 min-w-fit border-l-2 border-yellow-500  bg-slate-300 rounded-lg'>
                        {/* <Comment key={index} data={comment} />
                        <Comment key={index} data={comment} /> */}
                        {/* <Comment key={index} data={comment} />
                        <Comment key={index} data={comment} /> */}
                          {comment.replies.length > 0 &&  <p className='flex my-2 cursor-pointer' onClick={handleReply}>Reply :</p>}
                          { showReplies && <CommentList comments={comment.replies} key={index} />}
                      </div>

                </div>
            ))
    );
}

const CommentContainer = () => {
    return (
        <div className='flex flex-col max-w-[50vw]'>
        <h1 className='font-bold text-2xl font-serif flex'>Comments:</h1>
         {/* <Comment data={commentData[0]}/> */}
         <CommentList comments = {commentData}/>
        </div>
       
    )
}

export default CommentContainer
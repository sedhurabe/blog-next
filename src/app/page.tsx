'use client';
import React, { useState, ChangeEvent, use } from 'react';
import { useRouter } from 'next/navigation';
import Post from "./post";
import EditModel from "./editModel";
type DataObject = {
    id:number;
    date: Date;
    author: {
        name: string;
        role: string;
    };
};

type SObject = {
    id:number;
    date: Date;
    title: string, content: string;
    author: {
        name: string;
        role: string;
    };
};


export default function Home() {
    const router = useRouter();
    const [postObj, setPostObj] = useState({ title: '', content: '' });
    const [dataObj, setDataObj] = useState<DataObject[]>([]);
    const [isSelected, setIsselected] = useState<SObject>();
    const [isEdit, setIsEdit]= useState<Boolean>(false);

    const handleEdit = (elm:SObject, action: string) => {
        setIsselected(elm);
        if (action === 'Edit') {
            setPostObj({ ...elm, title: elm?.title, content: elm?.content });
            setIsEdit(true);
        } else {
            const result:any = dataObj.filter((el: {id: number}) => el?.id !== elm?.id);
            setDataObj(result);
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string) => {
        setPostObj({ ...postObj, [type]: e.target.value });
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (postObj?.title !== '' && postObj?.content !== '') {
            if (!isEdit) {
                const obj = { id: Math.random(), date: new Date(), author: { name: Math.random().toString(36).substring(2,7), role: 'Admin'}};
                const result = Object.assign(postObj, obj);
                setDataObj((prev) => [...prev, result]);
            } else {
                const result:any = dataObj.map((el: {id: number}) => el?.id === isSelected?.id ? postObj : el);
                setDataObj(result);
                setIsEdit(false);
            }
            
            setTimeout(() => {
                setPostObj({ title: '', content: '' })
            }, 100);
        } else {
            alert('Title and Content Should be empty');
        }
    }

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                </div>
                <div className="row">
                    <div className="col-8">
                        <Post data={dataObj} handleEdit={handleEdit} />
                    </div>
                    <div className="col-4">
                        <EditModel handleSubmit={handleSubmit} handleChange={handleChange} postObj={postObj} isEdit={isEdit} />
                    </div>
                </div>
            </div>
        </div>

    )
}

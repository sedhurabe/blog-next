'use client';
import React, { ChangeEvent } from 'react';

type props = {
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string) => void;
    postObj: { title: string; content: string }
    isEdit: Boolean
}
const EditModel = (props: props) => {
    const { handleSubmit, handleChange, postObj, isEdit } = props;
    const { title, content } = postObj;
    return (
        <>
        <h2>{isEdit ? 'Edit Your Post' : 'Add New Post'}</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-wrap">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => handleChange(e, 'title')} value={title} />
            </div>
            <div className="form-wrap">
                <label htmlFor="content">Add your content</label>
                <textarea rows={4} name="content" id="content" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" data-gramm="false" wt-ignore-input="true" data-quillbot-element="fEs3fA4kU0_LOWVfaE8zt" onChange={(e) => handleChange(e, 'content')} value={content}></textarea>
            </div>
            <div className="form-wrap">
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>
        </>
    );
}

export default EditModel;

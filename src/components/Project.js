import React, { useState } from 'react';
import expandMore from '../imgs/expand-more.png';
import expandLess from "../imgs/expand-less.png";
import experience from "../imgs/work.png";

export function Project({ projectData, setProjectData }) {
    const [visible, setVisible] = useState(false);
    const toggleForm = () => {
        setVisible(!visible);
    }

    const formHandler = (e) => {
        const { name, value } = e.target;
        setProjectData(prevData => {
            switch (name) {
                case "projectTitle_1":
                    return {
                        ...prevData,
                        project_1: {
                            ...prevData.project_1,
                            title: value,
                        }
                    };
                case "firstCompany":
                    return {
                        ...prevData,
                        project_1: {
                            ...prevData.project_1,
                            company: value
                        }
                    };
                case "startDateProject_1":
                    return {
                        ...prevData,
                        project_1: {
                            ...prevData.project_1,
                            startDate: value,
                        }
                    };
                case "description_l1_1":
                    return {
                        ...prevData,
                        project_1: {
                            ...prevData.project_1,
                            explain_1: value
                        }
                    };
                case "description_l2_1":
                    return {
                        ...prevData,
                        project_1: {
                            ...prevData.project_1,
                            explain_2: value
                        }
                    };
                case "description_l3_1":
                    return {
                        ...prevData,
                        project_1: {
                            ...prevData.project_1,
                            explain_3: value
                        }
                    };
                case "projectTitle_2":
                    return {
                        ...prevData,
                        project_2: {
                            ...prevData.project_2,
                            title: value,
                        }
                    };
                case "secondCompany":
                    return {
                        ...prevData,
                        project_2: {
                            ...prevData.project_2,
                            company: value
                        }
                    };
                case "startDateProject_2":
                    return {
                        ...prevData,
                        project_2: {
                            ...prevData.project_2,
                            startDate: value,
                        }
                    };
                case "description_l1_2":
                    return {
                        ...prevData,
                        project_2: {
                            ...prevData.project_2,
                            explain_1: value
                        }
                    };
                case "description_l2_2":
                    return {
                        ...prevData,
                        project_2: {
                            ...prevData.project_2,
                            explain_2: value
                        }
                    };
                case "description_l3_2":
                    return {
                        ...prevData,
                        project_2: {
                            ...prevData.project_2,
                            explain_3: value
                        }
                    };
                default:
                    return prevData;
            }
        });
    }

    return (
        <div className='wrapper w-[480px] min-h-[100px] shadow-lg shadow-gray-500 bg-white rounded-lg flex flex-col justify-start gap-4 '>
            <div className="header flex flex-row items-center justify-around mt-6" onClick={toggleForm} >
                <img className="w-[50px]" src={experience} alt='person' />
                <p className='text-lg font-bold'>Professional/Project Experience</p>
                <img
                    onClick={toggleForm}
                    src={visible ? expandLess : expandMore}
                    className="expand-icon w-[20px]  cursor-pointer"
                    alt="toggle"
                />
            </div>
            {visible && (
                <div className='px-10 pb-4'>
                    <div className='flex flex-col py-1'>
                        <label htmlFor="title_1" className='font-bold opacity-70'>(1) Project/ Job Title</label>
                        <input type="text" name="projectTitle_1" placeholder='Enter your Project/ Job Title ' id="title_1" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler} />
                    </div>
                    <div className='flex flex-col py-1'>
                        <label htmlFor="company_1" className='font-bold opacity-70'>Company</label>
                        <input type="text" name="firstCompany" placeholder={`Enter your company's name`} id="company_1" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler} />
                    </div>
                    <div className="dates flex justify-around">
                        <div>
                            <label htmlFor="startDate_1" className='block opacity-70 font-bold'>Month of Project</label>
                            <input type="date" name="startDateProject_1" id="startDate_1" className='outline py-2 px-2  rounded-md' onChange={formHandler} />
                        </div>
                    </div>
                    <div className='flex flex-col py-1 gap-4'>
                        <label htmlFor="desc" className='opacity-70 font-bold'>Description <span className='italic text-sm font-normal'>(in bullet points)</span></label>
                        <input type="text" name="description_l1_1" placeholder='Point 1' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler} />
                        <input type="text" name="description_l2_1" placeholder='Point 2' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler} />
                        <input type="text" name="description_l3_1" placeholder='Point 3' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler} />
                    </div>

                    {/* Project-2 */}
                    <div className='flex flex-col py-1 mt-6'>
                        <label htmlFor="title_2" className='font-bold opacity-70'>(2) Project/Job Title</label>
                        <input type="text" name="projectTitle_2" placeholder='Enter your Project/ Job Title ' id="title_2" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler} />
                    </div>
                    <div className='flex flex-col py-1'>
                        <label htmlFor="company_2" className='font-bold opacity-70'>Company</label>
                        <input type="text" name="secondCompany" placeholder="Enter your company's name" id="company_2" className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler} />
                    </div>
                    <div className="dates flex justify-around">
                        <div>
                            <label htmlFor="startDate_2" className='block opacity-70 font-bold'>Month of Project</label>
                            <input type="date" name="startDateProject_2" id="startDate_2" className='outline py-2 px-2  rounded-md' onChange={formHandler} />
                        </div>
                    </div>
                    <div className='flex flex-col py-1 gap-4'>
                        <label htmlFor="desc" className='opacity-70 font-bold'>Description <span className='italic text-sm font-normal'>(in bullet points)</span></label>
                        <input type="text" name="description_l1_2" placeholder='Point 1' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler} />
                        <input type="text" name="description_l2_2" placeholder='Point 2' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler} />
                        <input type="text" name="description_l3_2" placeholder='Point 3' className='bg-[#eef0f4] px-2 py-2 rounded-md outline-none' onChange={formHandler} />
                    </div>

                </div>
            )}
        </div>
    );
}

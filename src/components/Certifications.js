import React, { useState } from "react";
import Certificates from "../imgs/Certificates.png";
import expandMore from '../imgs/expand-more.png';
import expandLess from "../imgs/expand-less.png";

export function CoCurricular({ Certificate, setCertificates }) {
  const [visible, setVisible] = useState(false);

  const toggleForm = () => {
    setVisible(!visible);
  };

  const formHandler = (e) => {
    const { name, value } = e.target;
    setCertificates({
      ...Certificate,
      [name]: value,
    });
  };

  return (
    <div className="wrapper w-[480px] min-h-[100px] shadow-lg shadow-gray-500 bg-white rounded-lg flex flex-col justify-start gap-4 ">
      <div
        className="header flex flex-row items-center justify-around mt-6"
        onClick={toggleForm}
      >
        <img className="w-[50px]" src={Certificates} alt="person" />
        <p className="text-lg font-bold">Certifications</p>
        <img
          onClick={toggleForm}
          src={visible ? expandLess : expandMore}
          className="expand-icon w-[20px]  cursor-pointer"
          alt="toggle visibility"
        />
      </div>
      {visible && (
        <div className="px-10 pb-4">
          <div className="flex flex-col py-1">
            <label htmlFor="Certificate_1_url" className="font-bold opacity-70">
              Certificate Number 1
            </label>
            <input
              type="text"
              name="certificate_1_url"
              placeholder=" URL Link of the Certificate"
              id="Certificate_1_url"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
              onChange={formHandler}
            />
            <input
              type="text"
              name="certificate_1_name"
              placeholder=" Name of the certified Course"
              id="Certificate_1_name"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none mt-2"
              onChange={formHandler}
            />
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="Certificate_2_url" className="font-bold opacity-70">
              Certificate Number 2
            </label>
            <input
              type="text"
              name="certificate_2_url"
              placeholder=" URL Link of the Certificate"
              id="Certificate_2_url"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
              onChange={formHandler}
            />
            <input
              type="text"
              name="certificate_2_name"
              placeholder=" Name of the certified Course"
              id="Certificate_2_name"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none mt-2"
              onChange={formHandler}
            />
          </div>
          <div className="flex flex-col py-1">
            <label htmlFor="Certificate_3_url" className="font-bold opacity-70">
              Certificate Number 3
            </label>
            <input
              type="text"
              name="certificate_3_url"
              placeholder=" URL Link of the Certificate"
              id="Certificate_3_url"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none"
              onChange={formHandler}
            />
            <input
              type="text"
              name="certificate_3_name"
              placeholder=" Name of the certified Course"
              id="Certificate_3_name"
              className="bg-[#eef0f4] px-2 py-2 rounded-md outline-none mt-2"
              onChange={formHandler}
            />
          </div>
        </div>
      )}
    </div>
  );
}

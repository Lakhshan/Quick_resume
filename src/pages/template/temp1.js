import React, { useState } from "react";
import {GeneralInformation} from "../../components/GeneralInformation.js";
import {Header} from "../../components/Header.js";


export function Template1() {
  const [generalInformation, SetGeneralInformation] = useState({
    fullName: "",
    phoneNumber:null,
    email: "",
    description: "",
  });
  return (
    <div className="bg-wallpaper flex  m-10 gap-x-14">
      <Header />
      <ul className="flex flex-col gap-4">
        <li>
          {/* <SaveResume generatePDF={generatePDF}/> */}
        </li>
        <li>
          <GeneralInformation
            generalInformation={generalInformation}
            SetGeneralInformation={SetGeneralInformation}
          />
        </li>
        <li>
          {/* <EducationComponent
            Education={Education}
            setEducation={setEducation}
          /> */}
        </li>
        <li>
          {/* <Project projectData={projectData} setProjectData={setProjectData} /> */}
        </li>
        <li>
          {/* <CoCurricular Certificate={Certificates} setCertificates={setCertificates} /> */}
        </li>
      </ul>
      <div id="displayComponent" className="w-[794px] h-[1123px]">
        {/* <Display
              generalInformation={generalInformation}
              Education={Education}
              projectData={projectData}
              Certificates ={Certificates}
            /> */}
      </div>
    </div>
  );
}

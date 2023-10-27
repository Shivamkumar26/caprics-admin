import React, { useState } from "react";
import CuLogo from "./images/caprics-user-logo.png";
import CousreImage from "./images/course-management.png";
import CmLogo from "./images/caprics-master.png";
import "./Tabs.css"

const Tab = ({ label, isActive, onClick, icon}) => {
  const activeStyle = {
    color: isActive ? "#FFC327" : "white",
    fontSize: isActive ? "18px" : "16px",
    fontWeight: isActive ? "600" : "500",
  };

  return (
    <li className="tab">
      <img src={icon} alt="icon" className="icon"/>
      <a href="#" style={activeStyle} onClick={onClick}>
        {label}
      </a>
    </li>
  );
};

const SubTab = ({ label, isActive, onClick }) => {
  const activeStyle = {
    color: isActive ? "#FFC327" : "white",
    fontWeight: isActive ? "700" : "400",
  };

  return (
    <div className="subtab">
      <a href={label} style={activeStyle} onClick={onClick}>
        {label}
      </a>
    </div>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Caprics Master");

  const handleClick = (label) => {
    setActiveTab(label);
  };

  const [activeTab2, setActiveTab2] = useState("Institution Type");
  const handleClick2 = (label) => {
    setActiveTab2(label);
  };
  return (
    <div className="tabs">
      <ul>
        <Tab
          label="Caprics User"
          isActive={activeTab === "Caprics User"}
          onClick={() => handleClick("Caprics User")}
          icon={CuLogo}
          className="tab-a"
        />
        <Tab
          label="Caprics Master"
          isActive={activeTab === "Caprics Master"}
          onClick={() => handleClick("Caprics Master")}
          icon={CmLogo}
          className="tab-a"
        />
        <Tab
          label="Course Management"
          isActive={activeTab === "Course Management"}
          onClick={() => handleClick("Course Management")}
          icon={CousreImage}
          className="tab-a"
        />
      </ul>

      <div className="subtabs">
        {activeTab === "Caprics Master" && (
          <SubTab 
            label="Institution Type" 
            isActive={activeTab2 === "Institution Type"}
            onClick={() => handleClick2("Institution Type")}
          />
        )}
        {activeTab === "Caprics Master" && <SubTab label="Version" 
        isActive={activeTab2 === "Version"}
        onClick={() => handleClick2("Version")}
        />}
        {activeTab === "Caprics Master" && <SubTab label="Board"
        isActive={activeTab2 === "Board"}
        onClick={() => handleClick2("Board")} />}
        {activeTab === "Caprics Master" && <SubTab label="Class" 
        isActive={activeTab2 === "Class"}
        onClick={() => handleClick2("Class")} />}
        {activeTab === "Caprics Master" && <SubTab label="Subject" 
        isActive={activeTab2 === "Subject"}
        onClick={() => handleClick2("Subject")}/>}
        {activeTab === "Caprics Master" && <SubTab label="Skill" 
        isActive={activeTab2 === "Skill"}
        onClick={() => handleClick2("Skill")}/>}
        {activeTab === "Caprics Master" && <SubTab label="City" 
        isActive={activeTab2 === "City"}
        onClick={() => handleClick2("City")}/>}
        {activeTab === "Caprics Master" && <SubTab label="State" 
        isActive={activeTab2 === "State"}
        onClick={() => handleClick2("State")}/>}
        {activeTab === "Caprics Master" && <SubTab label="Methodology" 
        isActive={activeTab2 === "Methodology"}
        onClick={() => handleClick2("Methodology")}/>}
        {activeTab === "Caprics Master" && <SubTab label="Domain" 
        isActive={activeTab2 === "Domain"}
        onClick={() => handleClick2("Domain")}/>}
        {activeTab === "Caprics Master" && <SubTab label="Taxonomy" 
        isActive={activeTab2 === "Taxonomy"}
        onClick={() => handleClick2("Taxonomy")}/>}
      </div>
    </div>
  );
};

export default Tabs;

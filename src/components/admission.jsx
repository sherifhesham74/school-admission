import React, { useState } from 'react';
import "../css/admission.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGenderless } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';



const Form = () => {
  const [nationality, setNationality] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [passport, setPassport] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [religion, setReligion] = useState('');
  const [currentSchool, setCurrentSchool] = useState('');
  const [grade, setGrade] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [schoolBranch, setSchoolBranch] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [birthCertificateFile, setBirthCertificateFile] = useState(null);
  const [requireBusTransportation, setRequireBusTransportation] = useState(false);

  const [birthCertificate, setBirthCertificate] = useState(null);
  const [hasSiblings, setHasSiblings] = useState(false);
  const [governorate, setGovernorate] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleBirthCertificateUpload = (event) => {
    const file = event.target.files[0];
    setBirthCertificate(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any additional validation or submit the form data to an API
    // For simplicity, we'll just log the form data
    console.log({
      nationality,
      nationalId,
      passport,
      fullName,
      gender,
      birthdate,
      religion,
      currentSchool,
      grade,
      academicYear,
      schoolBranch,
      emergencyPhone,
      image,
      birthCertificate,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className='row'>
<div className='col-md-11 mb-3'>
<h3> Admission Form </h3> 
</div>
<div className='col-md-1'>
<img src="./stars.jpg" width={"30px"} alt="" />
</div>
</div>
<div className='row mb-3'>
  <img src="./1.jpg" alt="" />
</div>
      <div className="row">
      <span> Has siblings in school ?  </span>
      <div className="col-md-12 mb-3 ">
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                name="hasSiblings"
                id="hasSiblingsYes"
                value="true"
                checked={hasSiblings}
                onChange={() => setHasSiblings(true)}
              />
              <label className="form-check-label" htmlFor="hasSiblingsYes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="hasSiblings"
                id="hasSiblingsNo"
                value="false"
                checked={!hasSiblings}
                onChange={() => setHasSiblings(false)}
              />
              <label className="form-check-label" htmlFor="hasSiblingsNo">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3  ">  
              <input type="text" placeholder='Nationality' className="form-control" value={nationality} onChange={(e) => setNationality(e.target.value)} />
          </div>
          <div className="col-md-4 mb-3 ">
              <input type="text" placeholder=' National ID' className="form-control" value={nationalId} onChange={(e) => setNationalId(e.target.value)} />
          </div>
          <div className="col-md-4 mb-3 ">
              <input type="text" placeholder=' passport' className="form-control" value={nationalId} onChange={(e) => setNationalId(e.target.value)} />
          </div>
        </div>
        <div className="row">
        <div className="col-md-4 mb-3 ">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              <input type="text" className="form-control" placeholder="Student Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
          </div>
          <div className="col-md-4 mb-3 ">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                 <i class="fas fa-mars"></i>
                </span>
              </div>
              <select className="form-control " value={gender} onChange={(e) => setGender(e.target.value)}> 
               
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
               
                <i class="fas fa-arrow-circle-down"></i>
              </select>
       
            </div>
            
          </div>
          <div className="col-md-4"> 
        <input type="date" className="form-control " placeholder='birthdate' value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
        </div>
        </div>
        <div className="row"> 
        <div className="col-md-4 mb-3 "> 
        <input type="text" className="form-control " placeholder='religion' value={religion} onChange={(e) => setReligion(e.target.value)} />     
           </div>
        <div className="col-md-4"> 
        <input type="text" className="form-control " placeholder='current school ' value={currentSchool} onChange={(e) => setReligion(e.target.value)} />     
           </div>
        <div className="col-md-4"> 
        <input type="text" className="form-control " placeholder='Grade applying for' value={ grade} onChange={(e) => setReligion(e.target.value)} />     
           </div>
        </div>
        <div className="row row border-bottom border-dark"> 
        <div className="col-md-4 mb-3"> 
        <input type="text" className="form-control " placeholder='Academic Year' value={academicYear} onChange={(e) => setReligion(e.target.value)} />     
           </div>
        <div className="col-md-4"> 
        <input type="text" className="form-control " placeholder='School Branch ' value={schoolBranch} onChange={(e) => setReligion(e.target.value)} />     
           </div>
        <div className="col-md-4"> 
        <input type="text" className="form-control " placeholder='Emergency phone ' value={emergencyPhone} onChange={(e) => setReligion(e.target.value)} />     
           </div>
        </div>

        {/* More form fields and columns */}

        <div className="row border-bottom border-dark pt-3">
          <div className="col-md-6 ">
            <div className="form-group">
           
              <div className="custom-file">
                <input
                  type="file"
                  accept="image/*"
                  className="custom-file-input"
                  id="imageUpload"
                  onChange={handleImageUpload}
                />
                <label className="custom-file-label" htmlFor="imageUpload">
                  {imageFile ? imageFile.name : 'Upload Image:'} <i class="fas fa-file-upload"></i>
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
           
              <div className="custom-file">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="custom-file-input"
                  id="birthCertificateUpload"
                  onChange={handleBirthCertificateUpload}
                />
                <label className="custom-file-label" htmlFor="birthCertificateUpload">
                  {birthCertificateFile ? birthCertificateFile.name : 'Upload Birth Certificate:' } <i class="fas fa-file-upload"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mb-3">
          <span > will your child require bus transportation   ?   </span>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                name="requireBusTransportation"
                id="requireBusTransportationYes"
                value="true"
                checked={requireBusTransportation}
                onChange={() => setRequireBusTransportation(true)}
              />
              <label className="form-check-label" htmlFor="requireBusTransportationYes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="requireBusTransportation"
                id="requireBusTransportationNo"
                value="false"
                checked={!requireBusTransportation}
                onChange={() => setRequireBusTransportation(false)}
              />
              <label className="form-check-label" htmlFor="requireBusTransportationNo">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <input
              type="text"
              placeholder="Governorate"
              className="form-control"
              value={governorate}
              onChange={(e) => setGovernorate(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              placeholder="City"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              placeholder="Address"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 pl-4">
            <button type="submit" className="btn btn-secondary">back</button>
          </div>
          <div className="col-md-1 pl-5  ">
            <Link to="/admission2" className="btn btn-primary">Next</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;


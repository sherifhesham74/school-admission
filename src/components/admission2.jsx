import React, { useState } from "react";
import "../css/admission.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGenderless } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Form2 = () => {
  const [nationality, setNationality] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [passport, setPassport] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [homephone, setHomePhone] = useState("");
  const [martial, setMartialStatues] = useState("");
  const [religion, setReligion] = useState("");
  const [place, setPlace] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [birthCertificateFile, setBirthCertificateFile] = useState(null);
  const [requireBusTransportation, setRequireBusTransportation] =
    useState(false);

  const [birthCertificate, setBirthCertificate] = useState(null);
  const [hasSiblings, setHasSiblings] = useState(false);
  const [governorate, setGovernorate] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

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
      mobileNumber,
      email,
      religion,
      homephone,
      martial,
      job,
      place,
      emergencyPhone,
      image,
      birthCertificate,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-11 mb-3">
            <h3> Admission Form </h3>
          </div>
          <div className="col-md-1">
            <img src="./stars.jpg" width={"30px"} alt="" />
          </div>
        </div>
        <div className="row mb-3">
          <img src="./2.jpg" alt="" />
        </div>

        <div className="row">
          <div className="col-md-4 mb-3  ">
            <input
              type="text"
              placeholder="Nationality"
              className="form-control"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </div>
          <div className="col-md-4 mb-3 ">
            <input
              type="text"
              placeholder=" National ID"
              className="form-control"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
            />
          </div>
          <div className="col-md-4 mb-3 ">
            <input
              type="text"
              placeholder=" passport"
              className="form-control"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
            />
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
              <input
                type="text"
                className="form-control"
                placeholder="Father Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4 mb-3 ">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <i class="fas fa-phone-alt"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Mobile Phone "
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
          </div>
      
          <div className="col-md-4">
            
            <input
            
              type="text"
              className="form-control "
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
          </div>
        </div>
        <div className="row">
        <div className="col-md-4">
            <input
              type="text"
              className="form-control "
              placeholder=" Home Phone "
              value={homephone}
              onChange={(e) => setHomePhone(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control "
              placeholder="Martial  Status "
              value={martial}
              onChange={(e) => setMartialStatues(e.target.value)}
            />
          </div>
          <div className="col-md-4 mb-3 ">
            <input
              type="text"
              className="form-control "
              placeholder="religion"
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
            />
          </div>
        
 
        </div>
        <div className="row ">
          <div className="col-md-4 mb-3">
            <input
              type="text"
              className="form-control "
              placeholder="job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </div>
       
          <div className="col-md-4">
            <input
              type="text"
              className="form-control "
              placeholder="place of work "
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
        </div>

        {/* More form fields and columns */}

        <div className="row">
          <div className="col-md-10 pl-4">
            <Link to="/admission" className="btn btn-secondary">
              back
            </Link>
          </div>
          <div className="col-md-1 pl-5  ">
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form2;

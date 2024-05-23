import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserProfile } from '../../Features/Users/userSlicer';
import { AppDispatch } from '../../app/store'; // Adjust the import according to your store setup
import './userprofile.css';
import bg from '../images/userbg.png';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const UserProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const resultAction = await dispatch(fetchUserProfile()).unwrap();
        setUser(resultAction);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch user profile');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [dispatch]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="user-image-container">
        <img className="user-image-start" src={bg} alt="" />
        <div className="overlay">
          <h2 className="user-text">Welcome User!</h2>
        </div>
      </div>

      <div className="user-profile-container">
        {error && <div className="error-message">{error}</div>}
        {user && (
          <div className="user-profile">
            <div className="profile-details">
              <h2 className="username">{user.firstName} {user.lastName}</h2>
              <p className="userinfohead"><MdOutlineMail />  Email: </p><p className="userinfotext">{user.email}</p>
              <p className="userinfohead"><FaPhoneAlt />   Contact: </p><p className="userinfotext">{user.contact}</p>
              <p className="userinfohead"><CiLocationOn />  Address: </p><p className="userinfotext">{user.address}</p>
              <div>
                <p className="userinfohead">
                  {user.gender === 'F' && <FaFemale />}
                  {user.gender === 'M' && <FaMale />}
                  Gender:
                </p>
                <p className="userinfotext">
                  {user.gender === 'F' ? 'Female' : 'Male'}
                </p>
              </div>
              <div>
                <p className="userinfohead">
                  <MdDateRange /> Date of Birth:
                </p>
                <p className="userinfotext">
                  {formatDate(user.dob)}
                </p>
              </div>
            </div>
            <img 
              src={`http://localhost:3000/images/1716444248905-chaenwoo.jpeg`} 
              alt="User" 
              className="profile-image" 
            />
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import ActiveLink from '../../Components/CollegeGallery/ActiveLink';
import logo from '../../assets/campus-guru.png'

const Header = () => {
      const { user, logOut } = useContext(AuthContext)


      console.log(user);

      const handleLogout = () => {
            logOut()
                  .then(() => { })
                  .catch(error => console.log(error))

      }
      return (
            <div>
                  <div className="navbar bg-slate-400">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                          <li> <ActiveLink to={'/'}>Home</ActiveLink></li>
                                          <li> <ActiveLink to={'/colleges'}>Colleges</ActiveLink></li>
                                          <li> <ActiveLink to={'/admission'}>Admission</ActiveLink></li>
                                          <li> <ActiveLink to={'/mycollege'}>My College</ActiveLink></li>
                                          <li> <ActiveLink to={'/searchcollege'}>Search College</ActiveLink></li>

                                    </ul>
                              </div>
                              <Link to={'/'}>
                              <img className='w-[200px]' src={logo} alt="" />
                              </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">
                                    <li> <ActiveLink to={'/'}>Home</ActiveLink></li>
                                    <li> <ActiveLink to={'/colleges'}>Colleges</ActiveLink></li>
                                    <li> <ActiveLink to={'/admission'}>Admission</ActiveLink></li>
                                    <li> <ActiveLink to={'/mycollege'}>My College</ActiveLink></li>
                                    <li> <ActiveLink to={'/searchcollege'}>Search College</ActiveLink></li>
                              </ul>
                        </div>
                        <div className="navbar-end">
                              {
                                    user ? <>

                                          {/* <img className='w-[50px] border-4 me-4' style={{ borderRadius: "50%", height: "50px" }} title={user.displayName} src={user.photoURL} />
                                          <p>{user.displayName}</p> */}
                                          <button className='text-orange-400 bg-slate-600 hover:bg-slate-800 px-4 py-2 rounded-md me-2 font-semibold' onClick={handleLogout}>LogOut</button>
                                          <Link className='text-slate-400 bg-slate-600 hover:bg-slate-800 px-4 py-2 rounded-md font-semibold' to={'/profile'}>Profile</Link>
                                    </>
                                          : <Link className='text-green-400 bg-slate-600 hover:bg-slate-800 px-4 py-2 rounded-md' to={'/login'}>  Login   </Link>
                              }
                        </div>
                  </div>
            </div>
      );
};

export default Header;
import React from 'react'

const StaffForm = () => {
    return (
        <div className='container-fluid'>
            <form >
                <div className='card mb-1 mt-1'>
                    <div className='d-flex p-2 --border'>
                        <div className='mx-2 bg-primary'>
                            <a href='#back' className='text-white'>
                                <i class="fa fa-arrow-left mx-1"></i>
                                <span className='mx-1'>Back</span>
                            </a>
                        </div>
                        <span className='text-primary'>Enroll New Staff</span>
                    </div>
                    <div className='mt-4' >
                        <h5 className='text-center'>BRANCH : SHAHEEN JUNIOR COLLEGE</h5>
                    </div>
                    <div className='border m-3'>
                        <div className='--bg1'>
                            <p className='mt-2'>staff Details</p>
                        </div>
                        <div className='container-fluid'>

                            <div className='mt-4'>
                                <div className='row'>
                                    <div className='col-6 col-md-3'>
                                        <label>Employement Status:</label>
                                        <select class="form-select form-control w-100">
                                            <option selected>Temporary</option>
                                            <option value="1">One</option>
                                        </select>
                                    </div>
                                    <div className='col-6 col-md-3'>
                                        <label>Staff Type:</label>
                                        <div>
                                            <input type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
                                            <label class="form-check-label" for="flexRadioDefault1">Teaching</label>
                                            <input type='radio' name='flexRadioDefault' id='flexRadioDefault2' className='ml-2' />
                                            <label class="form-check-label" for="flexRadioDefault2">Non Teaching</label>
                                            <input type='radio' name='flexRadioDefault' id='flexRadioDefault3' className='ml-2' />
                                            <label class="form-check-label" for="flexRadioDefault3">Transport</label>
                                        </div>
                                    </div>
                                    <div className='col-6 col-md-3'>
                                        <label>staff Department:*</label>
                                        <select class="form-select form-control w-100">
                                            <option selected>-Select Department-</option>
                                            <option value="1">One</option>
                                        </select>
                                    </div>
                                    <div className='col-6 col-md-3'>
                                        <label>Employement Category:*</label>
                                        <select class="form-select form-control w-100">
                                            <option selected>-Select Category-</option>
                                            <option value="1">One</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div className='row'>
                                    <div className='col-6 col-md-3'>
                                        <label>Designation:*</label>
                                        <select class="form-select form-control w-100">
                                            <option selected>-Select Department-</option>
                                            <option value="1">One</option>
                                        </select>
                                    </div>
                                    <div className='col-6 col-md-3'>
                                        <label>Qualification Type:*</label>
                                        <select class="form-select form-control w-100">
                                            <option selected>-Select Qualification-</option>
                                            <option value="1">One</option>
                                        </select>
                                    </div>
                                    <div className='col-6 col-md-3'>
                                        <label>Education Qualification:*</label>
                                        <select class="form-select form-control w-100">
                                            <option selected>-Select Qualification-</option>
                                            <option value="1">One</option>
                                        </select>
                                    </div>
                                    <div className='col-6 col-md-3'>
                                        <label>Access Level:*</label>
                                        <select class="form-select form-control w-100">
                                            <option selected>-Select Access Level-</option>
                                            <option value="1">One</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div className='row'>
                                    <div className='col-6 col-md-3'>
                                        <label>Trained As:*</label>
                                        <select class="form-select form-control w-100">
                                            <option selected>-Select Level-</option>
                                            <option value="1">One</option>
                                        </select>
                                    </div>
                                    <div className='col-6 col-md-3'>
                                        <label>CTET Qualified:</label>
                                        <div>
                                            <input type='radio' name='flexRadioDefault' id='yes' />
                                            <label class="form-check-label" for="yes">Yes</label>
                                            <input type='radio' name='flexRadioDefault' id='no' className='ml-2' />
                                            <label class="form-check-label" for="no">No</label> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='--bg1'>
                                <p className='mt-2'>Personal Details</p>
                            </div>
                            <div className='container-fluid'>

                                <div className='mt-4'>
                                    <div className='row'>
                                        <div className='col-6 col-md-3'>
                                            <label for="firstname" class="form-label">First Name:*</label>
                                            <input type="text" class="form-control" id="firstname" />
                                        </div>
                                        <div className='col-6 col-md-3'>
                                            <label for="middlename" class="form-label">Middle Name:*</label>
                                            <input type="text" class="form-control" id="middlename" />
                                        </div>
                                        <div className='col-6 col-md-3'>
                                            <label for="lastname" class="form-label">Last Name:*</label>
                                            <input type="text" class="form-control" id="lastname" />
                                        </div>
                                        <div className='col-6 col-md-3'>
                                            <label for="mobileno" class="form-label">Mobile No:*</label>
                                            <input type="text" class="form-control" id="mobileno" />
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <div className='row'>
                                        <div className='col-6 col-md-3'>
                                            <label for="mobileno" class="form-label">Emergency Contact No:*</label>
                                            <input type="text" class="form-control" id="mobileno" />
                                        </div>
                                        <div className='col-6 col-md-3'>
                                            <label>Gender:*</label>
                                            <div>
                                                <input type='radio' name='gender' id='male' />
                                                <label class="form-check-label" for="male">Male</label>
                                                <input type='radio' name='gender' id='female' className='ml-2' />
                                                <label class="form-check-label" for="female">Female</label>
                                                <input type='radio' name='gender' id='other' className='ml-2' />
                                                <label class="form-check-label" for="other">Other</label>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-3'>
                                            <label for="dob" class="form-label">Enter Date of Birth:*</label>
                                            <input type="date" class="form-control" id="dob" />
                                        </div>
                                        <div className='col-6 col-md-3'>
                                            <label for="email" class="form-label">Email ID:*</label>
                                            <input type="email" class="form-control" id="email" />
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <div className='row'>
                                        <div className='col-12 col-md-3'>
                                            <label for='permanentaddress' class="form-label">Permanent Address:*</label>
                                            <textarea id="permanentaddress" rows="2" cols="38"></textarea>
                                        </div>
                                        <div className='col-12 col-md-3'>
                                            <label for='permanentaddress' class="form-label">Corresponding Address:*</label>
                                            <textarea id="permanentaddress" rows="2" cols="38"></textarea>
                                        </div>
                                        <div className='col-6 col-md-3'>
                                            <label>Religion:*</label>
                                            <select class="form-select form-control w-100">
                                                <option selected value={'hindu'}>Hindu</option>
                                                <option value="muslim">muslim</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <div className='--bg1'>
                                <p className='mt-2'>Other Details</p>
                            </div>
                            <div className='container-fluid'>

                                <div className='mt-4'>
                                    <div className='row'>
                                        <div className='col-6 col-md-3'>
                                            <label for="addhar" class="form-label">Addhar No:*</label>
                                            <input type="text" class="form-control" id="addhar" />
                                        </div>
                                        <div className='col-6 col-md-3'>
                                            <label for="panno" class="form-label">PAN NO:*</label>
                                            <input type="text" class="form-control" id="panno" />
                                        </div>
                                        <div className='col-6 col-md-3'>
                                            <label for="dateofjoining" class="form-label">Date of Joining :*</label>
                                            <input type="date" class="form-control" id="dateofjoining" />
                                        </div>
                                        <div className='col-6 col-md-3'>
                                            <label for="mobileno" class="form-label">Staff Reference Code:*</label>
                                            <input type="text" class="form-control" id="mobileno" />
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <div className='row'>
                                        <div className='col-6 col-md-3'>
                                            <label>Salary Pay Type:*</label>
                                            <div>
                                                <input type='radio' name='salary' id='consolidate' />
                                                <label class="form-check-label" for="consolidate">Consolidate</label>
                                                <input type='radio' name='salary' id='pay' className='ml-2' />
                                                <label class="form-check-label" for="pay">PAY</label>
                                                <input type='radio' name='salary' id='other' className='ml-2' />
                                                <label class="form-check-label" for="other">Other</label>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-3'>
                                            <label for="email" class="form-label">Government Id/Resident No:*</label>
                                            <input type="email" class="form-control" id="email" />
                                        </div>
                                        <div className='col-6 col-md-3'>
                                            <label>Citizenship:*</label>
                                            <select class="form-select form-control w-100">
                                                <option selected value={'indian'}>Indian</option>
                                                <option value="american">American</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-4 mb-4'>
                                    <div className='row'>
                                        <div className='col-6 col-md-3'>
                                            <button className='btn btn-sm --btn-warning'>Save & Continue</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default StaffForm
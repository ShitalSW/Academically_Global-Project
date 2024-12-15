import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [discription, setDiscription] = useState('');
    const [instructor, setInstructor] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate(); // Make sure navigate is used here

    const AddCourse = async () => {
        // Validate input
        if (!title || !duration || !discription || !instructor) {
            setError(true);
            return;
        }

        // Collect course data
        const userId = JSON.parse(localStorage.getItem('user'))._id;

        try {
            // Make API request to add the course
            const response = await fetch("http://localhost:5000/add-course", {
                method: 'POST',
                body: JSON.stringify({ title, duration, discription, instructor, userId }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const result = await response.json();

            // Debugging: Log the response to verify the result
            console.log(result);

            // Check if the response indicates success
            if (result.success) {
                // Course added successfully, navigate to Home page
                console.log("Course added successfully");
                navigate("/Home");
            } else {
                console.log("Failed to add course", result.message);
            }
        } catch (error) {
            console.error("Error adding course:", error);
        }
    };

    return (
        <div className='course'>
            <center>
                <h1>Add Course</h1>
                <input
                    className='input-box'
                    onChange={(e) => setTitle(e.target.value)}
                    type='text'
                    value={title}
                    placeholder='Enter Course Title'
                />
                {error && !title && <span className='error-msg'>Enter Valid Title</span>}

                <input
                    className='input-box'
                    onChange={(e) => setDuration(e.target.value)}
                    type='text'
                    value={duration}
                    placeholder='Enter Duration'
                />
                {error && !duration && <span className='error-msg'>Enter Valid Duration</span>}

                <input
                    className='input-box'
                    onChange={(e) => setDiscription(e.target.value)}
                    type='text'
                    value={discription}
                    placeholder='Description about Course'
                />
                {error && !discription && <span className='error-msg'>Enter Valid Description</span>}

                <input
                    className='input-box'
                    onChange={(e) => setInstructor(e.target.value)}
                    type='text'
                    value={instructor}
                    placeholder='Enter Instructor Name'
                />
                {error && !instructor && <span className='error-msg'>Enter Valid Name</span>}

                <button className='btn' onClick={AddCourse} type='button'>Add Course</button>
            </center>
        </div>
    );
};

export default AddCourse;

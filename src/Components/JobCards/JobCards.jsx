import React from 'react'
import styled from 'styled-components'

export const JobCards = () => {
    return (
        <JobCardStyled>
            <div className='card'>
                <div className="wrapper">
                    <img src="https://via.placeholder.com/150C/O https://placeholder.com/" alt="" />
                <div className="job-details">
                    <p>Executive Producer</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatem autem quia ipsum corrupti amet neque quasi tempora quaerat!</p>
                    <button>View Details</button>
                </div>
                </div>
            </div>
        </JobCardStyled>
    )
}

const JobCardStyled = styled.div`
position: absolute;
top: 464px;
margin-left: 145px;

.card{
    position: absolute;
width: 560px;
height: 200px;
left: 143px;
top: 453px;

background: #FFFFFF;
box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.05);
border-radius: 24px;
}
`
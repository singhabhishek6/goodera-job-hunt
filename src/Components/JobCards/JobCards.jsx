import React from 'react'
import styled from 'styled-components'

export const JobCards = ({jobs}) => {
    return (
        <JobCardStyled>
          {
              jobs.map(el=>{
                  return  <>
                    <div className='card'>
                    <div className="wrapper">
                        <img src={el.image} alt="" />
                    <div className="job-details">
                        <p>{el.title}</p>
                        <p>{el.description}</p>
                        <div className="btn">View Details</div>
                    </div>
                    </div>
                </div>
                </>
                  
                
              })
          }
           
        </JobCardStyled>
    )
}

const JobCardStyled = styled.div`
position: absolute;
top: 464px;
width: 85.5%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-left: 145px;

.card{
width: 560px;
margin-bottom: 40px;

height: 200px;
background: #e0caca;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.05);
border-radius: 24px;
background: #E5E5E5;
.wrapper{
width: 90%;
margin: auto;
display: flex;
align-items: flex-start;
height: 150px;

border-radius: 16px;

img{
width: 150px;
height: 150px;
left: 175px;
top: 478px;
margin-right: 20px;

background: #C4C4C4;
border-radius: 16px;
}
.job-details{
height: 150px;
/* overflow-y: hidden; */
    & p:first-of-type{
      

margin: 0;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 36px;
/* identical to box height */


color: #000000;
    }
    & p:last-of-type{
       
left: 346px;
top: 517px;
margin: 0;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;

color: #7B7B7B;
    }
    .btn{
        width: 120px;
height: 40px;

display: flex;
justify-content: center;
align-items: center;
float: right;
margin-top: 10px;
cursor: pointer;
border: 2px solid #F07987;
box-sizing: border-box;
border-radius: 8px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
/* identical to box height */


color: #F07987;

    }
}
}
}
`
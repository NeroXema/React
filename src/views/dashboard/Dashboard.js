import React, { lazy, useEffect, useState } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router';

const Dashboard = () => {
  const history = useHistory();

  const[data,setData]=useState(
    [
      {
          "id": 1,
          "name": "Yuwa Ko Ko",
          "email": "yuwakoko9898@gmail.com",
          "gender": "Male",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N5",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:19.000000Z",
          "updated_at": "2024-05-28T05:33:06.000000Z"
      },
      {
          "id": 3,
          "name": "MIN MIN",
          "email": "dsds",
          "gender": "Other",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N1",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:49.000000Z",
          "updated_at": "2024-03-16T06:23:01.000000Z"
      },
      {
          "id": 4,
          "name": "dssdjhdsd",
          "email": "dsds",
          "gender": "Other",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N1",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:50.000000Z",
          "updated_at": "2024-05-28T05:36:04.000000Z"
      },
      {
          "id": 5,
          "name": "Aye Aye",
          "email": "ayeaye@gmail.com",
          "gender": "Female",
          "date_of_birth": "2023-04-13",
          "english_skill": "Advanced",
          "japanese_skill": "N5",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:51.000000Z",
          "updated_at": "2024-05-28T05:08:12.000000Z"
      },
      {
          "id": 6,
          "name": "dsds",
          "email": "dsds",
          "gender": "Other",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N1",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:52.000000Z",
          "updated_at": "2023-04-22T17:24:20.000000Z"
      },
      {
          "id": 7,
          "name": "dsds",
          "email": "dsds",
          "gender": "Other",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N1",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:52.000000Z",
          "updated_at": "2023-04-22T17:08:37.000000Z"
      },
      {
          "id": 8,
          "name": "dsds",
          "email": "dsds",
          "gender": "Other",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N1",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:53.000000Z",
          "updated_at": "2023-07-16T06:35:49.000000Z"
      },
      {
          "id": 9,
          "name": "dssdkhids",
          "email": "dsdssdsdds",
          "gender": "Other",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N1",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:54.000000Z",
          "updated_at": "2024-03-16T06:23:18.000000Z"
      },
      {
          "id": 10,
          "name": "dsdiuhudsgh",
          "email": "dsds",
          "gender": "Other",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N1",
          "deleted_at": null,
          "created_at": "2023-04-22T23:31:54.000000Z",
          "updated_at": "2024-03-17T05:21:56.000000Z"
      },
      {
          "id": 11,
          "name": "Min MIn",
          "email": "dsds",
          "gender": "Male",
          "date_of_birth": "2023-04-22",
          "english_skill": "Elementary",
          "japanese_skill": "N3",
          "deleted_at": null,
          "created_at": "2023-04-22T23:32:09.000000Z",
          "updated_at": "2023-07-23T06:09:00.000000Z"
      }
  ]
  )
  
  useEffect(() => {
    let flag = localStorage.getItem(`LoginProcess`)
    if(flag != "true"){
      history.push(`/Login`);
    }
  }, );

  const delClick=(name)=>{
    alert('you delete ' + name)
  }
  return (
    <>  
    <p>This is dashboard</p>
    {
      data.length > 0 && (
        <>
        <table className='table table-warning table-striped'>
          <thead>
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Japanese Skill</th>
              <th>English Skill</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {data.map((mappedData,index)=>{
              return(
                <tr>
                  <td>{index+1}</td>
                  <td>{mappedData.id}</td>
                  <td>{mappedData.name}</td>
                  <td>{mappedData.email}</td>
                  <td>{mappedData.gender}</td>
                  <td>{mappedData.date_of_birth}</td>
                  <td>{mappedData.japanese_skill}</td>
                  <td>{mappedData.english_skill}</td>
                  <td onClick={() => delClick(mappedData.name)}>Delete</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </>
      )
    }
    </>
  )
}

export default Dashboard

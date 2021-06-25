import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components"
import { getCompanyData } from "../actions/companyActions";
import { getEmployeeData } from "../actions/employeeActions";
import CompanyCard from "./CompanyCard";
import EmployeeCard from "./EmployeeCard";


const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const CompanyCardWrapper = styled.div`
    width: 50vw;
`;

const EmployeeContainer = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
export default function CompanyPage(){
    let {id} = useParams();
    console.log("id?:",id);
    
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCompanyData());
        dispatch(getEmployeeData());
    },[])
    let companyData = useSelector(state=>state.companyState)
    console.log(companyData);
    let employeeData = useSelector(state=>state.employeeState);
    return(
        <MainContainer>
            <CompanyCardWrapper>
            {companyData.company.map(e=>{
                if(e.id===id){
                   return   <CompanyCard companyPage={true} key={e.id} name={e.name} address={e.address} revenue={e.revenue} phone={e.phone} />
                }
            })}
             </CompanyCardWrapper>
            <EmployeeContainer>
                {employeeData.employees.map(e=>{
                    if(e.companyID===id){
                    return <EmployeeCard key={e.id+Date.now()} name={e.name} address={e.address} /> 
                    }
                })}
            </EmployeeContainer>
        </MainContainer>
    )
}
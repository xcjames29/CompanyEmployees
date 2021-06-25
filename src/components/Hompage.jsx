import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { createNewCompany, getCompanyData } from "../actions/companyActions";
import CompanyCard from "./CompanyCard";


const MainContainer = styled.div`
    min-height: 100vh;
    width: calc(100vw - 100px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    padding: 50px;
`;

const CompanyContainer = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border: 2px solid gray;
`;

const CompanyHeader = styled.div`
    display: flex;
    padding: 10px 30px;
    border: 2px solid gray;
    background-color: #bebebe;
`;

const Title = styled.h1`
    color: #575555;
`;

const CardContainer = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 40px 30px;
    gap: 20px;
`;


const AddContainer = styled.div`
    width: 20vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 50px;
`;

const AddCompany = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: 2px solid gray;
    padding-bottom: 30px;
`;

const AddHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid grey;
    background-color: #bebebe;
`;

const AddHeaderTitle = styled.h1`
    color: #575555;
`;
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: calc(100% - 60px);
    align-items: flex-start;
    padding: 0px 30px;
`;

const Input = styled.input`
    width: 100%;
    font-size: 20px;
`;

const Label = styled.label`
    font-size: 14px;
`;

const AddButton = styled.button`
    font-size: 20px;
    font-weight: bold;
    padding: 5px 10px;
    align-self: flex-start;
    margin-left: 30px;
`;

const Select = styled.select`
    font-size: 20px;
    padding: 5px 10px;
`;

const Options = styled.option`
`;

const Error = styled.small`
    color: red;
`;

export default function Hompage() {
    let companyData = useSelector(state => state.companyState);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCompanyData());
    },[]);

    let companyNameRef = useRef();
    let companyAddressRef = useRef();
    let companyRevenueRef = useRef();
    let companyPhoneRef = useRef();
    let [companyNameError,setCompanyNameError] = useState("");
    let [companyAddressError,setCompanyAddressError] = useState("");
    let [companyRevenueError,setCompanyRevenueError] = useState("");
    let [companyPhoneError,setCompanyPhoneError] = useState("");
    let validateCompany =()=>{
        let name = companyNameRef.current.value;
        let address = companyAddressRef.current.value;
        let revenue = companyRevenueRef.current.value;
        let phone = companyPhoneRef.current.value;
        let hasError = false;

        if(name.length===0){
            hasError = true;
            setCompanyNameError("Please Enter Company Name!");
        }
        if(address.length ===0){
            hasError = true;
            setCompanyAddressError("Please Enter Company Address!");
        }
        if(revenue.length ===0){
            hasError = true;
            setCompanyRevenueError("Please Enter Company Revenue!");
        }
        if(phone.length ===0){
            hasError = true;
            setCompanyPhoneError("Please Enter Company Phone Number!")
        }
        else if(/a-z/gi.test(phone)){
            hasError = true;
            setCompanyPhoneError("Please Enter a Valid Phone Number!")
        }

        if(!hasError) dispatch(createNewCompany(name,address,revenue,phone));
    }

    let employeeNameRef = useRef();
    let employeeAddressRef = useRef();
    let [companySelected, setCompanySelected] = useState("");
    let [employeeNameError,setEmployeeNameError] = useState("");
    let [employeeAddressError,setEmployeeAddressError] = useState("");
    let validateEmployee = ()=>{
        let name = employeeNameRef.current.value;
        let address = employeeAddressRef.current.value;
        let hasError = false;

        if(name.length===0){
            hasError = true;
            setEmployeeNameError("Please Enter Company Name!");
        }
        if(address.length ===0){
            hasError = true;
            setEmployeeAddressError("Please Enter Company Address!");
        }

        if(!hasError){

        }
    }
    return (
        <MainContainer>
            <CompanyContainer>
                <CompanyHeader>
                    <Title>Company</Title>
                </CompanyHeader>
                <CardContainer>
                    {companyData.company.map(e => <CompanyCard key={e.id} id={e.id} name={e.name} address={e.address} revenue={e.revenue} phone={e.phone} />)}
                </CardContainer>
            </CompanyContainer>

            <AddContainer>
                <AddCompany>
                    <AddHeader>
                        <AddHeaderTitle> Create New Company</AddHeaderTitle>
                    </AddHeader>
                    <InputWrapper>
                        <Label htmlFor="name">Name: </Label>
                        <Input type="text" name="name" ref={companyNameRef} />
                        <Error>{companyNameError}</Error>
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="address">Address: </Label>
                        <Input type="text" name="address" ref={companyAddressRef} />
                        <Error>{companyAddressError}</Error>
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="revenue">Revenue: </Label>
                        <Input type="number" name="revenue" min="0" ref={companyRevenueRef} />
                        <Error>{companyRevenueError}</Error>
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="phone">Phone: </Label>
                        <Input type="text" name="phone" ref={companyPhoneRef} />
                        <Error>{companyPhoneError}</Error>
                    </InputWrapper>
                    <AddButton onClick={()=>validateCompany()}>Create Company</AddButton>
                </AddCompany>

                <AddCompany>
                    <AddHeader>
                        <AddHeaderTitle> Add New Employee</AddHeaderTitle>
                    </AddHeader>
                    <InputWrapper>
                        <Label htmlFor="name">Name: </Label>
                        <Input type="text" name="employeeName" ref={employeeNameRef} />
                        <Error>{employeeNameError}</Error>
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="address">Address: </Label>
                        <Input type="text" name="employeeAddress" ref={employeeAddressRef} />
                        <Error>{employeeAddressError}</Error>
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="company">Company: </Label>
                        <Select name="company" onChange={(e)=>setCompanySelected(e.target.value)}>
                            {companyData.company.map(e => <Options value={e.id}>{e.name}</Options>)}
                        </Select>
                    </InputWrapper>
                    <AddButton disabled={companyData.company.length === 0} onClick={()=>validateEmployee()}>Add Employee</AddButton>
                </AddCompany>
            </AddContainer>
        </MainContainer>
    )
}
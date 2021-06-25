import styled from "styled-components";


const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border: 1px solid gray;
    border-radius: 20px;
    overflow: hidden;
`;

const CardHeader = styled.div`
    width: calc(100% - 60px);
    padding: 10px 30px;
    background-color: #bebebe;
`;

const Title = styled.h1`
    color: #575555;
`;

const DetailsContainer = styled.div`
    padding: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
`;

const Heading3 = styled.h3`
`;


export default function EmployeeCard(props){

    return(
        <CardContainer>
            <CardHeader>
                <Title>{props.name}</Title>
            </CardHeader>
            <DetailsContainer>
                <Heading3>Location: {props.address}</Heading3>
            </DetailsContainer>
        </CardContainer>
    )
}

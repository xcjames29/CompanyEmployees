import styled from "styled-components"


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

const FooterContainer = styled.div`
    padding: 5px 10px;
    width: calc(100% - 20px);
    background-color: #bebebe;
`;

export default function CompanyCard(props) {

    return (
        <CardContainer>
            <CardHeader>
                <Title>{props.name}</Title>
            </CardHeader>
            <DetailsContainer>
                <Heading3>Location: {props.address}</Heading3>
                <Heading3>Revenue: {props.revenue}</Heading3>
                <Heading3>Phone: {props.phone}</Heading3>
            </DetailsContainer>

            {!props.companyPage &&
                <FooterContainer>
                    <a href={"/company/" + props.id}>Click here to go to company details </a>
                </FooterContainer>
            }
        </CardContainer>
    )
}
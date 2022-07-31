import {React, useState} from 'react'
import styled from 'styled-components'
import LogoImg from './../data/logo.svg'
import IllustrationImg from './../data/illustration-dashboard.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 1440px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    ${mobile({width: '375px'})};
`;
const Logo =  styled.img`
    margin: 30px;
`;
const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 80px;
    width: 100%;
`;
const Title = styled.div`
    font-family: 'Libre Franklin', sans-serif;
    font-size: 35px;
    display: flex;
    ${mobile({width: '60%'})};
    ${mobile({fontSize: '20px'})};
`;
const SubTitle = styled.p`
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 500;
    color: hsl(0, 0%, 59%);
    margin-bottom: 40px;
`;
const ContainerInput = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({flexDirection: 'column'})};
    width: 45%;
`;
const Input = styled.input`
    padding: 13px;
    border-radius: 25px;
    border: 2px solid hsl(0, 0%, 59%);
    margin-right: 20px;
    flex: 4;
    ${mobile({width: '250px'})};
    ${mobile({marginBottom: '15px'})};
    ${mobile({marginRight: '0px'})};


    &:focus{
        border: 2px solid hsl(223, 87%, 63%);
        out-line: none;
    }
`;
const Button = styled.button`
    padding: 15px 45px;
    background-color: hsl(223, 87%, 63%);
    border: none;
    border-radius: 25px;
    color: white;
    box-shadow: 4px 4px 8px rgba(0,0,0, 0.2);
    flex: 1;
    ${mobile({width: '280px'})};
    
`;
const Illustration = styled.img`
    margin: auto;
    width: 45%;
    ${mobile({width: '75%'})};
`;
const ContainerMedia = styled.div`
    margin-top: 40px;
    color:hsl(223, 87%, 63%);
    font-size: 30px;
    ${mobile({fontSize: '20px'})};
`;
const Copyright = styled.p`
    color:hsl(0, 0%, 59%);
`;
const TitleColor = styled.div`
    color: hsl(0, 0%, 59%);
    margin-right: 10px;
`;
const Message = styled.p`
    color: red;

`;

const Home = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8}]?)/g

        if(email === ''){
            setMessage('"Whoops! It looks like you forgot to add your email"');
        }else if(!regEx.test(email)){
            setMessage('"Please provide a valid email address"');
        }else{
            setMessage('')
        }
    }

    const handleOnChange = (e) => {
        setEmail(e.target.value);
    }

  return (
    <Container>
        <ContainerForm>
            <Logo src={LogoImg} />

            <Title><TitleColor>We are launching</TitleColor> <b>soon!</b></Title>
            <SubTitle>Subscribe and get notified</SubTitle>
            <ContainerInput>
                <Input placeholder='Your email address' value={email} onChange={handleOnChange} />
                <Button onClick={emailValidation} >Notify Me</Button>
               
            </ContainerInput>
            <Message>{message}</Message> 
        </ContainerForm>
        <Illustration src={IllustrationImg} />
        <ContainerMedia>
            <FaFacebook style={{margin: '10px'}} />
            <FaTwitter style={{margin: '10px'}}  />
            <FaInstagram style={{margin: '10px'}}  />
        </ContainerMedia>
        <Copyright>&copy; Copyright Ping. All rights reserved.</Copyright>
    </Container>
  )
}

export default Home
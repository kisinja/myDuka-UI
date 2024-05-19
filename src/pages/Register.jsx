import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from '../responsive';
import NavBar from '../components/NavBar';
import Announcements from '../components/Announcements';

const Container = styled.div`
    width: 100vw; /* For FullScreen Components */
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({ backgroundPosition: "100%" })}
`

const Wrapper = styled.div`
    width: 40%;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    ${mobile({ width: "80%" })}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    ${mobile({ width: "100%" })}
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 10px 0;
    text-align: center;
`

const Button = styled.button`
    padding: 8px 20px;
    border: none;
    background-color: teal;
    color: white;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
    margin-bottom: 10px;
    transition: all 0.3s ease;

    &:hover {
        background-color: darkcyan;
    }
`

const Already = styled.a`
    text-align:center;
    font-size:12px;
    cursor:pointer;

    &:hover{
        text-decoration:underline;
        color:purple;
    }
`

const Register = () => {
    return (
        <>
            <Announcements />
            <NavBar />
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <Input className="focus:ring " placeholder="name" />
                        <Input className="focus:ring" placeholder="last name" />
                        <Input className="focus:ring" placeholder="username" />
                        <Input className="focus:ring" placeholder="email" />
                        <Input className="focus:ring" placeholder="password" />
                        <Input className="focus:ring" placeholder="confirm password" />
                        <Agreement>
                            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button>CREATE</Button>
                        <Already>
                            <Link to="/login">
                                Already Have an Account? Sign In
                            </Link>
                        </Already>
                    </Form>

                </Wrapper>
            </Container>
        </>
    )
}

export default Register

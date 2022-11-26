import styled from 'styled-components'
import { blue, lightGray, lightGreen, yellow } from '../UI/colorVar'


export const Page = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 150px;
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    color: white;
    font-size: 56px;
    letter-spacing: 1px;
    word-spacing: 5px;
`

export const SubTitle = styled.h2`
    color: ${yellow};
    font-size: 16px;
    margin-bottom: 10px;
    word-spacing: 2px;
`

export const DivCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    gap: 40px;
    margin: 40px 0;
`

export const ParagraphLoad = styled.p`
    color: ${lightGreen};
    font-size: 18px;
    cursor: pointer;
    height: 40px; 
    width: 110px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        background-color: ${lightGray};
        color: ${blue};

    }
`

export const ParagraphPages = styled.p`
    color: ${yellow};
    font-size: 18px;
`

export const DivPages = styled.div`
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
`
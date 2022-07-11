import styled from "styled-components";

export const StyledFooter = styled.footer`
    background: ${({theme}) => theme.colors.footer};
    color: #fff;
    padding: 100px 0 60px;

    ul{
        list-style-type: none;
    }
    ul li{
        margin-bottom: 20px;
        font-size: 14px;
    }
    p{
        text-align: right;
        font-size: 14px;
    }
    @media(max-width: ${({theme}) => theme.mobile}){
    text-align: center;
    img{
        width: 30%;
    }

    ul{
        padding: 0;
    }
    p{
        text-align: center;
    }
   }
`
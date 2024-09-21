import styled from "styled-components";

export const Box = styled.div`
    padding: 5% 2.5%;
    background: black;
    position:backdrop;
    bottom: 0;
    width: 100%;
    text-align: center;
    @media (max-width: 1000px) {
         padding: 70px 30px;
    }
         @media (max-width: 480px) {
         padding: 70px 30px;
         width: 145%;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 60px;
`;

export const Row = styled.div`
    display: grid;
    text-align: center;
    padding-left:50%;
    grid-template-columns: repeat(
        auto-fill,
        minmax(15px, 1fr)
        
    );
    grid-gap: 20px;


    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }

     @media (max-width: 480px) {
        text-align: center;
        grid-template-columns: repeat(
            auto-fill,
           
            minmax(20px,30px)

        );
        grid-gap: 3px;
    }
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: gold;
        transition: 200ms ease-in;

    }
`;

export const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
    padding-left:10%;


    @media (max-width: 480px) {
        text-align: center;
        padding-left:20%;
        grid-template-columns: repeat(
            auto-fill,
           
            minmax(20px,30px)

        );
        grid-gap: 3px;
    }

`;
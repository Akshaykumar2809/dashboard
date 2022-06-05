import React from 'react';
import styled from "styled-components";
import { IoStatsChart } from 'react-icons/io5';
import { themeColor, hoverEffect } from "../utils";
function Earnings() {
    return (
        <EarningsCard>
            <CardContent>
                <Chart>
                    <IoStatsChart />
                </Chart>
                <EarningsText>Earnings</EarningsText>
                <Earning>Rs.546584</Earning>
                <EarningsIncrease>+ 15 % since last 2 months</EarningsIncrease>
            </CardContent>
        </EarningsCard>
    );
}

const EarningsCard = styled.div`
height: 110%;
width: 14rem;
background-color: ${themeColor};
padding: 1rem;
border-radius: 1rem;
color: white;
transition: 0.3s ease-in-out;
&:hover {
    box-shadow: ${hoverEffect};
}
@media screen and (min-width: 320px) and (max-width: 1080px) {
    width:80%;
}`;

const CardContent = styled.div`
margin: 1rem;
`;

const Chart = styled.div`
display: flex;
justify-content: center;
svg {
    height: 4rem;
    width: 4rem;
}`;

const EarningsText = styled.h3`
text-align: center;
font-weight: normal;
padding: 0.4rem 0;
`;

const Earning = styled.h2`
text-align: center;
`;

const EarningsIncrease = styled.h5`
text-align: center;
font-weight: normal;
background-color: rgba(0, 0, 0, 0.3);
padding: 0.6rem;
border-radius: 3rem;
`;

export default Earnings;
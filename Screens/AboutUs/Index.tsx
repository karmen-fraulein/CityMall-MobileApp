import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import AboutUs from './AboutUs';
import Loyalty from './Loyalty';


type RouteParamList = {
    params: {
        id: number,
        routeId: number
    }
}

const AboutUsIndex = () => {
    const routeParams = useRoute<RouteProp<RouteParamList, 'params'>>();

    return (
        routeParams.params.routeId === 1 ?
            <AboutUs />
            :
            <Loyalty />

    );
}

export default AboutUsIndex;

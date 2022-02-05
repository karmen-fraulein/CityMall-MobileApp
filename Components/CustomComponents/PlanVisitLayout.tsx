import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../Colors/Colors';
import data from '../../Constants/PlanVisitData';



export interface IAppBtnProps {
    title: string;
    icon: ImageSourcePropType;
    Content: any
  }


const PlanVisitLayout:React.FC<IAppBtnProps> = props => {
  const {title, icon, Content} = props;
  const [collapse, setCollapse] = useState<boolean>(false);



  return (
    <>
    <TouchableOpacity onPress={() =>setCollapse(!collapse)} style={styles.main}>
    <Text style={styles.name}>{title}</Text>
               <Image source={icon} style={collapse ?
                     {
                        transform: [{rotate: '90deg'}],
                      }
                    : null
                } />
    </TouchableOpacity>
    {collapse ?
        
     <Content />
        
        :null
    }

   

      
    </>
  );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
    },
    name: {
        color: Colors.white,
        fontSize: 16,
        fontFamily: 'HM pangram',
        textTransform: 'uppercase',
        fontWeight: '700',
    }

});
export default PlanVisitLayout;

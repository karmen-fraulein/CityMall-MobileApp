import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import {IServiceCategories, IServiceSubCategories} from '../../Screens/Stores/Stores';
import {useState} from 'react';
import {Colors} from '../../Colors/Colors';
import { AppContext } from '../../AppContext/AppContext';

interface ICatButton {
    data?: IServiceCategories | IServiceSubCategories,
    isCatregory?: boolean
}

const CategoryFilterButton: React.FC<ICatButton> = (props) => {
    const {state, setGlobalState} = useContext(AppContext);
    const { isDarkTheme , subCategoryArray } = state;
    const [isChosen, setIsChosen] = useState<boolean>(false);

    const handleChoseCategory = (catId: number) => {
        setIsChosen(!isChosen)
      };
    useEffect(() => {
      if(props.isCatregory){
        
        if(!isChosen ) {
            let tempArray = subCategoryArray;
            tempArray.filter((el: number) =>{ 
              console.log(el, '<============, tempArray');
              return el !== props.data?.id
            });
            console.log('tempArray====>',tempArray, props.data?.id)
            setGlobalState({subCategoryArray:[...tempArray]});
        } else {
            let tempArray = subCategoryArray;
            
            tempArray.push(props.data?.id);
            console.log('tempArray push',tempArray, '*****', props.data?.id)
            setGlobalState({subCategoryArray: tempArray});
        }}

    }, [isChosen])  




      const textStyle = {
        color: isDarkTheme ? Colors.white : Colors.black,
      };
    
      const textStyleActive = {
        color: isDarkTheme ? Colors.bgColor : Colors.white,
      }
    
      const buttonBgColor = {
         backgroundColor: isDarkTheme?  Colors.black : Colors.white
      };
    
      const buttonBgColorActive = {
        backgroundColor: isDarkTheme?  Colors.white : Colors.black 
     }
    
  
       
      const borderStyle = {
        borderColor: isDarkTheme ? Colors.white : Colors.black,
      };
    

    
    return (
        <TouchableOpacity
            style={[styles.catItem, borderStyle, isChosen ? buttonBgColorActive : buttonBgColor]}
            onPress={() => handleChoseCategory(props.data?.id!)}>
            <Text
                style={[styles.catItemTitle, isChosen ? textStyleActive : textStyle]}>
                {props.data?.name}
            </Text>
        </TouchableOpacity>
    );
};

export default CategoryFilterButton;

const styles = StyleSheet.create({
    catTitle: {
        fontFamily: 'HMpangram-Bold',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '700',
      },
      catItem: {
        borderWidth: 1,
        borderRadius: 25,
        marginRight: 17,
        paddingVertical: 8,
        paddingHorizontal: 11,
      },
      catItemTitle: {
        fontFamily: 'HMpangram-Bold',
        fontSize: 14,
        lineHeight: 17,
      },
});

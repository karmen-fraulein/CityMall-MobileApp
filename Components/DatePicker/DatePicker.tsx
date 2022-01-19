import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Colors } from '../../Colors/Colors';
import DateSelect from './DateSelect';

const DatePicker = (props: any) => {

    const days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    const years = [
        '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998',
        '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990', '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980', '1979', '1978', '1977', '1976', '1975', '1974', '1973',
        '1972', '1971', '1970', '1969', '1968', '1967', '1966', '1965', '1964', '1963', '1962', '1961', '1960', '1959', '1958', '1957', '1956', '1955', '1954', '1953', '1952', '1951', '1950', '1949', '1948',
        '1947', '1946', '1945', '1944', '1943', '1942', '1941', '1940', '1939', '1938', '1937', '1936', '1935', '1934', '1933', '1932', '1931', '1930', '1929', '1928', '1927', '1926', '1925', '1924', '1923',
        '1922', '1921', '1920', '1919', '1918', '1917', '1916', '1915', '1914', '1913', '1912', '1911', '1910', '1909', '1908', '1907', '1906', '1905', '1904', '1903', '1902', '1901', '1900'
    ];

    const [day, setDay] = useState<string>('');
    const [month, setMonth] = useState<string>('');
    const [year, setYear] = useState<string>('');

    useEffect(() => {
        if (day && month && year) {
            props.callBack(`${year}-${month}-${day}`)
        };
    }, [day, month, year])

    const handleGetDay = (value: string) => {
        setDay(value);
    };

    const handleGetMonth = (value:string) => {
        setMonth(value);
    };

    const handleGetYear = (value:string) => {
        setYear(value);
    };

    return (
        <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1, borderBottomColor: Colors.white }}>
                <DateSelect placeholder = 'დღე'  onSelect = {handleGetDay} pickType='day' data={days} callBack={handleGetDay} />
                <DateSelect placeholder = 'თვე'  onSelect = {handleGetMonth} pickType='month' data={months} callBack={handleGetMonth}/>
                <DateSelect placeholder = 'წელი' onSelect = {handleGetYear} pickType='year'  data={years} callBack={handleGetYear} />
        </View>
    );
};

export default DatePicker;
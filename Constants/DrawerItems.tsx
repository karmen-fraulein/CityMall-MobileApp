export interface ICategories {
    id?: Number,
    name?: String
}

export interface ILocation {
    name?: String,
    routeName?: String
}

export interface IDrawerItem {
    id?: Number,
    name?: String,
    location?: ILocation[],
    categories?: ICategories[] | [],


}

export default [
    {
        name: 'მთავარი',
        icon: require('../assets/images/arrow-sm.png'),
        location: [
            {
                name: 'სითმოლი საბურთალო',
                routeName: 'HomeScreen'
            },
            {
                name: 'სითმოლი გლდანი',
                routeName: 'HomeScreen'
            }
        ],
        categories: [],
        id: 1,
    },
    {
        name: 'შეთავაზებები',
        icon: require('../assets/images/arrow-sm.png'),
        location: [
            {
                name: 'სითმოლი საბურთალო',
                routeName: 'OffersScreen'

            },
            {
                name: 'სითმოლი გლდანი',
                routeName: 'OffersScreen'
            },

        ],
        categories: [
            {
                id: 1,
                name: 'ფასდაკლებები'
            },
            {
                id: 2,
                name: 'სიახლეები'
            },
            {
                id: 3,
                name: 'ღონისძიებები'
            }
        ],
        id: 2,
    },
    {
        name: 'მაღაზიები',
        icon: require('../assets/images/arrow-sm.png'),
        location: [
            {
                name: 'სითმოლი საბურთალო'
            },
            {
                name: 'სითმოლი გლდანი'
            }
        ],
        categories: [
            {
                id: 1,
                name: 'მაღაზიები'
            },
            {
                id: 2,
                name: 'პრემიუმ სივრცე'
            },
        ],
        id:3
    },
    {
        name: 'გართობა',
        icon: require('../assets/images/arrow-sm.png'),
        location: [
            {
                name: 'სითმოლი საბურთალო'
            },
            {
                name: 'სითმოლი გლდანი'
            }
        ],
        categories: [],
        id:4
    },
    {
        name: 'კვება',
        icon: require('../assets/images/arrow-sm.png'),
        location: [
            {
                name: 'სითმოლი საბურთალო'
            },
            {
                name: 'სითმოლი გლდანი'
            }
        ],
        categories: [],
        id:5
    },
    // {
    //     name: 'სერვისი',
    //      icon: require('../assets/images/arrow-sm.png'),
    //     location: [

    //         {
    //             name: 'სითმოლი საბურთალო'
    //         },
    //         {
    //             name: 'სითმოლი გლდანი'
    //         }
    //     ],
    //      id:6,
    // },
    // {
    //     name: 'სასაჩუქრე ბარათები',
    //      icon: require('../assets/images/arrow-sm.png'),
    //     location: [
    //         {
    //             name: 'სასაჩუქრე ბარათის შეკვეთა',
    //             routeName: 'OrderGiftCardScreen'
    //         },
    //         {
    //             name: 'ნაშთის შემოწმება'
    //         }
    //     ],
    //     id:7,
    // },
    // {
    //     name: 'მოლის გზამკვლევი',
    //      icon: require('../assets/images/arrow-sm.png'),
    //     location: [
    //         {
    //             name: 'სითმოლი საბურთალო'
    //         },
    //         {
    //             name: 'სითმოლი გლდანი'
    //         }
    //     ],
    //     id:8,
    // },
    {
        name: 'ჩვენს შესახებ',
        icon: require('../assets/images/arrow-sm.png'),
        location: [
            {
                name: 'ჩვენს შესახებ'
            },
            {
                name: 'ლოიალობის შესახებ'
            }
        ],
        categories: [],
        id:9,
    },
    {
        name: '_blank',
    },
    {
        name: 'პირადი კაბინეტი',
        icon: require('../assets/images/arrow-sm.png'),
        location: [
            {
                name: 'პარამეტრები'
            },
            {
                name: 'პირადი კაბინეტი',
                routeName: 'ProfileScreen'
            }
        ],
        categories: [],
        id:10,
    },
    // {
    //     name: 'ფიზიკური ბარათის შეკვეთა',
    //      icon: require('../assets/images/arrow-sm.png'),
    //     location: [
    //         {
    //             location: 'სითმოლი საბურთალო'
    //         },
    //         {
    //             location: 'სითმოლი გლდანი'
    //         }
    //     ],
    //     id:11,
    // },
]
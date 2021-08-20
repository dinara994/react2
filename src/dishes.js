import React from "react";

const dishes = [
    {
        img: 'https://steakschool.com/wp-content/uploads/2018/09/Stanbroke-Ecco-4.jpg',
        id: 1,
        title: 'Meat Stake',
        price: '16$',
        desc: ' Это особым образом приготовленный толстый кусок мяса, вырезанный из туши животного (как правило, бычка)',
        rating: 1
    },
    {
        img: 'https://d3ur40406gizl1.cloudfront.net/web_site/images/v2/plates/4.png',
        id:2,
        title: 'Meat Stake',
        price: '16$',
        desc: ' Это особым образом приготовленный толстый кусок мяса, вырезанный из туши животного (как правило, бычка)',
        rating: 4
    },
    {
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/05/Roast-beef-sirloin-bearnaise-dauphinoise-2-260f0d6.jpg?quality=90&resize=900,836',
        id: 3,
        title: 'Meat Stake',
        price: '16$',
        desc: ' Это особым образом приготовленный толстый кусок мяса, вырезанный из туши животного (как правило, бычка)',
        rating: 3
    },
    {
        img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80',
        id: 4,
        title: 'Meat Stake',
        price: '16$',
        desc: ' Это особым образом приготовленный толстый кусок мяса, вырезанный из туши животного (как правило, бычка)',
        rating: 4
    },
    {
        img:'https://images.unsplash.com/photo-1547496502-affa22d38842?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1184&q=80',
        id: 5,
        title: 'Meat Stake',
        price: '16$',
        desc: ' Это особым образом приготовленный толстый кусок мяса, вырезанный из туши животного (как правило, бычка)',
        rating: 2
    },
    {
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        id: 6,
        title: 'Meat Stake',
        price: '16$',
        desc: ' Это особым образом приготовленный толстый кусок мяса, вырезанный из туши животного (как правило, бычка)',
        rating: 4
    },
    {
        img: 'https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        id: 7,
        title: 'Meat Stake',
        price: '16$',
        desc: ' Это особым образом приготовленный толстый кусок мяса, вырезанный из туши животного (как правило, бычка)',
        rating: 3
    },
    {
        img:'https://images.unsplash.com/photo-1561758033-f8ff74d6494a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        id: 8,
        title: 'Meat Stake',
        price: '16$',
        desc: ' Это особым образом приготовленный толстый кусок мяса, вырезанный из туши животного (как правило, бычка)',
        rating: 3
    },
    {
        img: 'https://images.unsplash.com/photo-1578937014181-a029ba8f3a80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        id: 9,
        title: 'Meat Stake',
        price: '16$',
        desc: ' Это особым образом приготовленный толстый кусок мяса, вырезанный из туши животного (как правило, бычка)',
        rating: 5
    },
    {
        img: 'https://images.unsplash.com/photo-1619015483078-6abcf9238311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
        id: 10,
        title: 'Meat Stake',
        price: '16$',
        desc: ' Это особым образом приготовленный толстый кусок мяса, вырезанный из туши животного (как правило, бычка)',
        rating: 4
    },
    {
        img: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3VzaGl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        id: 11,
        title: 'Meat Stake',
        price: '16$',
        desc: ' Это особым образом приготовленный толстый кусок мяса, вырезанный из туши животного (как правило, бычка)',
        rating: 3
    },
    {
        img: 'https://images.unsplash.com/photo-1615750824451-cdf6c3b7e06a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1826&q=80',
        id: 12,
        title: 'Meat Stake',
        price: '16$',
        desc: ' Это особым образом приготовленный толстый кусок мяса, вырезанный из туши животного (как правило, бычка)',
        rating: 4
    }
]
export default dishes
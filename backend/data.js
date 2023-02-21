import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name:'Mukesh Kumar',
            email:'mmuskan.940@gmail.com',
            password: bcrypt.hashSync('12345'),
            isAdmin:true
        },
        {
            name:'Suresh Patel',
            email:'suresh.patel@cnpl.co',
            password: bcrypt.hashSync('123456'),
            isAdmin:false
        }
    ],
    slides: [
     {slideImg: '/images/slider/Banner_1.jpg',
     // _id:1
    },
     {slideImg:'/images/slider/Banner_2.jpg',
     // _id:2
    }, 
    {slideImg:'/images/slider/Banner_3.jpg', 
    //_id:3
}, 
    {slideImg: '/images/slider/Banner_4.jpg',
    // _id:4
}, 
    {slideImg:'/images/slider/Banner_5.jpg',
    // _id:5
}, 
     ],
    categories:[
        {
            categoryName: 'Power Banks',
           // _id : '01',
            categoryImg: '/images/A01.png'
            },
        {
        categoryName: 'Bluetooth Speakers',
       // _id : '02',
        categoryImg: '/images/tur.png'
        }
        
    ],

    products: [
        {
            category : 'Power Banks',
          //  _id: '1',
            productOrder: '1',
            name: 'Teknobyte Power Bank A01', 
            slug: 'teknobyte-power-bank-A01',
            image: '/images/A01_black.png',
            imageBig: '/images/bigProduct/powerBankBlackBig.jpg',
            pColor : 'black',
            color: [
                {colorName: 'black',
                colorImg :  'http://www.teknobyte.com/images/powerBank/powerBankBlackSmall.jpg', 
                gallery :  '/images/bigProduct/powerBankBlackBig.jpg', 
                },
                {colorName: 'white',
                colorImg :  'http://www.teknobyte.com/images/powerBank/powerBankWhiteSmall.jpg', 
                gallery :  '/images/bigProduct/powerBankWhiteBig.jpg', 
                }
            ], 
            price: 1999,
            offerPrice: 999,
            Specification: {
                Capacity: '10000mAh',
                BatteCapacityry : 'Li-Polymer',
                'USB output port': '2',
                Material:'ABS & PC',
                Dimension:'153.3mm X 75.6mm X 16.4mm',
                'Net weight':'216.8 gm',
                'Packing Contain':'1 Portable Charger Unit, 1 Charging Cable'
            }
        },
        {
            category : 'Power Banks',
           // _id: '2',
            productOrder: '3',
            name: 'Teknobyte Power Bank A02', 
            slug: 'teknobyte-power-bank-A02',
            image: '/images/A02.png',
            imageBig: '/images/A02.png',
            price: 1999,
            offerPrice: 999, 
            Specification: {
                Capacity: '10000mAh',
                Battery : 'Li-Polymer',
                'USB output port': '2',
                Material:'ABS & PC',
                Dimension:'153.3mm X 75.6mm X 16.4mm',
                'net weight':'216.8 gm',
                'Packing contain':'1 Portable Charger Unit, 1 Charging Cable'
             }
        },
        {
            category : 'Power Banks',
          //  _id: '3',
            productOrder: '4',
            name: 'Teknobyte Power Bank A03',
            slug: 'teknobyte-power-bank-A03', 
            image: '/images/A03.png',
            imageBig: '/images/A03.png', 
            price: 1499,
            offerPrice: 699, 
            Specification: {
                Capacity: '5000mAh',
                Battery : 'Li-Polymer',
                'USB output port': '3',
                Material:'ABS & PC',
                Dimension:'93.30mm*68.5mm*23mm',
                'Net weight':'114 gm',
                'Packing Contain':'1 Portable Charger Unit, 1 Charging Cable'
            }
        },
        {
            category : 'Bluetooth Speakers',
          // _id: '4',
            productOrder: '0',
            name: 'Bluetooth Speaker TUR',  
            slug: 'bluetooth-speaker-TUR',
            image: '/images/tur.png',
            imageBig: 'http://www.teknobyte.com/images/speaker/turoBlueBig.png',
            pColor : 'blue',
            color:[
                {colorName: 'blue',
                colorImg :  '/images/TUR_blue.png',
                gallery: 'http://www.teknobyte.com/images/speaker/turoBlueBig.png'
                },
                {colorName: 'black',
                colorImg :  '/images/TUR_black.png',
                gallery: 'http://www.teknobyte.com/images/speaker/turoBlackBig.png'
                },
                {colorName: 'green',
                colorImg :  '/images/TUR_green.png',
                gallery : 'http://www.teknobyte.com/images/speaker/turoGreenBig.png'
                }
            ],
            price: 2999,
            offerPrice: 1499, 
            Specification: {
                'Bluetooth Version': 'v4.2',
                Output : '3W',
                Size: '117*38*78mm',
                Weight:'200g',
               // color:'Blue Green, & Black',
                'Net Weight':'216.8 gm',
                'Packing contain':'1 Portable Charger Unit, 1 Charging Cable'
            }
        },
        {
            category : 'Bluetooth Speakers',
          //  _id: '5',
            productOrder: '2',
            name: 'Bluetooth Speaker B01.3', 
            slug: 'bluetooth-speaker-B01.3',
            image: '/images/B01-3.png',
            imageBig: 'http://www.teknobyte.com/images/speaker/bo1BlueBig.jpg',
            pColor : 'blue',
            color:[
                    {colorName: 'blue',
                    colorImg :  'http://www.teknobyte.com/images/speaker/bo1BlueSmall.jpg',
                    gallery: 'http://www.teknobyte.com/images/speaker/bo1BlueBig.jpg',
                    },
                    {colorName: 'grey',
                    colorImg :  'http://www.teknobyte.com/images/speaker/bo1SilverSmall.jpg',
                    gallery : 'http://www.teknobyte.com/images/speaker/bo1SilverBig.jpg'
                    }
                  ],
            price: 1999,
            offerPrice: 999, 
            Specification: {
                'Bluetooth Version': 'v4.2',
                Output : '3W',
                Size: '117*38*78mm',
                Weight:'200g',
               // color:'Blue & Silver',
                'Net weight':'216.8 gm',
                'Packing contain':'1 Portable Charger Unit, 1 Charging Cable'
            }
        }
    ]
}
export default data;
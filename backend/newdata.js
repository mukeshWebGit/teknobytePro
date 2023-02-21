const data = {
    slides: ['/images/slider/Banner_1.jpg', '/images/slider/Banner_2.jpg', '/images/slider/Banner_3.jpg', '/images/slider/Banner_4.jpg', '/images/slider/Banner_5.jpg', '/images/slider/Banner_6.jpg', '/images/slider/Banner_7.jpg', '/images/slider/Banner_8.jpg'  ],
    categories: [
        {
            categoryName: 'Latest Product',
            categoryImg: '',
            Products : [
                {
                    _id: '5',
                    name: 'Bluetooth Speaker TUR', 
                    category: 'Bluetooth Speaker',
                    image: '/images/tur.png',
                    price: 2999,
                    offerPrice: 1499,
                    countInStock: 20, 
                    Specification: {
                        Bluetooth_Version: 'v4.2',
                        Output : '3W',
                        Size: '117*38*78mm',
                        Weight:'200g',
                        color:'Blue Green, & Black',
                        netWeight:'216.8 gm',
                        packingContain:'1 Portable Charger Unit, 1 Charging Cable'
                    }
                },
                
            
            {
                _id: '1',
                name: 'Teknobyte Power Bank Black A01',
                category: 'Power Bank',
                image: '/images/A01_black.png',
                price: 1999,
                offerPrice: 999,
                countInStock: 5, 
                Specification: {
                    Capacity: '10000mAh',
                    Battery : 'Li-Polymer',
                    USBoutputport: '2',
                    Material:'ABS & PC',
                    Dimention:'153.3mm X 75.6mm X 16.4mm',
                    netWeight:'216.8 gm',
                    packingContain:'1 Portable Charger Unit, 1 Charging Cable'
                }
            },
            {
                _id: '2',
                name: 'Bluetooth Speaker B01.3',
                category: 'Bluetooth Speaker',
                image: '/images/B01-3.png',
                price: 1999,
                offerPrice: 999,
                countInStock: 15, 
                Specification: {
                    Bluetooth_Version: 'v4.2',
                    Output : '3W',
                    Size: '117*38*78mm',
                    Weight:'200g',
                    color:'Blue & Silver',
                    netWeight:'216.8 gm',
                    packingContain:'1 Portable Charger Unit, 1 Charging Cable'
                }
            },
            {
                _id: '6',
                name: 'Teknobyte Power Bank White A01',
                category: 'Power Bank',
                image: '/images/A01.png',
                price: 2799,
                offerPrice: 999,
                countInStock: 10, 
                Specification: {
                    Capacity: '10000mAh',
                    Battery : 'Li-Polymer',
                    USBoutputport: '2',
                    Material:'ABS & PC',
                    Dimention:'153.3mm X 75.6mm X 16.4mm',
                    netWeight:'216.8 gm',
                    packingContain:'1 Portable Charger Unit, 1 Charging Cable'
                }
            },
            {
                _id: '4',
                name: 'Teknobyte Power Bank A03',
                category: 'Power Bank',
                image: '/images/A03.png',
                price: 1499,
                offerPrice: 699,
                countInStock: 8, 
                Specification: {
                    Capacity: '5000mAh',
                    Battery : 'Li-Polymer',
                    USBoutputport: '3',
                    Material:'ABS & PC',
                    Dimention:'93.30mm*68.5mm*23mm',
                    netWeight:'114 gm',
                    packingContain:'1 Portable Charger Unit, 1 Charging Cable'
                }
            },
            {
                _id: '3',
                name: 'Teknobyte Power Bank A02',
                category: 'Power Bank',
                image: '/images/A02.png',
                price: 1999,
                offerPrice: 999,
                countInStock: 4, 
                Specification: {
                    Capacity: '10000mAh',
                    Battery : 'Li-Polymer',
                    USBoutputport: '2',
                    Material:'ABS & PC',
                    Dimention:'153.3mm X 75.6mm X 16.4mm',
                    netWeight:'216.8 gm',
                    packingContain:'1 Portable Charger Unit, 1 Charging Cable'
                }
            }
            ]
        },
        {
            categoryName: 'Power Bank',
            categoryImg: '/images/A01_black.png',
            Products: [
                {
                    _id: '7',
                    name: 'Teknobyte Power Bank Black A01', 
                    image: '/images/A01_black.png',
                    price: 1999,
                    offerPrice: 999,
                    countInStock: 5, 
                    Specification: {
                        Capacity: '10000mAh',
                        Battery : 'Li-Polymer',
                        USBoutputport: '2',
                        Material:'ABS & PC',
                        Dimention:'153.3mm X 75.6mm X 16.4mm',
                        netWeight:'216.8 gm',
                        packingContain:'1 Portable Charger Unit, 1 Charging Cable'
                    }
                },
                {
                    _id: '8',
                    name: 'Teknobyte Power Bank White A01', 
                    image: '/images/A01.png',
                    price: 2799,
                    offerPrice: 999,
                    countInStock: 10, 
                    Specification: {
                        Capacity: '10000mAh',
                        Battery : 'Li-Polymer',
                        USBoutputport: '2',
                        Material:'ABS & PC',
                        Dimention:'153.3mm X 75.6mm X 16.4mm',
                        netWeight:'216.8 gm',
                        packingContain:'1 Portable Charger Unit, 1 Charging Cable'
                    }
                },
                {
                    _id: '9',
                    name: 'Teknobyte Power Bank A03', 
                    image: '/images/A03.png',
                    price: 1499,
                    offerPrice: 699,
                    countInStock: 8, 
                    Specification: {
                        Capacity: '5000mAh',
                        Battery : 'Li-Polymer',
                        USBoutputport: '3',
                        Material:'ABS & PC',
                        Dimention:'93.30mm*68.5mm*23mm',
                        netWeight:'114 gm',
                        packingContain:'1 Portable Charger Unit, 1 Charging Cable'
                    }
                },
                {
                    _id: '10',
                    name: 'Teknobyte Power Bank A02', 
                    image: '/images/A02.png',
                    price: 1999,
                    offerPrice: 999,
                    countInStock: 4, 
                    Specification: {
                        Capacity: '10000mAh',
                        Battery : 'Li-Polymer',
                        USBoutputport: '2',
                        Material:'ABS & PC',
                        Dimention:'153.3mm X 75.6mm X 16.4mm',
                        netWeight:'216.8 gm',
                        packingContain:'1 Portable Charger Unit, 1 Charging Cable'
                    }
                }
            ],
        },
        {
            categoryName: 'Bluetooth Speaker',
            categoryImg: '/images/tur.png',
            Products : [
                {
                    _id: '11',
                    name: 'Bluetooth Speaker TUR',  
                    image: '/images/tur.png',
                    price: 2999,
                    offerPrice: 1499,
                    countInStock: 20, 
                    Specification: {
                        Bluetooth_Version: 'v4.2',
                        Output : '3W',
                        Size: '117*38*78mm',
                        Weight:'200g',
                        color:'Blue Green, & Black',
                        netWeight:'216.8 gm',
                        packingContain:'1 Portable Charger Unit, 1 Charging Cable'
                    }
                },
                {
                    _id: '12',
                    name: 'Bluetooth Speaker B01.3', 
                    image: '/images/B01-3.png',
                    price: 1999,
                    offerPrice: 999,
                    countInStock: 15, 
                    Specification: {
                        Bluetooth_Version: 'v4.2',
                        Output : '3W',
                        Size: '117*38*78mm',
                        Weight:'200g',
                        color:'Blue & Silver',
                        netWeight:'216.8 gm',
                        packingContain:'1 Portable Charger Unit, 1 Charging Cable'
                    }
                },
            ]
        }
    ],
    products: [
        
        {
            _id: '13',
            name: 'Bluetooth Speaker TUR', 
            category: 'Bluetooth Speaker',
            image: '/images/tur.png',
            price: 2999,
            offerPrice: 1499,
            countInStock: 20, 
            Specification: {
                Bluetooth_Version: 'v4.2',
                Output : '3W',
                Size: '117*38*78mm',
                Weight:'200g',
                color:'Blue Green, & Black',
                netWeight:'216.8 gm',
                packingContain:'1 Portable Charger Unit, 1 Charging Cable'
            }
        },
        
    
    {
        _id: '14',
        name: 'Teknobyte Power Bank Black A01',
        category: 'Power Bank',
        image: '/images/A01_black.png',
        price: 1999,
        offerPrice: 999,
        countInStock: 5, 
        Specification: {
            Capacity: '10000mAh',
            Battery : 'Li-Polymer',
            USBoutputport: '2',
            Material:'ABS & PC',
            Dimention:'153.3mm X 75.6mm X 16.4mm',
            netWeight:'216.8 gm',
            packingContain:'1 Portable Charger Unit, 1 Charging Cable'
        }
    },
    {
        _id: '15',
        name: 'Bluetooth Speaker B01.3',
        category: 'Bluetooth Speaker',
        image: '/images/B01-3.png',
        price: 1999,
        offerPrice: 999,
        countInStock: 15, 
        Specification: {
            Bluetooth_Version: 'v4.2',
            Output : '3W',
            Size: '117*38*78mm',
            Weight:'200g',
            color:'Blue & Silver',
            netWeight:'216.8 gm',
            packingContain:'1 Portable Charger Unit, 1 Charging Cable'
        }
    },
    {
        _id: '16',
        name: 'Teknobyte Power Bank White A01',
        category: 'Power Bank',
        image: '/images/A01.png',
        price: 2799,
        offerPrice: 999,
        countInStock: 10, 
        Specification: {
            Capacity: '10000mAh',
            Battery : 'Li-Polymer',
            USBoutputport: '2',
            Material:'ABS & PC',
            Dimention:'153.3mm X 75.6mm X 16.4mm',
            netWeight:'216.8 gm',
            packingContain:'1 Portable Charger Unit, 1 Charging Cable'
        }
    },
    {
        _id: '17',
        name: 'Teknobyte Power Bank A03',
        category: 'Power Bank',
        image: '/images/A03.png',
        price: 1499,
        offerPrice: 699,
        countInStock: 8, 
        Specification: {
            Capacity: '5000mAh',
            Battery : 'Li-Polymer',
            USBoutputport: '3',
            Material:'ABS & PC',
            Dimention:'93.30mm*68.5mm*23mm',
            netWeight:'114 gm',
            packingContain:'1 Portable Charger Unit, 1 Charging Cable'
        }
    },
    {
        _id: '18',
        name: 'Teknobyte Power Bank A02',
        category: 'Power Bank',
        image: '/images/A02.png',
        price: 1999,
        offerPrice: 999,
        countInStock: 4, 
        Specification: {
            Capacity: '10000mAh',
            Battery : 'Li-Polymer',
            USBoutputport: '2',
            Material:'ABS & PC',
            Dimention:'153.3mm X 75.6mm X 16.4mm',
            netWeight:'216.8 gm',
            packingContain:'1 Portable Charger Unit, 1 Charging Cable'
        }
    }
    ]
}
export default data;
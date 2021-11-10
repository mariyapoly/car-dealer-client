const products = [
    {
        name: '2013 AUDI A4',
        img: 'https://i.ibb.co/nLHsg4V/car-1.webp',
        des: 'Based on the 3 Series sedan, the AUDI A4 is due later in 2021 and was unveiled as a concept. AUDI A4 says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$123456'
    },
    {
        name: '2017 BENTLEY FLYING SPUR',
        img: 'https://i.ibb.co/bsPhfzt/car-3.webp',
        des: 'Based on the 3 Series sedan, the BENTLEY FLYING SPUR is due later in 2021 and was unveiled as a concept. BENTLEY FLYING SPUR says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$2323456'
    },
    {
        name: '2020 BMW i4',
        img: 'https://i.ibb.co/vxzgw9s/car-16.webp',
        des: 'Based on the 3 Series sedan, the i4 is due later in 2021 and was unveiled as a concept. BMW says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$923456'
    },
    {
        name: '2016 BUGATTI VEYRON',
        img: 'https://i.ibb.co/XxGwPdM/car-12.webp',
        des: 'Based on the 3 Series sedan, the BUGATTI VEYRON is due later in 2021 and was unveiled as a concept. BUGATTI VEYRON says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$523456'
    },
    {
        name: '2013 AUDI A4 2.0T QUATTRO PREMIUM PLUS',
        img: 'https://i.ibb.co/VxjbFrX/car-2.webp',
        des: 'Based on the 3 Series sedan, the AUDI A4 2.0T QUATTRO PREMIUM PLUS is due later in 2021 and was unveiled as a concept. AUDI A4 2.0T QUATTRO PREMIUM PLUS says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$223456'
    },
    {
        name: '2014 FORD F-150 LARIAT',
        img: 'https://i.ibb.co/QcQj5WR/car-20.webp',
        des: 'Based on the 3 Series sedan, the FORD F-150 LARIAT is due later in 2021 and was unveiled as a concept. FORD F-150 LARIAT says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$923456'
    },
    {
        name: '2017 FORD FOCUS SEL',
        img: 'https://i.ibb.co/RggJcVQ/car-4.webp',
        des: 'Based on the 3 Series sedan, the FORD FOCUS SEL is due later in 2021 and was unveiled as a concept. FORD FOCUS SEL says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$523456'
    },
    {
        name: '2013 AUDI A7 3.0T QUATTRO PRESTIGE',
        img: 'https://i.ibb.co/mNB47f6/car-5.webp',
        des: 'Based on the 3 Series sedan, the AUDI A7 3.0T QUATTRO PRESTIGE is due later in 2021 and was unveiled as a concept. AUDI says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$223456'
    },
    {
        name: '2017 AUDI R8 2017',
        img: 'https://i.ibb.co/4J09DV2/car-6.webp',
        des: 'Based on the 3 Series sedan, the 2017 AUDI R8 2017 is due later in 2021 and was unveiled as a concept. AUDI says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$823456'
    },
    {
        name: '2012 FERRARI 458 ITALIA',
        img: 'https://i.ibb.co/qmM0nHP/car-11.webp',
        des: 'Based on the 3 Series sedan, the FERRARI 458 ITALIA is due later in 2021 and was unveiled as a concept. FERRARI 458 ITALIA says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$323456'
    },
    {
        name: '2013 FERRARI ENZO',
        img: 'https://i.ibb.co/ykPtVsk/car-7.webp',
        des: 'Based on the 3 Series sedan, the 2013 FERRARI ENZO is due later in 2021 and was unveiled as a concept. FERRARI says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$523456'
    },
    {
        name: '2013 FORD EXPLORER',
        img: 'https://i.ibb.co/rsFSwQs/car-8.webp',
        des: 'Based on the 3 Series sedan, the 2013 FORD EXPLORER is due later in 2021 and was unveiled as a concept.  FORD says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$123456'
    },
    {
        name: '2014 MCLAREN 570GT',
        img: 'https://i.ibb.co/zFv6JxZ/car-9.webp',
        des: 'Based on the 3 Series sedan, the 2014 MCLAREN 570GT is due later in 2021 and was unveiled as a concept. MCLAREN says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$323456'
    },
    {
        name: '2004 MERCEDES-BENZ SL-CLASS SL 500',
        img: 'https://i.ibb.co/6Y03XZg/car-10.webp',
        des: 'Based on the 3 Series sedan, the 2004 MERCEDES-BENZ SL-CLASS SL 500 is due later in 2021 and was unveiled as a concept. MERCEDES-BENZ says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$423456'
    },
    {
        name: '2016 MCLAREN 650S',
        img: 'https://i.ibb.co/ZxY4RxZ/car-13.webp',
        des: 'Based on the 3 Series sedan, the 2016 MCLAREN 650S is due later in 2021 and was unveiled as a concept. MCLAREN says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$123456'
    },
    {
        name: '2015 BMW X5 XDRIVE50I',
        img: 'https://i.ibb.co/FxKwBC8/car-14.webp',
        des: 'Based on the 3 Series sedan, the 2015 BMW X5 XDRIVE50I is due later in 2021 and was unveiled as a concept. BMW says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$723456'
    },
    {
        name: '2017 AUDI A4 PRESTIGE',
        img: 'https://i.ibb.co/nLHsg4V/car-15.webp',
        des: 'Based on the 3 Series sedan, the 2017 AUDI A4 PRESTIGE is due later in 2021 and was unveiled as a concept. AUDI says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$623456'
    },

    {
        name: '2017 AUDI Q7 3.0T PREMIUM QUATTRO',
        img: 'https://i.ibb.co/dbvnBr4/car-17.webp',
        des: 'Based on the 3 Series sedan, the 2017 AUDI Q7 3.0T PREMIUM QUATTRO is due later in 2021 and was unveiled as a concept. AUDI says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$623456'
    },
    {
        name: '1998 BMW M3',
        img: 'https://i.ibb.co/k0hfsvM/car-18.webp',
        des: 'Based on the 3 Series sedan, the 1998 BMW M3 is due later in 2021 and was unveiled as a concept. BMW says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$823456'
    },
    {
        name: '2019 BUGATTI VEYRON',
        img: 'https://i.ibb.co/fMC3k47/car-19.webp',
        des: 'Based on the 3 Series sedan, the 2019 BUGATTI VEYRON is due later in 2021 and was unveiled as a concept. BUGATTI says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$923456'
    },

    {
        name: '2016 FORD EDGE TITANIUM',
        img: 'https://i.ibb.co/QPjdWXZ/car-21.webp',
        des: 'Based on the 3 Series sedan, the 2016 FORD EDGE TITANIUM is due later in 2021 and was unveiled as a concept. FORD says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$123456'
    },
    {
        name: '2017 FORD FOCUS SEL',
        img: 'https://i.ibb.co/FnK05wQ/car-22.webp',
        des: 'Based on the 3 Series sedan, the 2017 FORD FOCUS SEL is due later in 2021 and was unveiled as a concept. FORD says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$223456'
    },
    {
        name: '2012 MERCEDES-BENZ M-CLASS ML 350',
        img: 'https://i.ibb.co/J5RLssh/car-23.webp',
        des: 'Based on the 3 Series sedan, the 2012 MERCEDES-BENZ M-CLASS ML 350 is due later in 2021 and was unveiled as a concept. MERCEDES says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$123456'
    },
    {
        name: '2013 AUDI A4 2.0T QUATTRO PREMIUM PLUS',
        img: 'https://i.ibb.co/r2ZB1MP/car-24.webp',
        des: 'Based on the 3 Series sedan, the 2013 AUDI A4 2.0T QUATTRO PREMIUM PLUS is due later in 2021 and was unveiled as a concept. AUDI says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$323456'
    },
    {
        name: '2016 BMW X1',
        img: 'https://i.ibb.co/Sf0m1BG/car-25.webp',
        des: 'Based on the 3 Series sedan, the 2016 BMW X1 is due later in 2021 and was unveiled as a concept. BMW says the production version will have a range of around 270 miles, more than 500 horsepower and a 0-60-mph time of 4.0 seconds.',
        price: '$623456'
    },
]

























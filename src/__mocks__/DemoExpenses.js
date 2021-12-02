const DemoExpenses = [
  {
    date: '03/04/2021',
    item_name: 'Haircut ',
    amount_nzd: 15.0,
    type: 'Daily Spending',
    sub_type: 'Haircut',
    payment_type: 'Efpos-1234'
  },
  {
    date: '01/04/2021',
    item_name: 'Gsuite',
    amount_nzd: 10.04,
    type: 'Freelancing',
    sub_type: 'Email Service',
    payment_type: 'Credit_card-2345'
  },
  {
    date: '31/03/2021',
    item_name: 'Parking',
    amount_nzd: 0.7,
    type: 'Daily Spending',
    sub_type: 'Parking',
    payment_type: 'Credit_card-1234'
  },
  {
    date: '31/03/2021',
    item_name: 'Kebab+drink',
    amount_nzd: 18.0,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Efpos-1234'
  },
  {
    date: '29/03/2021',
    item_name: 'License Renewal',
    amount_nzd: 38.2,
    type: 'Bills',
    sub_type: 'Drivers License',
    payment_type: 'Efpos-1234'
  },
  {
    date: '25/03/2021',
    item_name: 'Poke bowl',
    amount_nzd: 13.0,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Efpos-1234'
  },
  {
    date: '21/03/2021',
    item_name: 'Eat out',
    amount_nzd: 16.0,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Efpos-1234'
  },
  {
    date: '21/03/2021',
    item_name: 'Spark March bill',
    amount_nzd: 98.2,
    type: 'Bills',
    sub_type: 'Mobile Plan',
    payment_type: 'Bank-Transfer-2345'
  },
  {
    date: '20/03/2021',
    item_name: 'Fuel',
    amount_nzd: 48.62,
    type: 'Bills',
    sub_type: 'Fuel',
    payment_type: 'Efpos-1234'
  },
  {
    date: '19/03/2021',
    item_name: 'Bakery lunch',
    amount_nzd: 5.0,
    type: 'Visa',
    sub_type: 'Food',
    payment_type: 'Efpos-1234'
  },
  {
    date: '19/03/2021',
    item_name: 'Electricity Feb ',
    amount_nzd: 65.65,
    type: 'Bills',
    sub_type: 'Electricity Bill',
    payment_type: 'Bank_Transfer-1234'
  },
  {
    date: '19/03/2021',
    item_name: 'Domain renew',
    amount_nzd: 40.0,
    type: 'Freelancing',
    sub_type: 'Domain',
    payment_type: 'Credit_card-1234'
  },
  {
    date: '18/03/2021',
    item_name: 'Subway',
    amount_nzd: 5.5,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Efpos-1234'
  },
  {
    date: '17/03/2021',
    item_name: 'Jackets',
    amount_nzd: 79.99,
    type: 'Daily Spending',
    sub_type: 'Clothing',
    payment_type: 'Credit_card-2345'
  },
  {
    date: '16/03/2021',
    item_name: 'KFC',
    amount_nzd: 14.5,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Efpos-1234'
  },
  {
    date: '12/03/2021',
    item_name: 'Taka Parking',
    amount_nzd: 8.5,
    type: 'Daily Spending',
    sub_type: 'Parking',
    payment_type: 'Credit_card-1234'
  },
  {
    date: '12/03/2021',
    item_name: 'AF Parking',
    amount_nzd: 1.95,
    type: 'Daily Spending',
    sub_type: 'Parking',
    payment_type: 'Credit_card-1234'
  },
  {
    date: '12/03/2021',
    item_name: 'Sushi',
    amount_nzd: 8.0,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Efpos-1234'
  },
  {
    date: '09/03/2021',
    item_name: 'Parking queen st',
    amount_nzd: 3.66,
    type: 'Daily Spending',
    sub_type: 'Parking',
    payment_type: 'Credit_card-1234'
  },
  {
    date: '08/03/2021',
    item_name: 'Big pizza',
    amount_nzd: 20.0,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Spare_coins'
  },
  {
    date: '09/03/2021',
    item_name: 'Parking CBD',
    amount_nzd: 1.5,
    type: 'Daily Spending',
    sub_type: 'Parking',
    payment_type: 'Credit_card-1234'
  },
  {
    date: '08/03/2021',
    item_name: 'Parking Albany',
    amount_nzd: 0.9,
    type: 'Daily Spending',
    sub_type: 'Parking',
    payment_type: 'Credit_card-1234'
  },
  {
    date: '08/03/2021',
    item_name: 'BP Fuel',
    amount_nzd: 48.64,
    type: 'Daily Spending',
    sub_type: 'Fuel',
    payment_type: 'Efpos-1234'
  },
  {
    date: '05/03/2021',
    item_name: 'Football club membership',
    amount_nzd: 20.0,
    type: 'Sports',
    sub_type: 'UoA-football',
    payment_type: 'PayPal-main'
  },
  {
    date: '04/03/2021',
    item_name: 'Web cam cover',
    amount_nzd: 3.65,
    type: 'Electronics',
    sub_type: 'Laptop Accessories',
    payment_type: 'Bank-Transfer-2345'
  },
  {
    date: '03/03/2021',
    item_name: 'Laptop keyboard cover',
    amount_nzd: 6.25,
    type: 'Electronics',
    sub_type: 'Laptop Accessories',
    payment_type: 'Credit_card-1234'
  },
  {
    date: '04/03/2021',
    item_name: 'G-Suite fees',
    amount_nzd: 9.69,
    type: 'Freelancing',
    sub_type: 'Email Service',
    payment_type: 'Credit_card-2345'
  },
  {
    date: '01/03/2021',
    item_name: 'Water bill ',
    amount_nzd: 47.88,
    type: 'Bills',
    sub_type: 'Water bill',
    payment_type: 'Bank_Transfer-1234'
  },
  {
    date: '25/02/2021',
    item_name: 'Parking 1hr',
    amount_nzd: 2.5,
    type: 'Daily Spending',
    sub_type: 'Parking',
    payment_type: 'Credit_card-2345'
  },
  {
    date: '24/02/2021',
    item_name: 'Sauce Katsu',
    amount_nzd: 13.5,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Efpos-1234'
  },
  {
    date: '21/02/2021',
    item_name: 'Burger+chips',
    amount_nzd: 6.5,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Spare_coins'
  },
  {
    date: '21/02/2021',
    item_name: 'Beef+onion Pizza',
    amount_nzd: 5.0,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Spare_coins'
  },
  {
    date: '20/02/2021',
    item_name: 'Visa fees',
    amount_nzd: 310.0,
    type: 'Visa',
    sub_type: 'Visa Application Fee',
    payment_type: 'Credit_card-1234'
  },
  {
    date: '19/02/2021',
    item_name: 'Haircut',
    amount_nzd: 15.0,
    type: 'Daily Spending',
    sub_type: 'Haircut',
    payment_type: 'Efpos-1234'
  },
  {
    date: '19/02/2021',
    item_name: 'Korean spice',
    amount_nzd: 16.0,
    type: 'Daily Spending',
    sub_type: 'Grocery',
    payment_type: 'Efpos-1234'
  },
  {
    date: '19/02/2021',
    item_name: '3 apples',
    amount_nzd: 0.52,
    type: 'Daily Spending',
    sub_type: 'Grocery',
    payment_type: 'PayPal-main'
  },
  {
    date: '19/02/2021',
    item_name: 'Milk',
    amount_nzd: 2.87,
    type: 'Daily Spending',
    sub_type: 'Grocery',
    payment_type: 'Credit_card-2345'
  },
  {
    date: '18/02/2021',
    item_name: 'Eating out',
    amount_nzd: 72.5,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Efpos-1234'
  },
  {
    date: '18/02/2021',
    item_name: 'Concert ticket',
    amount_nzd: 64.0,
    type: 'Daily Spending',
    sub_type: 'Social',
    payment_type: 'Spare_coins'
  },
  {
    date: '15/02/2021',
    item_name: 'Fuel',
    amount_nzd: 50.03,
    type: 'Bills',
    sub_type: 'Fuel',
    payment_type: 'Efpos-1234'
  },
  {
    date: '16/02/2021',
    item_name: "Park'n save Kebab",
    amount_nzd: 7.49,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Efpos-1234'
  },
  {
    date: '14/02/2021',
    item_name: 'Burgerfuel',
    amount_nzd: 22.3,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Efpos-1234+Cash'
  },
  {
    date: '08/02/2021',
    item_name: 'Coffee chat',
    amount_nzd: 11.0,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Efpos-1234'
  },
  {
    date: '04/02/2021',
    item_name: 'Pie lunch',
    amount_nzd: 5.0,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Cash'
  },
  {
    date: '03/02/2021',
    item_name: 'Car rental',
    amount_nzd: 570.0,
    type: 'Travel',
    sub_type: 'Car Hire',
    payment_type: 'Bank_Transfer-1234'
  },
  {
    date: '01/02/2021',
    item_name: 'Observatory entry',
    amount_nzd: 10.0,
    type: 'Travel',
    sub_type: 'Nelson Trip Jan 2021',
    payment_type: 'Efpos-1234'
  },
  {
    date: '29/01/2021',
    item_name: 'Camping fees',
    amount_nzd: 30.0,
    type: 'Travel',
    sub_type: 'Nelson Trip Jan 2021',
    payment_type: 'Credit_card-2345'
  },
  {
    date: '29/01/2021',
    item_name: 'Vegetables',
    amount_nzd: 8.47,
    type: 'Travel',
    sub_type: 'Grocery',
    payment_type: 'Efpos-1234'
  },
  {
    date: '28/01/2021',
    item_name: 'Museum ticket',
    amount_nzd: 8.0,
    type: 'Travel',
    sub_type: 'Nelson Trip Jan 2021',
    payment_type: 'Efpos-1234'
  },
  {
    date: '26/01/2021',
    item_name: 'Matches',
    amount_nzd: 1.84,
    type: 'Travel',
    sub_type: 'Camping Kits',
    payment_type: 'Credit_card-2345'
  },
  {
    date: '26/01/2021',
    item_name: 'Onion and carrots',
    amount_nzd: 7.48,
    type: 'Travel',
    sub_type: 'Grocery',
    payment_type: 'Efpos-1234'
  },
  {
    date: '26/01/2021',
    item_name: 'All food',
    amount_nzd: 106.69,
    type: 'Travel',
    sub_type: 'Grocery',
    payment_type: 'Efpos-1234'
  },
  {
    date: '26/01/2021',
    item_name: 'Camping stick',
    amount_nzd: 10.48,
    type: 'Travel',
    sub_type: 'Camping Kits',
    payment_type: 'Credit_card-2345'
  },
  {
    date: '25/01/2021',
    item_name: 'Batteries',
    amount_nzd: 19.0,
    type: 'Daily Spending',
    sub_type: 'Camping Kits',
    payment_type: 'Efpos-1234'
  },
  {
    date: '25/01/2021',
    item_name: 'Camping kits ',
    amount_nzd: 56.0,
    type: 'Travel',
    sub_type: 'Camping Kits',
    payment_type: 'PayPal-main'
  },
  {
    date: '25/01/2021',
    item_name: 'Phone case',
    amount_nzd: 39.99,
    type: 'Electronics',
    sub_type: 'Phone Accessories',
    payment_type: 'Efpos-1234'
  },
  {
    date: '22/01/2021',
    item_name: 'Checked baggage AKL-NLS',
    amount_nzd: 19.0,
    type: 'Travel',
    sub_type: 'Flights',
    payment_type: 'Credit_card-1234'
  },
  {
    date: '22/01/2021',
    item_name: 'Checked baggage NLS-AKL',
    amount_nzd: 19.0,
    type: 'Travel',
    sub_type: 'Flights',
    payment_type: 'Credit_card-1234'
  },
  {
    date: '22/01/2021',
    item_name: 'Japanese don',
    amount_nzd: 13.8,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'PayPal-main'
  },
  {
    date: '22/01/2021',
    item_name: 'Beer',
    amount_nzd: 4.0,
    type: 'Daily Spending',
    sub_type: 'Food',
    payment_type: 'Credit_card-2345'
  },
  {
    date: '18/01/2021',
    item_name: 'Event ticket',
    amount_nzd: 90.0,
    type: 'Daily Spending',
    sub_type: 'Social',
    payment_type: 'Bank_Transfer-1234'
  },
  {
    date: '17/01/2021',
    item_name: 'Flights to Auckland',
    amount_nzd: 168.0,
    type: 'Travel',
    sub_type: 'Flights',
    payment_type: 'Credit_card-1234'
  },
  {
    date: '17/01/2021',
    item_name: 'Flights to Nelson',
    amount_nzd: 278.0,
    type: 'Travel',
    sub_type: 'Flights',
    payment_type: 'Credit_card-1234'
  },
  {
    date: '18/01/2021',
    item_name: 'Notebook',
    amount_nzd: 3.0,
    type: 'Daily Spending',
    sub_type: 'Stationary',
    payment_type: 'PayPal-main'
  },
];

export default DemoExpenses;

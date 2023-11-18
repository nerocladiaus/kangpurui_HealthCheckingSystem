
const bookings = [];
//A foodlist in database
const foods = ['Salad', 'Broccoli', 'Fish', 'chickpeas', 'Yogurt', 'brown rice', 'wholemeal bread with Peanut butter', 'Kiwi', 'Chicken Breasts'];
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


module.exports = {
      description : "A healthcare app facilitates seamless access to medical information and services, promoting personalized wellness and enhancing the overall healthcare experience for users.",
      // This function is to generator a random selection from the database and display it
      generateRandomFood(foodList) {
        const randomIndex = Math.floor(Math.random() * foodList.length);
        return foodList[randomIndex];  
      },

      //This function is to calculate BMI base on user inpt on weight and height
      calculateBMI(weight, height) {
        const bmi = weight / (height * height);
        return bmi.toFixed(2);
      },

      //This function is to allow user to input the weight and height and call calculateBMI function to make a calculation.
      BMI() { 
        rl.question('Please enter your weight in kilograms(kg): ', (weight) => {
          rl.question('Please enter your height in meters(m): ', (height) => {
            const bmiResult = module.exports.calculateBMI(parseFloat(weight), parseFloat(height));
            console.log(`Your BMI is: ${bmiResult}`);
            module.exports.displayBMIStatus(bmiResult);
            Menu();
            getMenuChoice();
          });
        });
      },

      //This function is to display different option base on BMI result
      displayBMIStatus(bmi) {
        if (bmi < 18.5) {
          console.log('You are underweight. Please eat more.');
        } else if (bmi < 24.9) {
          console.log('You are normal weight. Please keep it!!!');
        } else if (bmi < 29.9) {
          console.log('You are overweight. Please have some exercises.');
        } else {
          console.log('You are obese!');
        }
      },

      //This function is to display advice on daily calories intake base on user gender
      Calories() {
        rl.question('Please enter your gender (male/female): ', (gender) => {
          switch (gender.toLowerCase()) {
              case 'male':
                  console.log('Recommended daily calories for a male: 2500');
                  break;
              case 'female':
                  console.log('Recommended daily calories for a female: 2000');
                  break;
              default:
                  console.log('Invalid input. Please enter "male" or "female".');
          }
          Menu();
          getMenuChoice();
      });
      },
      //This function is to view all the appointment details that made by user
       viewBookings() {
        console.log('\n=== Booking Details ===');
        if (bookings.length === 0) {
          console.log('There is no booking history. Please make an appointment before viewing');
        } else {
          bookings.forEach((booking, index) => {
            console.log(`${index + 1}. ${booking.name} - ${booking.date} at ${booking.time}`);
          });
        }

      },
      //This function is to allow user to book appointment 
       addBooking() {
        rl.question('Please enter your name: ', (name) => {
          rl.question('Please enter date (DD-MM-YY): ', (date) => {
            rl.question('Please enter time(24h): ', (time) => {
              const newBooking = {
                name,
                date,
                time
              };
              bookings.push(newBooking);
              console.log('Booking added successfully!');
              Menu();
              getMenuChoice();
            });
          });
        });
      }
}

 // Initial display of the menu
function Menu() {
    console.log('1. Healthy Food Suggestion');
    console.log('2. BMI Calculator');
    console.log('3. Calories Intake Daily');
    console.log('4. Appointment Booking');
    console.log('5. Appointment Viewing');
    console.log('6. Healthcare Purpose');
    console.log('7. Exit Health Checking System');
  }
  //A function to handle input from the user
  function handleChoice(choice) {
    switch (choice) {
      case '1':
        const randomFood = module.exports.generateRandomFood(foods);
        console.log('Today suggest health food is :' + randomFood);
        break;

      case '2':
        module.exports.BMI();
        break;

      case '3':
        module.exports.Calories();
        break;

      case '4':
        module.exports.addBooking();
        break;

      case '5':
        module.exports.viewBookings();
        break;

      case '6':
        console.log(module.exports.description);
        break;

      case '7':
        console.log('Exiting... Hope you have a healthy lifestyle');
        rl.close();
        break;

      default:
        console.log('Invalid choice. Please select the correct option.');
    }
  }

   // Start getting user input
  function getMenuChoice() {
    rl.question('Please make your selection: ', (choice) => {
      handleChoice(choice);
      if ( choice !== '2' && choice !== '3'&& choice !== '4' && choice !== '7') {
        Menu();
        getMenuChoice();
      }
    });
  }
  Menu();
  getMenuChoice();
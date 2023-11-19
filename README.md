# Assignment 1

## Health care app
This healthcare app is a digital application designed to provide users with convenient access to health-related information, services, and resources. It has some features such as appointment booking and viewing, BMI Calculator, and calorie intake suggestions Users can monitor their health, receive personalized recommendations, and stay informed about medical conditions. 

## Content
1. Healthy Food Suggestion
2. BMI Calculator
3. Calories Intake Daily
4. Appointment Booking
5. Appointment Viewing
6. Healthcare Purpose
7. Exit Health Checking System


## Application Test
Step 1: Open New Terminal or "ctrl + shift + ` "

Step 2: Type **node kangpurui_Assignment1.js**

Step 3: Press 'Enter' Key

Step 4: Test out the program based on selection.


## Application Functions

### 1. generateRandomFood
This function is to generate a random name from the list(fake database)
Each time the user runs this function, it will display a different name of a healthy food.


### 2. BMI Function
This function enables users to input their weight and height, calculates the BMI result, and provides different suggestions based on the outcome.
```
 1. calculateBMI
This function is to calculate BMI based on user input.

 2. displayBMIStatus
Based on the calculatedBMI result, the program will determine the user's data range and display a corresponding message.

 3. BMI
This function allows users to input their weight and height, displaying different information based on the result from calculateBMI and displayBMIStatus.

Overall, this function provides a service that helps users determine their needs based on their condition.
```

### 3. Calories
This function is to determine the user's daily calorie intake based on their selection of gender (male/female).

### 4. Addbooking
This function enables users to book appointments by entering their name, date, and time.

### 5. Viewbookings
This function allows users to view their appointment booking history.


## UI Function

### 1. Menu
This function presents all options in a table for the user to select.

### 2. handleChoice
This function manages and handles user input based on their selection.

### 3. getMenuChoice
This function is to check user selection.

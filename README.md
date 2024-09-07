# Screenshot Test Case Generator

This project leverages Google Gemini to generate comprehensive test cases based on screenshots of web or mobile applications. By analyzing images of key screens, the tool outputs detailed testing instructions for each functionality present, with optional text context.

## Features
- **Screenshot-based test case generation**: Upload screenshots of web or mobile app interfaces, and the tool will automatically generate detailed test cases for each visible feature.
- **Optional Context Input**: You can provide additional context or leave it blank to let the tool infer test cases solely from the screenshots.
- **Google Gemini Integration**: Utilizes the Google Gemini API for generating precise and actionable test cases based on the screenshots and provided context.
- **Detailed Instructions**: Outputs comprehensive step-by-step guides for testing functionalities like source, destination, date selection, bus selection, seat selection, etc.
  
## How it Works
1. **Upload Screenshots**: Users can upload screenshots of app screens such as the home page, bus availability page, seat selection page, etc.
2. **API Call to Google Gemini**: These images are sent to the Google Gemini API with optional context.
3. **Receive Test Cases**: The API returns a list of detailed test cases, including testing steps for each identified functionality on the page.

## Screenshots Analyzed
- **Home Page**: Main app interface where users input source, destination, and travel date.
- **Bus Availability Page**: Display of available buses with filter options and bus information.
- **Seat Selection Page**: Interactive seat selection grid showing available and occupied seats.
- **Others**: Additional pages such as drop-off points, filters, and offers.

## Requirements
- Python 3.x
- Flask
- React (Frontend)
- Google Gemini API key

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/bhattacharyasaikat/Screenshot-Test-Case-Generator.git
   cd Screenshot-Test-Case-Generator
2. Frontend
   ```bash
   cd frontend
   npm install
   npm run dev
3. Backend
   ```bash
   pip install -r requirements.txt
   python app.py


## Screenshots:
![ss1](https://github.com/user-attachments/assets/2fd49e57-a0b4-4380-9176-afe493b5229c)

![ss2](https://github.com/user-attachments/assets/fc9add78-0661-4a4d-bf2c-99d2e291a3c8)
![ss3](https://github.com/user-attachments/assets/b7ef7d9c-ecf4-4c5e-822d-44f55e6d4a61)
![ss4](https://github.com/user-attachments/assets/94a75aad-6a27-437d-abc6-1b077f9e8747)

![ss5](https://github.com/user-attachments/assets/1c9254a5-fa7d-421b-98d3-bf82ba5ea276)
![ss6](https://github.com/user-attachments/assets/eac6b93d-d84f-4909-ba23-7fc351665503)
![ss7](https://github.com/user-attachments/assets/259b0166-bb65-41e9-af81-8dc3240488c1)
![ss8](https://github.com/user-attachments/assets/1b8b455a-ae14-4306-90cb-39909b22537e)
![ss9](https://github.com/user-attachments/assets/40c3f880-7c91-43df-8937-e5fe5cadc7be)

## Results test cases:
![1](https://github.com/user-attachments/assets/dd459d51-fc9e-4c01-b433-2aacecc39502)
![2](https://github.com/user-attachments/assets/faabe013-3308-443d-b94a-f58ee8b871b2)
![3](https://github.com/user-attachments/assets/e02bfcb2-2c4c-4b6c-9ba2-9b1708d17215)
![4](https://github.com/user-attachments/assets/79af8b88-570c-465f-88df-d22026f075ba)
![5](https://github.com/user-attachments/assets/c9de2e4c-9a47-48a0-a013-960c41337767)


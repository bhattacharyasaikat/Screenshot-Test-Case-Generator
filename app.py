from flask import Flask, request, jsonify
import google.generativeai as genai
from PIL import Image
import io

app = Flask(__name__)
from flask_cors import CORS

# Allow all origins
CORS(app)
API_KEY = "AIzaSyA3VQpjBu6AI92KTsvoHomRdWBdMqalCPI"

genai.configure(api_key=API_KEY)

def call_gemini_api(images, context=""):
    try:
        uploaded_images = []

        for img in images:
            # Read the image from the file object
            img_bytes = img.read()
            img_pil = Image.open(io.BytesIO(img_bytes))

            # Save the image temporarily to disk (optional) or upload directly from memory
            img_path = f'/tmp/{img.filename}'  
            img_pil.save(img_path)

            uploaded_image = genai.upload_file(path=img_path, display_name=img.filename)
            uploaded_images.append(uploaded_image.uri)
        prompt = f"""
        Generate a detailed, step-by-step guide for testing the functionalities of the website shown in the provided screenshots.
         Analyze the visible elements (such as buttons, input fields, Links) and generate detailed step-by-step test cases for testing the functionalities of the website
         Each test case should follow this structured format. Generate detailed, step-by-step test cases for each visible functionality :
        1. **Test Case ID**: Assign a unique identifier to the test case for future reference.

        2. **Test Case Description**: Describe what the test case is designed to do, including a brief overview of the expected behavior.

        3. **Pre-Conditions**: Document any setup or configurations needed before running the test case.

        4. **Test Steps**: Provide clear, step-by-step instructions on how to perform the test.

        5. **Expected Result**: Describe what the tester should observe if the feature works correctly.

        6. **Status**: Report the outcome of the test (pass or fail), and provide a summary of the results.

        **Screenshots**: {", ".join(uploaded_images)}

        **Context (if available)**: {context if context else "No additional context provided."}
        
        generate test cases from all the images provided. 
        Please ensure that the test cases cover all visible functionalities and features in the screenshots, even if no additional context is provided. Follow the above structure to generate detailed and organized test cases.
        """
        content = {
            "parts": [
                {"text": prompt}
            ]
        }

        model = genai.GenerativeModel(model_name="gemini-1.5-pro")

        response = model.generate_content(content)
        return response.text if response else {"error": "No response from Gemini API"}

    except Exception as e:
        print(f"Error: {e}")
        return {"error": str(e)}
@app.route('/api/describe', methods=['POST'])
def describe_testing_instructions():
    context = request.form.get('context', '')
    images = request.files.getlist('images')

    test_cases = call_gemini_api(images, context)
    return jsonify({"testCases": test_cases})


if __name__ == '__main__':
    app.run(debug=True)

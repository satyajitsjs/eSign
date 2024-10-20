```markdown
# eSign Project

## Overview

eSign is a web application that allows users to upload, sign, and manage documents electronically. The application consists of a Django backend and a React frontend.

## Project Structure
eSign/
├── accounts/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations/
│   ├── models.py
│   ├── serializers.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── documents/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations/
│   ├── models.py
│   ├── serializers.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── esign/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── esign-frontend/
│   ├── .gitignore
│   ├── package.json
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── Components/
│   │   │   ├── AuthPage.js
│   │   │   ├── Dashboard.js
│   │   │   ├── DocumentSigning.js
│   │   │   ├── DocumentUploads.js
│   │   │   ├── Header.js
│   │   │   ├── HomePage.js
│   │   │   └── styles.css
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
├── manage.py
├── media/
├── db.sqlite3
└── requirements.txt
```

## Setup Instructions

### Backend (Django)

1. **Clone the repository:**

   ```sh
   git clone https://github.com/satyajitsjs/eSign.git
   cd eSign
   ```

2. **Create and activate a virtual environment:**

   ```sh
   python -m venv env
   source env/bin/activate  # On Windows use `env\Scripts\activate`
   ```

3. **Install the dependencies:**

   ```sh
   pip install -r requirements.txt
   ```

4. **Apply migrations:**

   ```sh
   python manage.py migrate
   ```

5. **Create a superuser:**

   ```sh
   python manage.py createsuperuser
   ```

6. **Run the development server:**

   ```sh
   python manage.py runserver
   ```

### Frontend (React)

1. **Navigate to the frontend directory:**

   ```sh
   cd esign-frontend
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

3. **Run the development server:**

   ```sh
   npm start
   ```

## Usage

1. **Access the application:**

   Open your browser and navigate to `http://localhost:3000`.

2. **Login/Register:**

   - If you don't have an account, register a new account.
   - If you have an account, login with your credentials.

3. **Dashboard:**

   - After logging in, you will be redirected to the dashboard where you can see the list of documents.

4. **Upload Document:**

   - Click on the "Upload Document" button to upload a new document.

5. **Sign Document:**

   - Click on a document to view and sign it. You can either draw your signature or type it.

6. **Download Document:**

   - You can download the signed document from the dashboard.

## Technologies Used

- **Backend:**
  - Django
  - Django REST Framework
  - SQLite (default database)

- **Frontend:**
  - React
  - React Router
  - Axios
  - React Toastify
  - React Signature Canvas

## Contributing

1. **Fork the repository:**

   ```sh
   git clone https://github.com/satyajitsjs/eSign.git
   ```

2. **Create a new branch:**

   ```sh
   git checkout -b feature-branch
   ```

3. **Make your changes and commit them:**

   ```sh
   git commit -m "Description of changes"
   ```

4. **Push to the branch:**

   ```sh
   git push origin feature-branch
   ```

5. **Create a pull request:**

   Go to the repository on GitHub and create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [satyajitofficial4@gmail.com](mailto:satyajitofficial4@gmail.com).
```

### Explanation

1. **Overview**: Provides a brief description of the project.
2. **Project Structure**: Lists the directory structure of the project.
3. **Setup Instructions**: Provides step-by-step instructions to set up the backend and frontend.
4. **Usage**: Describes how to use the application.
5. **Technologies Used**: Lists the technologies used in the project.
6. **Contributing**: Provides instructions for contributing to the project.
7. **License**: Specifies the license under which the project is distributed.
8. **Contact**: Provides contact information for inquiries.
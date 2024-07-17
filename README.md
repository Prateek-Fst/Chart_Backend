# Dashboard Backend

This project serves as the backend API for the data visualization dashboard. It uses Express.js and MongoDB to manage and provide data to the frontend.

## Installation

Clone the repository:

```
git clone https://github.com/Prateek-Fst/Chart_Backend.git
cd data-visualization-dashboard
```
Install dependencies:
```
npm install
Configure MongoDB
```

## Ensure MongoDB is installed and running.
Update the MongoDB connection URI.

## Running the Application

## To start the backend server:
```
node server.js
The backend will run on http://localhost:8000.
```

## API Endpoints

GET /api/data: Retrieves data based on optional query parameters (endYear, topic, sector, etc.).
Additional Notes

Ensure MongoDB is properly configured and running before starting the backend.
CORS is enabled to allow requests from the frontend running on http://localhost:3000.

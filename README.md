# Unsplash Photo Search and Display

This project is a web application that allows users to search for and display photos from the Unsplash API. Users can search by keyword and category, view a list of photos, and click on photos to view them in an enlarged view. 

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features
- Search for photos by keyword and category.
- Fetch random photos when no search criteria is provided.
- Display photos in a list format.
- Click on a photo to view it in an enlarged view.
- Loading state management.

## Installation

### Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/unsplash-photo-search.git
    cd unsplash-photo-search
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the root directory and add your Unsplash API key:
    ```env
    VITE_UNSPLASH_API_KEY=your_unsplash_api_key
    ```

4. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage
1. Enter a keyword and/or category in the search bar.
2. Click the "Search" button to fetch photos matching the criteria.
3. Browse through the list of photos.
4. Click on a photo to view it in an enlarged view.
5. Click outside the enlarged photo to close the view.

## Components

### `App.js`
The main component that handles the state and logic for fetching and displaying photos.

### `SearchBar.js`
A component that provides input fields for the search query and category, and a button to trigger the search.

### `FotoList.js`
A component that displays a list of photos.

### `FotoAmpliada.js`
A component that displays an enlarged view of a selected photo.

## Environment Variables
- `VITE_UNSPLASH_API_KEY`: Your Unsplash API key. You can obtain it from the [Unsplash Developers](https://unsplash.com/developers) website.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

### Steps to Contribute
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License.

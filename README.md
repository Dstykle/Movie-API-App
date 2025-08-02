# Movie API App

**Developer:** Pablo Gomez  
**Program:** Road to Hire Apprenticeship  
**Project Type:** First API Integration Project  
**Technologies:** HTML5, CSS3, JavaScript ES6, OMDB API, Materialize CSS  

## Project Description

This Movie API App represents my first experience working with external APIs during my Road to Hire apprenticeship. The application allows users to search for movies using the Open Movie Database (OMDB) API, with advanced filtering capabilities by genre and year. This project was instrumental in teaching me how to work with asynchronous JavaScript, API integration, and data manipulation.

The app demonstrates practical skills in making HTTP requests, handling JSON responses, error management, and creating dynamic user interfaces based on API data.

## Features

### Core Functionality
- **Movie Search** - Search movies by title using OMDB API
- **Advanced Filtering** - Optional genre and year filters for refined results
- **Detailed Information** - Displays comprehensive movie details including:
  - Title and release year
  - Movie poster images
  - Genre classification
  - Director information
  - Plot summaries
- **Multiple Results** - Shows all movies matching search criteria
- **Error Handling** - User-friendly error messages for failed requests

### Technical Implementations
- **Async/Await Pattern** - Modern JavaScript for handling asynchronous operations
- **REST API Integration** - HTTP GET requests to OMDB API endpoints
- **JSON Data Processing** - Parsing and filtering API response data
- **Dynamic DOM Manipulation** - Creating HTML elements programmatically
- **Input Validation** - Client-side validation for required fields
- **Responsive Design** - Materialize CSS framework for clean UI

### User Experience Features
- **Clean Interface** - Minimalist design focused on functionality
- **Real-time Results** - Immediate feedback upon search submission
- **Image Handling** - Graceful fallback for missing movie posters
- **Multiple Search Criteria** - Flexible search with optional parameters
- **Clear Results Display** - Well-organized movie information layout

## Project Structure

```
├── index.html          # Main application page
├── main.js            # JavaScript API logic and search functionality
└── main.css           # Custom styling for layout and borders
```

## API Integration Details

### OMDB API Endpoints Used
- **Search Endpoint:** `https://www.omdbapi.com/?apikey=378ecac&s={title}`
- **Details Endpoint:** `https://www.omdbapi.com/?apikey=378ecac&i={imdbID}`

### Data Flow Process
1. **Initial Search** - Search by movie title to get basic results
2. **Detailed Fetch** - Retrieve full details for each movie found
3. **Client-side Filtering** - Apply genre and year filters to detailed results
4. **Dynamic Display** - Render filtered results to the DOM

### Error Handling
- Network request failures
- API response errors
- Missing or invalid data fields
- Empty search results
- Invalid API responses

## Code Architecture

### JavaScript Features Used
- **ES6 Async/Await** - Modern asynchronous programming
- **Fetch API** - HTTP requests without external libraries
- **Array Methods** - Filtering and data manipulation
- **Template Literals** - Dynamic HTML string generation
- **DOM API** - Element creation and manipulation
- **Error Handling** - Try-catch blocks for robust error management

### CSS Framework Integration
- **Materialize CSS** - Google's Material Design implementation
- **Responsive Grid System** - Mobile-friendly layout
- **Custom Styling** - Additional CSS for specific design requirements

## Search Functionality

### Required Input
- **Movie Title** - Primary search parameter (required)

### Optional Filters
- **Genre** - Filter results by movie genre (case-insensitive)
- **Year** - Filter results by specific release year

## Learning Outcomes

This project taught me essential web development skills:

- **API Integration** - Understanding RESTful APIs and HTTP requests
- **Asynchronous Programming** - Working with promises and async/await
- **Data Manipulation** - Processing and filtering JSON data
- **Error Handling** - Creating robust applications with proper error management
- **UI/UX Design** - Building user-friendly interfaces with CSS frameworks
- **JavaScript ES6+** - Modern JavaScript features and best practices

## API Dependencies

- **OMDB API** - Open Movie Database for movie information
- **API Key** - Included in the application (for educational purposes)
- **Rate Limits** - Subject to OMDB API usage limits

## Technical Challenges Overcome

1. **Multiple API Calls** - Learning to handle sequential API requests for detailed information
2. **Asynchronous Data Processing** - Managing multiple concurrent fetch operations
3. **Client-side Filtering** - Implementing search filters without server-side support
4. **Error State Management** - Providing meaningful feedback for various error conditions
5. **Dynamic Content Generation** - Creating HTML elements based on variable data

## Future Enhancements

- **Pagination** - Handle large result sets with pagination
- **Advanced Search** - Additional filters (rating, runtime, actors)
- **Favorites System** - Save favorite movies locally
- **Movie Recommendations** - Suggest similar movies
- **Performance Optimization** - Implement caching for repeated searches
- **UI Improvements** - Enhanced styling and animations

## Project Significance

This Movie API App marks a crucial milestone in my development journey as my first project involving external API integration. It demonstrates the transition from static web pages to dynamic, data-driven applications and showcases fundamental skills required for modern web development.

## About Road to Hire

This project was developed as part of the Road to Hire apprenticeship program, focusing on practical API integration skills and modern JavaScript development techniques.

## License

This project is for educational and portfolio purposes, demonstrating API integration skills learned during the Road to Hire apprenticeship program.

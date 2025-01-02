# Patchbay Contract Reviewer

A React-based web application designed to streamline music industry contract management. It enables users to upload contract documents (PDF/DOCX), leverages AI to automatically extract key terms (like deal type, artist name, and fee amounts), and provides an intuitive interface for reviewing and editing contract details before saving. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Demo Video](https://youtu.be/lZW4HeVaF3s)

> **Note**: AI assistance was used during development for debugging peer dependencies and creating the read-only/edit state of the ContractForm component.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Local Development
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm start
```

## Project Overview

### Component Structure
This application follows a modular component architecture:

- `App.tsx`: Root component handling layout and background
- `NavBar`: Navigation component with Patchbay branding/assets
- `FileUpload`: Main component managing file uploads and mocked AI processing
- `ContractForm`: Form component for displaying and editing extracted contract data

### State Management
- Utilizing React's built-in hooks (useState, useEffect) for local state management
- React Hook Form for form state and validation
- Uppy for file upload state management

### Error Handling
- Form-level validation using React Hook Form
- File upload restrictions and validation through Uppy
- Type safety with TypeScript interfaces and strict type checking

### UI/UX Design Decisions
- Dark theme inspired by Patchbay's homepage
- Clear visual hierarchy with consistent typography
- Interactive feedback during file processing
- Seamless transition between view and edit modes

## Future Improvements

### Short Term
1. Text wrapping for long file names in the contract form header
2. Implementation of ESLint and Prettier for code consistency
3. Comprehensive test coverage using Jest and React Testing Library
4. Toast notifications for user feedback during key operations
5. Typing animation for extracted terms to enhance AI interaction feel
6. Responsive design to support various screen sizes
7. Enhanced error handling and validation:
   - Integration of Zod for runtime type validation
   - Schema validation for contract data
   - Improved error messages and handling

### Long Term
1. Performance optimization for large contract files
2. Accessibility improvements (WCAG compliance)
3. Integration with backend API
4. Cloud storage integration with Uppy:
   - Google Drive integration
   - Dropbox integration
   - OneDrive integration
5. Multiple file upload support:
   - Batch processing capability
   - Progress tracking with status bar
   - Queue management

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App


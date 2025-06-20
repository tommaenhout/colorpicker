# ColorPicker

## Project Overview

ColorPicker is a micro-frontend application built using React, TypeScript, and Module Federation. The application demonstrates how to effectively implement micro-frontend architecture, allowing independent development and deployment of frontend components.

### Architecture

The project consists of three main applications:

- **Host Application (`colorpicker`)**: The main container application that integrates and renders the remote micro-frontends.
- **Color List Micro-frontend (`colorlist`)**: A remote micro-frontend that provides a list of colors for selection.
- **Color Picker Micro-frontend (`picker`)**: A remote micro-frontend that provides the actual color picking functionality.

### Technical Stack

- **Framework**: React with TypeScript
- **Styling**: Bootstrap
- **Module Federation**: Using `@module-federation/vite` for micro-frontend architecture
- **Build Tool**: Vite

### Port Configuration

- Host (`colorpicker`): http://localhost:5174
- Color List Remote (`colorlist`): http://localhost:3001
- Color Picker Remote (`picker`): http://localhost:3002

## Getting Started

### Installation

To install all dependencies for the project, run the following commands:

```bash
# Install dependencies for each application
cd colorlist && npm i && cd .. && cd colorpicker && npm i && cd .. && cd picker && npm i && cd ..
```

### Running the Application

To run the applications, follow these steps:

1. Start the Color List Remote:
```bash
# Navigate to the colorlist directory and run the development server
cd colorlist && npm start
```

2. Start the Color Picker Remote:
```bash
# Navigate to the picker directory and run the development server
cd picker && npm start
```

3. Start the Host Application:
```bash
# Navigate to the colorpicker directory and run the development server
cd colorpicker && npm start
```

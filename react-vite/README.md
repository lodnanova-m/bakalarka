# Running the React Application

Follow these instructions to get the application running on your local machine for development and testing purposes.

## Prerequisities
Before you begin, ensure you have the following installed on your system:
* Node.js: The runtime environment required to run the application. Download and install from Node.js website.
* pnpm: The package manager used to install and manage the application's dependencies.

## Installation
1. Install pnpm by running:
```console
npm install -g pnpm
```
2. Install dependencies
```console
pnpm install
```

## Running the Application
3. Run the Application:
```console
pnpm run dev
```
This command will start a local development server. Open your web browser and navigate to http://localhost:3000 to view the application.

# Rendering in Vite: Client-Side vs. Server-Side
Vite offers flexible setup options for React applications, including both client-side rendering (CSR) and server-side rendering (SSR). By default, applications created with Vite utilize client-side rendering. This means that the JavaScript code is executed in the browser, and the DOM is dynamically generated as the application loads.
## Client-Side Rendering and Web Crawlers
While client-side rendering can offer dynamic and responsive user experiences, it presents challenges for web crawlers. 
This is because the initial HTML file served to the client does not contain the actual content of the page. 
Instead, it's populated dynamically as the JavaScript executes. Web crawlers, especially those that do not execute JavaScript, will see a largely empty HTML document. 
This can negatively impact SEO (Search Engine Optimization): Search engines may not index the content of the page accurately, as they rely on the initial HTML content to understand and rank pages.

## Server-Side Rendering with Vite
To minitgate these issues, Vite supports setting up server-side rendering. SSR generates the initial HTMl on the server, including the page's content, and sends this fully formed HTML to the client. This approach ensures that web crawlers and social media bots can access the page's content without needing to execute JavaScript, improving SEO and shareability.
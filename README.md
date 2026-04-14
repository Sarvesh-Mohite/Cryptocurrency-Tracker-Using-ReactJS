# 🪙 Cryptocurrency Tracker

A sleek, dark-themed React application that displays real-time exchange rates for popular cryptocurrencies (Bitcoin, Ethereum, Litecoin, and XMR) in both USD and Euro.

## 🚀 Features

  * **Real-time Data:** View live price updates for major digital assets.
  * **Multi-Currency Support:** Compare values in both **USD** and **EURO** simultaneously.
  * **Modern UI:** A clean, neon-accented dark mode interface optimized for readability.
  * **Component-Based Architecture:** Built with reusable React components for scalability.

-----

## 📂 Project Structure

The project follows a standard React directory structure with modular components:

```text
src/
├── components/
│   ├── CryptocurrencyTracker/   # Main container component
│   ├── CryptocurrenciesList/    # Logic for mapping through the coin data
│   └── CryptocurrencyItem/      # Individual row component for each coin
├── App.js                       # Root component
├── index.js                     # Entry point
└── App.css                      # Global styles
```

-----

## 🛠️ Tech Stack

  * **Frontend:** React.js
  * **Styling:** CSS3 (Flexbox/Grid)
  * **Icons:** Custom crypto logos
  * **Tooling:** Create React App

-----

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

  * **Node.js** (v14.0.0 or higher)
  * **npm** or **yarn**

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Sarvesh-Mohite/Cryptocurrency-Tracker-Using-ReactJS.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd cryptocurrency-tracker
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    npm install react-loader-spinner
    ```

4.  **Start the development server:**

    ```bash
    npm start
    ```

    The app will open automatically at [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000).

-----

## 🧩 Components Overview

### `CryptocurrencyTracker`

The top-level component that manages the application state and fetches data from the crypto API.

### `CryptocurrenciesList`

Receives the list of coins as props and renders the table header along with the list of items.

### `CryptocurrencyItem`

Displays specific details for a single cryptocurrency:

  * Coin Logo & Name
  * Price in USD
  * Price in EURO

-----

## 🎨 Design System

  * **Background:** Deep Black/Navy (`#000000`)
  * **Accents:** Cyan/Electric Blue for borders and titles.
  * **Typography:** Bold, sans-serif fonts for high-contrast data visualization.

-----

##SCREENSHOT:
<img width="1784" height="1079" alt="Screenshot 2026-04-14 142953" src="https://github.com/user-attachments/assets/21b88b79-9887-4876-af00-1b75ccf21b87" />


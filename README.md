# Portfolio Website

A modern, responsive, and interactive developer portfolio built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/).

## 🚀 Features

-   **Modern Tech Stack**: Built with Next.js 14 and React 18.
-   **Responsive Design**: Fully responsive UI tailored for all devices (Mobile, Tablet, Desktop).
-   **Animations**: Smooth page transitions and element animations using Framer Motion.
-   **Dynamic Content**: Easy configuration via a central `portfolio.config.ts` file.
-   **Contact Form**: Functional contact form powered by [Resend](https://resend.com/).
-   **Fast Performance**: Optimized fonts (local loading), images (Next/Image), and code splitting.
-   **SEO Friendly**: Optimized metadata for better search engine visibility.

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Email**: [Resend](https://resend.com/)
-   **Font**: Google Fonts (Poppins & Rubik) - Locally hosted for performance.

## ⚡ Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Rohan-Shedage/Personal-Portfolio.git
    cd Personal-Portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**:
    Create a `.env.local` file in the root directory and add your Resend API key:
    ```env
    RESEND_API_KEY=your_resend_api_key_here
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ⚙️ Configuration

You can easily update the content without touching the code. Open `src/config/portfolio.config.ts` to update:

-   Personal Information (Name, Bio, Location)
-   Social Links (GitHub, LinkedIn, Twitter)
-   Skills & Tools
-   Projects
-   Education
-   Experience

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The output will be optimized and ready for deployment.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

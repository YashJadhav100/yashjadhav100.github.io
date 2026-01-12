```markdown
# 🚀 Yash Jadhav - Data Science & Systems Engineer Portfolio

A modern, high-performance, single-page portfolio website built to showcase a career in Data Science, AI/ML, and Systems Engineering. This project features a responsive dark-themed design with glassmorphism effects, interactive animations, and a focus on content accessibility.

🔗 **Live Demo:** [yashjadhav100.github.io](https://yashjadhav100.github.io) *(Replace with your actual link if different)*

## ✨ Features

* **🎨 Modern UI/UX:** Dark mode aesthetic with "Glassmorphism" cards and a dynamic background grid.
* **⚡ Tailwind CSS:** Styled using the Tailwind CLI (via CDN for simplicity) with custom color configurations.
* **🔦 Spotlight Effect:** Interactive mouse-tracking spotlight hover effects on project and education cards.
* **📂 Project Filtering:** JavaScript-based filtering system to toggle between AI/Data, Full Stack, and Automation projects.
* **📱 Fully Responsive:** Optimized layout for desktops, tablets, and mobile devices with a custom mobile navigation menu.
* **✨ Custom Animations:**
    * Infinite scrolling tech stack banner.
    * Floating background "blobs".
    * Smooth scroll navigation.
    * Fade-in entrance animations.

## 🛠️ Tech Stack

* **Core:** HTML5, CSS3, Vanilla JavaScript.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN).
* **Icons:** [FontAwesome 6](https://fontawesome.com/).
* **Typography:** [Google Fonts](https://fonts.google.com/) (Inter, Space Grotesk, JetBrains Mono).

## 📂 Project Structure

The project is contained within a single file structure for ease of deployment:

```text
/
├── index.html          # Main portfolio file containing HTML, CSS, and JS
├── assets/
│   └── Yash_Jadhav_Resume.pdf  # Your resume file linked in the nav
└── README.md           # Project documentation

```

## 🚀 Getting Started

### Prerequisites

You do not need to install Node.js or any build tools. This project runs directly in the browser.

### Installation

1. **Clone the repository:**
```bash
git clone [https://github.com/YashJadhav100/yashjadhav100.github.io.git](https://github.com/YashJadhav100/yashjadhav100.github.io.git)

```


2. **Open the file:**
Simply double-click `index.html` to open it in your default web browser.

## ⚙️ Customization Guide

### 1. Changing Colors & Fonts

The Tailwind configuration is embedded directly in the `<head>` of `index.html`. You can modify the brand colors here:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    cyan: '#00eaff', // Primary accent color
                    dark: '#020617', // Background color
                    // ... other colors
                }
            }
        }
    }
}

```

### 2. Updating Content

* **Experience:** Located in the `<section id="experience">`. Update the `<h3>` (Role) and `<p>` (Company) tags.
* **Projects:** Located in `<section id="projects">`. Each project is a `<div>` with the class `project-card`.
* *Important:* When adding a new project, ensure you add the correct `data-category` attribute (e.g., `data-category="ai"` or `data-category="web"`) so the filter buttons work correctly.


* **Education:** Located in `<section id="education">`.

### 3. Adding/Removing Skills in Banner

Look for the `` section. You need to update the list of icons/text in **both** `div` containers (the original and the duplicate) to ensure the infinite scroll remains seamless.

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome!

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Yash Jadhav** *MS CS @ Syracuse University* [LinkedIn](https://linkedin.com/in/yashvjadhav) | [GitHub](https://github.com/YashJadhav100)

```

```

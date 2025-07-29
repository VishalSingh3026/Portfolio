// Typed.js initialization for animated text
var typed = new Typed('#element', {
  strings: ['Web Developer', 'Data Scientist', 'Web Developer', 'Data Scientist'],
  typeSpeed: 50,
});

// Theme toggle functionality
let darkMode = true;

function toggleTheme() {
  darkMode = !darkMode;
  
  // Toggle the light-mode class on the root element
  const root = document.documentElement;
  
  const polygon = document.getElementById('polygon');
  const polyline = document.getElementById('polyline');
  const line = document.getElementById('line');
  const modeText = document.querySelector('.toggle-button-container').nextElementSibling.children[1];
  const toggleIcon = document.querySelector('.toggle-button-container');
  const labelSpan = toggleIcon.nextElementSibling;

  if (darkMode) {
    // DARK MODE
    root.classList.remove('light-mode');
    
    // SVG morphing for dark mode with white stroke
    polygon.setAttribute("points", "21.82 29.26 38.09 29.26 38.09 59.74 21.82 59.74 17.46 39.46 21.82 29.26");
    polygon.setAttribute("stroke", "white");
    polyline.setAttribute("points", "17.46 39.46 32.63 39.46 38.09 59.74");
    polyline.setAttribute("stroke", "white");
    line.setAttribute("x1", "38.09");
    line.setAttribute("y1", "29.26");
    line.setAttribute("x2", "32.63");
    line.setAttribute("y2", "39.46");
    line.setAttribute("stroke", "white");
    modeText.textContent = 'Dark';
    
    // Reset rotation to default -10deg for dark mode
    toggleIcon.style.transform = 'rotate(-10deg)';
    labelSpan.style.transform = 'rotate(-10deg)';
  } else {
    // LIGHT MODE
    root.classList.add('light-mode');
    
    // SVG morphing for light mode with dark stroke
    polygon.setAttribute("points", "21.82 29.26 38.09 29.26 38.09 59.74 21.82 59.74 17.46 49.46 21.82 29.26");
    polygon.setAttribute("stroke", "#1C1C1E");
    polyline.setAttribute("points", "17.46 49.46 31.00 49.46 38.09 59.74");
    polyline.setAttribute("stroke", "#1C1C1E");
    line.setAttribute("x1", "38.09");
    line.setAttribute("y1", "29.26");
    line.setAttribute("x2", "31.00");
    line.setAttribute("y2", "49.46");
    line.setAttribute("stroke", "#1C1C1E");
    modeText.textContent = 'Light';
    
    // Add +10deg rotation for light mode (total 0deg)
    toggleIcon.style.transform = 'rotate(10deg)';
    labelSpan.style.transform = 'rotate(10deg)';
  }
}

// Contact form submission handler
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      mobile: form.mobile.value,
      subject: form.subject.value,
      message: form.message.value
    };

    try {
      const res = await fetch("https://portfolio-backend-rust-six.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ " + data.message);
        form.reset();
      } else {
        alert("❌ Error: " + (data.error || "Something went wrong"));
      }
    } catch (error) {
      alert("❌ Error: Network error occurred");
      console.error('Contact form error:', error);
    }
  });
});

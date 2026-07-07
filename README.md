Markdown
# Sequencer UI Mockup

A tactile, hardware-inspired UI mockup featuring a 16x4 button grid. This project focuses on CSS-driven 3D depth, utilizing gradients and box-shadow layering to simulate physical, rubber-pad synth controllers within a machined gunmetal chassis.

## Features
- **Tactile Interface:** Buttons feature distinct hover and active states.
- **Toggle Persistence:** Uses JavaScript to maintain "recessed" (on/off) states for each button.
- **Prototyping Grid:** Responsive grid layout generated dynamically via JavaScript for easy maintenance.
- **Physical Aesthetics:** Simulated brushed metal chassis with recessed control panels and beveled borders.

## Technology Stack
- **HTML5:** Semantic structure.
- **CSS3:** Flexbox and CSS Grid for layout; linear gradients and multi-layered box-shadows for 3D realism.
- **Vanilla JavaScript:** DOM manipulation for dynamic button generation and state management.

## File Structure
```text
/
├── index.html          # Main application entry point
├── css/
│   └── style.css       # Visual styling and component definitions
└── js/
    └── script.js       # Logic for grid generation and toggle interactions

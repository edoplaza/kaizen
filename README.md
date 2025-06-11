# React Three Fiber + Vite Project
A streamlined setup for building performant, interactive 3D scenes using React Three Fiber (R3F) and Vite.

## Getting Started

1️⃣ Install dependencies:

npm install

2️⃣ Run the development server:

npm run dev

3️⃣ Build for production:

npm run build

---

## How React and Three.js Communicate

This project integrates React and Three.js seamlessly using React Three Fiber (R3F), a React renderer for Three.js. Key aspects of this integration include:

✅ Declarative State Management: React’s declarative state determines properties such as object visibility, color, and animation speed.  
✅ Component-Based Scene Composition: R3F converts React components (like Sphere and Cube) directly into Three.js objects.  
✅ Dynamic Updates: R3F’s useFrame hook executes on every render frame, enabling dynamic animations and real-time updates driven by React state or refs.  
✅ Ref Forwarding: forwardRef is used to directly access underlying Three.js objects (e.g., meshes, groups) for runtime data collection or direct manipulation.  
✅ Data Flow: React state feeds props into R3F components, which update the Three.js scene graph and render to the WebGL canvas.  
✅ Declarative and Imperative Blend: By combining React’s declarative paradigm with Three.js’s imperative rendering, this project maintains flexibility and ensures high performance.m.

Eduardo Plaza

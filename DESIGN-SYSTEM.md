# Antigravity Design System for SAP

> **Objective**: Bridge the gap between robust SAP enterprise functionality and world-class "Antigravity" visual design.

## 📐 Core Principles
1. **Weightlessness**: Avoid heavy borders. Use shadows and air (white space) to define containers.
2. **Spatial Hierarchy**: Elements that are more important should "float" higher (more shadow/blur).
3. **Motion with Purpose**: Transitions must be smooth but fast. GSAP is our core engine for this.
4. **Contextual Glass**: Use backdrop-filters to maintain context while focusing on a modal or panel.

## 🎨 Token Palette
- **Base Glass**: `rgba(255, 255, 255, 0.6)`
- **Border Glass**: `1px solid rgba(255, 255, 255, 0.18)`
- **Blur**: `12px`
- **Shadow (Soft)**: `0 8px 32px 0 rgba(31, 38, 135, 0.15)`

## 🎬 Animation Presets (GSAP)
```javascript
// Floating Entrance
gsap.from(".card", { 
  y: 30, 
  opacity: 0, 
  duration: 0.8, 
  ease: "power2.out", 
  stagger: 0.1 
});

// Hover Lift
gsap.to(".element", { 
  scale: 1.05, 
  z: 10, 
  boxShadow: "0 20px 40px rgba(0,0,0,0.1)", 
  duration: 0.3 
});
```

## 🛠️ Implementation in Fiori
- Use **Custom CSS** in `manifest.json`.
- Inject **GSAP** via CDN or local library if the Basis team allows.
- Override standard SAP Horizon variables where necessary.

# 🖼️ Sora-Inspired Media Generator

A React-based front-end project inspired by OpenAI's Sora interface. This app allows users to generate images/videos from prompts, explore media in various aspect ratios, and interact with them through editing and variations.

## 🚀 Features

### 1. Media Display Interface

- Switch between 9:16 (vertical), 1:1 (square), and 16:9 (wide) aspect ratios.
- Responsive layout for both image and video rendering.
- Smooth view switching (preloaded transitions).

### 2. Prompt-to-Image/Video Generation

- Input prompt to generate content using mocked data.
- Select:
  - 📷 Type: `image` or `video`
  - 🖼️ Aspect Ratio: `2:3`, `1:1`, `16:9`, etc.
  - 🎭 Variations: e.g., `1v`, `4v` (Currently Not working)
  - 📏 Resolution (only for videos)
  - ⏱️ Duration (only for videos)

### 3. Video Handling

- Autoplay.
- Loop and mute for modern feel.

### 4. Explore Tab (AdFeed)

- Infinite scroll layout.
- Grid view with mixed media (image/video).
- Beautiful adaptive layout like Instagram Reels or Sora.

### 5. Media Interaction

- Click to enlarge or view fullscreen.
- Edit prompt in a modal and regenerate media.
- State maintained via React state and/or `localStorage`.

---

## 🧱 Tech Stack

- **React** (Frontend)
- **Tailwind CSS** (Styling)
- **Lucide-react** (Icons)
- **Mock data** Support with Mock data
- **LocalStorage** for persistence

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Allowed Prompts

- "A cute animated poop emoji character walking on a sidewalk",
- "Ethereal figure in glowing light, mystical atmosphere",
- "Portrait of an elderly man in vibrant green jacket",
- "Serene mountain landscape with misty peaks",
- "Modern minimalist portrait photography",
- "Funny animal short film trailer",
- "Cyberpunk city street at night with neon lights",
- "Animated fantasy world adventure",

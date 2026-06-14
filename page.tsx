@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap');
@import "tailwindcss";

@theme {
  --color-primary: oklch(0.48 0.12 5);
  --color-primary-foreground: oklch(1 0 0);
  --color-background: oklch(0.995 0.004 60);
  --color-foreground: oklch(0.16 0.02 40);
  --color-card: oklch(1 0 0);
  --color-card-foreground: oklch(0.16 0.02 40);
  --color-muted: oklch(0.94 0.01 55);
  --color-muted-foreground: oklch(0.52 0.02 45);
  --color-accent: oklch(0.94 0.03 15);
  --color-accent-foreground: oklch(0.38 0.08 5);
  --color-border: oklch(0.88 0.01 55);
  --color-secondary: oklch(0.96 0.01 55);
  --color-secondary-foreground: oklch(0.16 0.02 40);
  --radius: 0.75rem;
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4 {
    font-family: 'Playfair Display', serif;
  }
}

.font-heading {
  font-family: 'Playfair Display', serif;
}

html {
  scroll-behavior: smooth;
}

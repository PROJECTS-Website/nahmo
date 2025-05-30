
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom purple palette based on the provided image
				purple: {
					darkest: '#1c202c', // Darkest purple/almost black
					dark: '#31323c',    // Dark purple
					primary: '#60519b', // Main purple
					light: '#bfc0d1'    // Light purple/lavender
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'heartbeat': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						textShadow: '0 0 10px rgba(96, 81, 155, 0.3), 0 0 20px rgba(96, 81, 155, 0.2)'
					},
					'50%': { 
						textShadow: '0 0 15px rgba(96, 81, 155, 0.8), 0 0 30px rgba(96, 81, 155, 0.4)'
					}
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'border-glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(96, 81, 155, 0.3)' },
					'50%': { boxShadow: '0 0 15px rgba(96, 81, 155, 0.8)' }
				},
				'cursor-blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				'shine': {
					from: { left: '-100%' },
					to: { left: '100%' }
				},
				'spotlight': {
					'0%': {
						opacity: '0.1',
						transform: 'translate(-50%, -50%) scale(0.5)'
					},
					'50%': {
						opacity: '0.3',
						transform: 'translate(-30%, -30%) scale(1)'
					},
					'100%': {
						opacity: '0.1',
						transform: 'translate(-50%, -50%) scale(0.5)'
					}
				},
				'pulse-slow': {
					'0%, 100%': { 
						opacity: '0.8',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.05)'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'slide-in': 'slide-in 0.4s ease-out forwards',
				'border-glow': 'border-glow 2s infinite',
				'cursor-blink': 'cursor-blink 1s infinite',
				'spotlight': 'spotlight 15s ease infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
			},
			fontFamily: {
				'space': ['"Space Grotesk"', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif']
			},
			backgroundImage: {
				'purple-gradient': 'linear-gradient(135deg, #60519b, #1e202c)'
			},
			textShadow: {
				'glow': '0 0 10px rgba(96, 81, 155, 0.5), 0 0 20px rgba(96, 81, 155, 0.3)',
				'sm': '0 0 5px rgba(96, 81, 155, 0.3)'
			},
			boxShadow: {
				'glow': '0 0 15px rgba(96, 81, 155, 0.5)'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addUtilities }) {
			const newUtilities = {
				'.text-shadow-glow': {
					textShadow: '0 0 10px rgba(96, 81, 155, 0.5), 0 0 20px rgba(96, 81, 155, 0.3)'
				},
				'.text-shadow-sm': {
					textShadow: '0 0 5px rgba(96, 81, 155, 0.3)'
				},
				'.shadow-glow': {
					boxShadow: '0 0 15px rgba(96, 81, 155, 0.5)'
				}
			};
			addUtilities(newUtilities);
		}
	],
} satisfies Config;

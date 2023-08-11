import * as React from "react"

export function Cake({ ...props }) {
  return (
		<svg
			className="w-10 h-10 lg:w-14 lg:h-14 text-primary"
			fill="currentColor"
			viewBox="0 0 600 600"
			>
			<path d="M143.8 83.7c-12.1 12-15.2 17.5-15.2 27.2.1 12.9 8 23.8 19.9 27.6 22.2 6.9 42.8-13.8 35.9-36.1-1.6-5.2-3-7.2-12.8-17.2-14.6-14.8-14.3-14.7-27.8-1.5zm21.3 19.7c4.1 5.5 4 11.6 0 15.7-2.4 2.4-3.8 2.9-7.6 2.9-4 0-5.2-.5-8.1-3.4-2.8-2.8-3.4-4.2-3.4-7.6 0-3.7.6-4.8 5.7-10.1l5.6-5.9 2.5 2.2c1.4 1.3 3.8 4.1 5.3 6.2zM234.4 85.2c-9.8 10-11.2 12-12.8 17.2-3.3 10.4-.6 21.4 7 29 18.1 18.1 48.7 5.3 48.8-20.5 0-9.7-3.1-15.2-15.2-27.2-13.5-13.2-13.2-13.3-27.8 1.5zm25.6 25.3c0 7.3-4.4 11.5-12.1 11.5-5.8 0-9.9-4.2-9.9-10.2 0-4.7 1.3-7.2 6.9-13.1l3.6-3.8 5.8 6c4.8 5 5.7 6.5 5.7 9.6zM335.5 75.8c-4.4 2.7-18.3 17.8-20.7 22.6-1.4 2.6-2.3 6.7-2.6 11.4-.4 6.6-.2 7.8 2.7 13.7 5.5 11.1 15.8 17.1 27.7 16.2 20-1.5 32.3-22.5 23.9-40.6-1.6-3.4-5.6-8.5-10.8-13.8-11.3-11.6-14.3-13.1-20.2-9.5zm15.6 31.3c2.9 7.1-2.6 14.9-10.5 14.9-4.8 0-8-1.9-10.2-6.2-2.5-4.8-1.1-9.2 4.8-15.5l5.2-5.4 4.7 4.7c2.6 2.6 5.3 6 6 7.5z"/>
			<path d="M140.5 143.7c-1.1.3-3 1.4-4.2 2.6l-2.3 2v71.6l-26.7.3c-25.1.3-27.2.5-32.5 2.6-7.5 3-14.9 10.1-18.5 17.7l-2.8 6-.3 87.2-.3 87.3H28.7C.3 421 0 421.1 0 428.8c0 5.3.5 6.4 3.7 8.1 3.1 1.6 501.5 1.6 504.6 0 3.2-1.7 3.7-2.8 3.7-8.1 0-7.8-.1-7.8-30.7-7.8h-26.2l-.3-87.2-.3-87.3-2.7-5.7c-3-6.5-9.8-13.7-15.5-16.6-7-3.6-13.5-4.2-43.3-4.2h-29v-35.1c0-23.2-.4-35.7-1.1-37.1-2-3.7-6.9-4.8-21.6-4.8-7.6 0-15.5.5-17.5 1-6.9 2-6.8 1.4-6.8 40.7V220h-45V148.3l-2.6-2.4c-2.5-2.3-2.9-2.4-19.8-2.4-18.6 0-21.4.6-23.5 5.2-.7 1.6-1.1 13.7-1.1 36.8V220h-44v-34.5c0-39.1-.1-39.6-6.8-41.4-3.6-1.1-29.8-1.3-33.7-.4zm22.5 46.8V220h-12v-59h12v29.5zm92 0V220h-12v-59h12v29.5zm92 0V220h-13v-59h13v29.5zm82.7 50.1c6.1 4.5 7.3 7.7 7.3 18.9v10.3l-3.2 1.2c-1.8.7-7.4 5.5-12.4 10.7-8.8 9.1-9.1 9.3-13.7 9.3-4.5 0-4.8-.2-14.4-9.9-8.8-8.9-10.4-10.1-15.7-11.6-7.2-2.1-14.6-1.6-20.7 1.5-2.4 1.2-8.2 6.2-13 11.1-8.4 8.7-8.6 8.9-13.2 8.9-4.5 0-5.1-.3-10-5.7-13.2-14.5-17.1-16.8-28.7-16.8-9.9 0-14 2.2-25 13.6-8.3 8.5-8.8 8.9-13 8.9-4.2 0-4.8-.4-13.1-8.9-9.5-9.8-14-12.7-21.7-13.7-10.5-1.4-20.3 3.2-28.7 13.4-5.9 7.2-9 9.2-14 9.2-3.7 0-4.5-.6-12.5-8.9-4.7-4.9-10.5-9.8-12.9-11.1-6.1-3.1-13.4-3.6-20.7-1.5-5.3 1.5-6.9 2.7-15.7 11.6-9.6 9.7-9.9 9.9-14.4 9.9s-4.8-.2-13.7-9.3c-5-5.1-10.6-9.9-12.3-10.6l-3.3-1.3v-10c0-10.5.9-13.5 5.2-17.5 1.2-1.2 3.4-2.6 4.8-3.2 1.6-.6 61.5-.9 174.2-.8l171.7.2 2.8 2.1zm-277.8 54.3c10.9 11.3 15.1 13.5 25.1 13.6 10.1 0 14.3-2.3 25.1-13.5 8.5-8.9 8.6-9 13.4-9 4.9 0 5 .1 13.5 8.9 10.7 11.3 14.9 13.6 25 13.6 10 0 14.2-2.3 25.1-13.6 8.4-8.7 8.7-8.9 13.3-8.9 4.7 0 4.9.1 14.4 9.9 8.7 8.9 10.3 10.1 15.6 11.6 7.1 2.1 14.7 1.5 20.9-1.6 2.3-1.2 8-6.1 12.8-11 8.3-8.7 8.6-8.9 13.1-8.9 4.6 0 4.9.2 14.5 9.9 8.8 8.9 10.5 10.1 15.7 11.6 11.6 3.4 21.3.2 31.2-10.2l6.4-6.6V421H71V290.5l5.4 6c9.6 10.8 20.3 14.5 32.2 11 5.3-1.5 6.9-2.7 15.6-11.6 9.6-9.8 9.7-9.9 14.4-9.9 4.7 0 4.9.1 13.3 8.9z"/>
		</svg>
	)}
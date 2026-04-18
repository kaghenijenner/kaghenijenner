import '../index.css';
import Header from '../components/Header';
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'Kagheni Jenner | Software Engineer & Full Stack Developer',
  description:
    'Passionate Software Engineer from Uganda specializing in full-stack web, mobile, AI/ML, and cloud solutions. Available for hire.',
  keywords: [
    'Software Engineer', 'Full Stack Developer', 'React', 'Next.js', 'Node.js',
    'Uganda', 'Kagheni Jenner', 'Web Development', 'Mobile Development',
  ],
  openGraph: {
    title: 'Kagheni Jenner | Software Engineer & Full Stack Developer',
    description:
      'Passionate Software Engineer from Uganda specializing in full-stack web, mobile, AI/ML, and cloud solutions. Available for hire.',
    url: 'https://kaghenijenner.com',
    siteName: 'Kagheni Jenner Portfolio',
    images: [
      {
        url: 'https://jennermaxim.com/jennermaxim.png',
        width: 800,
        height: 800,
        alt: 'Kagheni Jenner Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import ProfileCard from './ProfileCard';
import NavBar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const polygonStyle = {
    clipPath:
      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
  };

  return (
    <html lang="en">
      
      <body>
        <div id="main">
        <div className="relative isolate px-6 lg:px-8">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative" style={{ left: 'calc(50% - 11rem)', aspectRatio: '1155/678', width: '36.125rem', transform: 'translateX(-50%)', backgroundImage: 'linear-gradient(to top right, #0284c7, #7dd3fc)', opacity: '0.3', left: 'calc(50% - 30rem)', width: '72.1875rem' }}>
          {/* Content */}
        </div>
      </div>

      <div className="flex-container">
      <ProfileCard/>
      <div className="side-card">
      <NavBar />
      <main>{children}</main>
      </div>
      </div>
      
      
      
      
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative" style={{ left: 'calc(50% + 3rem)', aspectRatio: '1155/678', width: '36.125rem', transform: 'translateX(-50%)', backgroundImage: 'linear-gradient(to top right, #0284c7, #7dd3fc)', opacity: '0.3', left: 'calc(50% + 36rem)', width: '72.1875rem' }}>
          {/* Content */}
        </div>
      </div>
    </div>
        </div>
      </body>
    </html>
  );
}




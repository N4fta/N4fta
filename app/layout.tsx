import type { Metadata } from "next";
import { FooterLink } from "@/app/types";
import "./globals.css";

const links: FooterLink[] = [
  {
    link: "https://github.com/N4fta",
    imageSrc: "/links/github-white.svg",
    alt: "Github Logo",
  },
  {
    link: "https://hub.docker.com/u/n4fta",
    imageSrc: "/links/docker-white.svg",
    alt: "Docker Logo",
  },
  {
    link: "https://open.spotify.com/user/z20cuq7qcix1zz2xzlxg6egzl?si=9ae67bb695c546e0",
    imageSrc: "/links/spotify-white.svg",
    alt: "Spotify Logo",
  },
];

export const metadata: Metadata = {
  title: "Neo Dev",
  description: "A WIP personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-container">
        {children}
        <footer className="footer-bar w-screen flex flex-col items-center ">
          <div className="flex gap-2 pb-0.5">
            {links.map((link: FooterLink) => {
              return (
                <a
                  className="p-2 rounded-full hover:bg-white/20 hover:scale-110 default-transition"
                  key={link.link}
                  href={link.link}
                  target="_blank"
                >
                  <img
                    src={link.imageSrc}
                    alt={link.alt}
                    className="size-12 opacity-75 hover:opacity-80 default-transition"
                  />
                </a>
              );
            })}
          </div>
          <div className="text-xs pb-0.5 text-white/75">© 2025 Nuno Dias</div>
        </footer>
      </body>
    </html>
  );
}

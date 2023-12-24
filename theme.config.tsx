import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s - OnchainMagic Documentation",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Token Bound" />
      <meta
        property="og:description"
        content="Open-source tooling for uploading imagination"
      />
    </>
  ),
  logo: (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/onchainmagiclogo.jpeg"
      alt="onchainmagic logo"
      height={50}
      width={50}
    />
  ),
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 0,
    toggleButton: true,
  },
  project: {
    link: "https://github.com/SweetmanTech/onchain-magic-docs",
  },
  docsRepositoryBase: "https://github.com/SweetmanTech/onchain-magic-docs",
  footer: {
    text: `OnchainMagic ${new Date().getFullYear()}`,
  },
  primaryHue: 199,
  banner: {
    key: "Download",
    text: (
      <a href="https://onchainmagic.xyz" target="_blank" rel="noreferrer">
        🎉 OnchainMagic is available in early beta! Download the app →
      </a>
    ),
  },
};

export default config;

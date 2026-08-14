declare global {
  interface Window {
    utag_data: any;
    tealium_data2track: any;
    utag: any;
    TealiumConsentPrivacyLink: () => void;
  }
}

export default function RootLayout({
  children,
  navigation,
  footer,
}: {
  children: React.ReactNode;
  navigation: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div>
      {navigation}
      {children}
      {footer}
      <div id="portal"></div>
    </div>
  );
}

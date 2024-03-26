import Info from "@/app/components/Info";

export default function RootLayout({ children }) {
  return (
    <>
      <Info page="Education.">
        <p>
          This is a longer sample text containing twenty-eight example words for
          you to see how it looks in the layout.
        </p>
      </Info>
      {children}
    </>
  );
}

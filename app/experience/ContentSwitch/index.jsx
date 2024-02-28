"use client";
import Toggle from "@/app/components/Toggle";

const ContentSwitch = ({}) => {
  // const { experience } = useExperience();
  return (
    <Toggle
      firstOpt={{ value: "companies", content: "Companies" }}
      lastOpt={{ value: "education", content: "Education" }}
      onChange={() => console.log("hola")}
      value={"companies"}
    />
  );
};

export default ContentSwitch;

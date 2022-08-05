import Image from "next/image";

const Page = () => {
  return (
    <Image
      width={300}
      height={150}
      src={"/logo.svg"}
      alt={"Thriveworks Counseling - Logo"}
    />
  );
};

export default Page;

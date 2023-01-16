import Image from "next/image";

const Loading = () => (
  <div style={{ textAlign: "center" }}>
    <Image src="./spinner.svg" height="50" alt="Loading" />
  </div>
);

export default Loading;

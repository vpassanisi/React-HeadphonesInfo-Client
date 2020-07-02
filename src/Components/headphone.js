import React from "react";

const Headphone = (props) => {
  const { headphone } = props;

  const makeTextFile = () => {
    const data = new Blob([headphone.cc1_2], {
      type: "text/plain",
      endings: "native",
    });

    const textFile = window.URL.createObjectURL(data);

    return textFile;
  };

  return (
    <div className="bg-white rounded shadow m-4 p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <img
        className="h-auto w-auto mx-auto my-auto"
        src={headphone.picture_URL}
        alt=""
      />

      <div className="border-2 border-black rounded shadow mt-2 p-4">
        <div className="font-medium">
          Make: <div className="font-hairline inline">{headphone.make}</div>
        </div>
        <div className="font-medium">
          Model: <div className="font-hairline inline">{headphone.model}</div>
        </div>
        <div className="font-medium">
          Driver: <div className="font-hairline inline">{headphone.driver}</div>
        </div>
        <div className="font-medium">
          Ergonomics:{" "}
          <div className="font-hairline inline">{headphone.erg} ear</div>
        </div>
        <div className="font-medium">
          Impedance:{" "}
          <div className="font-hairline inline">{headphone.impedance}Ω</div>
        </div>
        <div className="font-medium">
          Sensitivity:{" "}
          <div className="font-hairline inline">{headphone.sensitivity} dB</div>
        </div>
        <a
          className="bg-blue-500 rounded inline-block w-full text-center p-1 text-white mt-2 shadow"
          href={makeTextFile()}
          download={`${headphone.model} - CC1.2 + House.txt`}
        >
          download CC1.2
        </a>
      </div>
    </div>
  );
};

export default Headphone;

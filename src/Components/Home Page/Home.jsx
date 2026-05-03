import React from "react";

function Home() {
  let counter = 0;
  let myValues = new Array();

  const myCheckBox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      myValues.push(value);
    } else {
      myValues = myValues.filter((item) => item !== value);
    }
    console.log(myValues);
  };
  const myMethod = (e) => {
    // let myArray = Array.from(e.target.selectedOptions);
    let myArray = [...e.target.selectedOptions].map((item) => item.value);
    // myArray=myArray.map(item => item.value)
    // console.log(myArray);
  };

  return (
    <div className=" p-10">
      <form action="">
        <select
          onChange={myMethod}
          id=""
          multiple
          className="border-2 border-red-700"
        >
          <option value="Kabul">Kabul</option>
          <option value="Herat">Herat</option>
          <option value="Wardak">Wardak</option>
          <option value="Laghman">Laghman</option>
          <option value="Kundoz">Kundoz</option>
          <option value="Helamand">Helamand</option>
          <option value="Khost">Khost</option>
        </select>
        <br />
        <br />
        <br />
        <br />
        {/* here is the checkboxes status and it's value */}
        <label htmlFor="gender">Gender: </label> <br />
        <label htmlFor="male1" className="text-red-700 px-2 select-none">
          check1
        </label>
        <input
          type="checkbox"
          value={`check1`}
          id="male1"
          onChange={myCheckBox}
        />
        <br />
        <label htmlFor="male2" className="text-red-700 px-2 select-none">
          check2
        </label>
        <input
          type="checkbox"
          value={`check2`}
          id="male2"
          onChange={myCheckBox}
        />
        <br />
        <label htmlFor="male3" className="text-red-700 px-2 select-none">
          check3
        </label>
        <input
          type="checkbox"
          value={`check3`}
          id="male3"
          onChange={myCheckBox}
        />
        <br />{" "}
        <label htmlFor="male4" className="text-red-700 px-2 select-none">
          check4
        </label>
        <input
          type="checkbox"
          value={`check4`}
          id="male4"
          onChange={myCheckBox}
        />
        <br />
      </form>
    </div>
  );
}

export default Home;

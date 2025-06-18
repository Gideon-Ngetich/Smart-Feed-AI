import React, { useState } from "react";
import { Button, Modal } from "antd";
import axios from "axios";

const Cattle = ({ open, onOk, onCancel }) => {
  const [cattleName, setCattleName] = useState("");
  const [cattleBreed, setCattleBreed] = useState("");
  const [cattleWeight, setCattleWeight] = useState("");
  const [pregnancyStatus, setPregnancyStatus] = useState("");
  //   const [cattlePicture, setCattlePicture] = useState(null);
  //   const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [cattleAge, setCattleAge] = useState("");

  //   const handleImageChange = (e) => {
  //     const file = e.target.files[0];
  //     setCattlePicture(file);

  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         setImagePreviewUrl(reader.result);
  //       };
  //       reader.readAsDataURL(file);
  //     } else {
  //       setImagePreviewUrl("");
  //     }
  //   };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cattleName", cattleName);
    formData.append("breed", cattleBreed);
    formData.append("age", cattleAge);
    formData.append("weight", cattleWeight);
    formData.append("expectancy", pregnancyStatus);
    // if (cattlePicture) {
    //   formData.append("cattlePicture", cattlePicture);
    // }

    // Here you can send the formData to your server

    const response = await axios.post(
      "https://developer.kristec.co.ke/api/addnewcattle",
      formData
    );

    if (!response.success) {
      console.error("Failed to submit cattle data");
      return;
    }

    console.log("Form submitted with data:", Object.fromEntries(formData));
    alert("Cattle data submitted!");
  };

  return (
    <>
      <Modal
        title="Any new cattle?"
        open={open}
        onOk={handleSubmit}
        onCancel={onCancel}
      >
        <div
          id="addCattleFormContainer"
          className="p-4 bg-white rounded shadow max-w-md mx-auto"
        >
          <h2 className="text-xl font-semibold mb-4">Add New Cattle</h2>
          <form id="addCattleForm" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="cattleName">Cattle Name:</label>
              <input
                type="text"
                id="cattleName"
                name="cattleName"
                value={cattleName}
                onChange={(e) => setCattleName(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="cattleAge">Age:</label>
              <input
                type="text"
                id="cattleAge"
                name="cattleAge"
                value={cattleAge}
                onChange={(e) => setCattleAge(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="cattleBreed">Breed:</label>
              <input
                type="text"
                id="cattleAge"
                name="cattleAge"
                value={cattleBreed}
                onChange={(e) => setCattleBreed(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="cattleBreed">Weight:</label>
              <input
                type="text"
                id="cattleweight"
                name="cattleweight"
                value={cattleWeight}
                onChange={(e) => setCattleWeight(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* <div className="form-group mb-3">
              <label htmlFor="cattlePicture">Upload Picture:</label>
              <input
                type="file"
                id="cattlePicture"
                name="cattlePicture"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {imagePreviewUrl && (
                <div id="imagePreview" className="mt-2">
                  <img
                    src={imagePreviewUrl}
                    alt="Preview"
                    className="w-32 h-32 object-cover border rounded"
                  />
                </div>
              )}
            </div> */}

            <div className="form-group mb-4">
              <label htmlFor="pregnancyStatus">Pregnancy Status:</label>
              <select
                id="pregnancyStatus"
                name="pregnancyStatus"
                value={pregnancyStatus}
                onChange={(e) => setPregnancyStatus(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">--Select Status--</option>
                <option value="Pregnant">Pregnant (Mjamzito)</option>
                <option value="Open">Open / Not Pregnant (Tupu)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Submit
            </button>
          </form>
        </div>
        {/* <p>{modalText}</p> */}
      </Modal>
    </>
  );
};
export default Cattle;

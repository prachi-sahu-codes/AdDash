import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const adButtonLabels = [
  "Learn More",
  "Shop Now",
  "Get Started",
  "Subscribe",
  "Book Now",
  "Explore",
  "Contact Us",
  "Join Now",
  "Sign Up",
  "Try for Free",
];

export const AdForm = ({ adType, setShowModal, isMedia }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    heading1: "",
    heading2: "",
    description: "",
    landingUrl: "",
    portraitUrl: "",
    squareUrl: "",
    videoUrl: "",
    buisnessName: "",
    buttonLabel: "",
    websiteUrl: "",
  });

  const submitHandler = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate(-1);
    }, 600);
  };

  return (
    <form className="p-5 pt-1" onSubmit={(e) => e.preventDefault()}>
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 text-dark-text">
        <div>
          <label htmlFor="head1" className="block">
            Heading 01
          </label>
          <input
            id="head1"
            type="text"
            placeholder="Add a heading that would make users interested"
            className="w-full my-3 border-2 rounded py-2 px-3 mb-5 focus:outline-none focus:border-custom-blue"
            onClick={(e) =>
              setFormData((prev) => ({ ...prev, heading1: e.target.value }))
            }
          />

          <label htmlFor="head2" className="block">
            Heading 02
          </label>
          <input
            id="head2"
            type="text"
            placeholder="Add a heading that would make users interested"
            className="w-full my-3 border-2 rounded py-2 px-3 mb-5 focus:outline-none focus:border-custom-blue"
            onClick={(e) =>
              setFormData((prev) => ({ ...prev, heading2: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="desc" className="block">
            Description
          </label>
          <textarea
            id="desc"
            placeholder="Add primary text to help users understand more about your products, services or offers"
            className="flex-1 w-full my-3 border-2 rounded py-2 px-3 mb-5 resize-none col-start-2 focus:outline-none focus:border-custom-blue"
            onClick={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </div>
      </div>

      {isMedia && (
        <div className={`lg:grid lg:grid-cols-3 lg:gap-10 text-dark-text`}>
          <div>
            <label htmlFor="landingUrl" className="block">
              Landscape Marketing Image (1.9:1)
            </label>
            <input
              id="landingUrl"
              type="url"
              placeholder="Add the URL of the image you want to use for the ad"
              className="w-full my-3 border-2 rounded py-2 px-3 mb-5 focus:outline-none focus:border-custom-blue"
              onClick={(e) =>
                setFormData((prev) => ({ ...prev, landingUrl: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor="portraitUrl" className="block">
              Portrait Marketing Image (4:5)
            </label>
            <input
              id="portraitUrl"
              type="text"
              placeholder="Add the URL of the image you want to use for the ad"
              className="w-full my-3 border-2 rounded py-2 px-3 mb-5 focus:outline-none focus:border-custom-blue"
              onClick={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  portraitUrl: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <label htmlFor="squareUrl" className="block">
              Square Marketing Image (1:1)
            </label>
            <input
              id="squareUrl"
              type="text"
              placeholder="Add the URL of the image you want to use for the ad"
              className="w-full my-3 border-2 rounded py-2 px-3 mb-5 focus:outline-none focus:border-custom-blue"
              onClick={(e) =>
                setFormData((prev) => ({ ...prev, squareUrl: e.target.value }))
              }
            />
          </div>
        </div>
      )}
      {isMedia && (
        <div className="text-dark-text">
          <label htmlFor="videoUrl" className="block">
            Video URL
          </label>
          <input
            id="videoUrl"
            type="url"
            placeholder="Add the URL of the video you want to use for the ad"
            className="w-full my-3 border-2 rounded py-2 px-3 mb-5 focus:outline-none focus:border-custom-blue"
            onClick={(e) =>
              setFormData((prev) => ({ ...prev, videoUrl: e.target.value }))
            }
          />
        </div>
      )}

      <div className="lg:grid lg:grid-cols-2 lg:gap-10 text-dark-text">
        <div>
          <label htmlFor="businessName" className="block">
            Business Name
          </label>
          <input
            id="businessName"
            type="url"
            placeholder="Add your business name"
            className="w-full my-3 border-2 rounded py-2 px-3 mb-5 focus:outline-none focus:border-custom-blue"
            onClick={(e) =>
              setFormData((prev) => ({ ...prev, buisnessName: e.target.value }))
            }
          />
        </div>
        <div>
          <label>Button Label</label>
          <select
            id="buttonLabel"
            className={`w-full my-3 border-2 rounded py-2 px-3 mb-5 focus:outline-none focus:border-custom-blue ${
              formData.buttonLabel === "" ? "text-light-text" : ""
            }`}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, buttonLabel: e.target.value }))
            }
          >
            <option
              value=""
              disabled
              selected
              hidden
              className="text-light-text"
            >
              Select a label that best suits your ad
            </option>
            {adButtonLabels.map((btnLabel) => (
              <option
                key={btnLabel}
                value={btnLabel}
                className="text-dark-text"
              >
                {btnLabel}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="text-dark-text">
        <label htmlFor="websiteUrl" className="block">
          Website URL
        </label>
        <input
          id="websiteUrl"
          type="url"
          placeholder="Add the URL of the landing page you want to redirect users to"
          className="w-full my-3 border-2 rounded py-2 px-3 mb-5 focus:outline-none focus:border-custom-blue"
          onClick={(e) =>
            setFormData((prev) => ({ ...prev, websiteUrl: e.target.value }))
          }
        />
      </div>

      <div
        className={`flex flex-col mt-5 430px:mt-0 430px:flex-row 430px:justify-end gap-5 ${
          isMedia ? "" : "lg:pt-20"
        }`}
      >
        <button
          className="bg-bg-body hover:bg-gray-200 active:bg-bg-body text-dark-text py-2 px-14 text-sm font-semibold rounded border-2"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button
          type="submit"
          onClick={() => submitHandler()}
          className="bg-custom-blue text-white py-2 px-14 hover:bg-custom-blue-dark active:bg-custom-blue text-sm font-semibold rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

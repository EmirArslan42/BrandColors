import React from "react";
import { getContrastYIQ } from "@/helpers";
import { useContext } from "react";
import MainContext from "@/app/MainContext";
import Clipboard from "react-clipboard.js";
import toast from "react-hot-toast";

const Brand = ({ brand }) => {
  const { selectedBrands, setSelectedBrands, setCopied } =
    useContext(MainContext);
  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };
  return (
    <div
      className={`brand ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      } border-[1px] border-solid border-[#ddd] bg-[#fff] p-[15px] mb-3`}
    >
      <h5
        onClick={toggleSelected}
        className="cursor-pointer text-[18px] font-semibold mb-3"
      >
        {brand.title}
      </h5>
      <div className="!flex brand-colors">
        {brand.colors.map((color) => (
          <span
            onClick={() =>
              navigator.clipboard.writeText(color).then(() => {
                toast.dismiss(),
                //burada true değer ataması nedeiyle birçok hata verdi
                setCopied(color),
                  toast.success(`Copied ${color} to Clipboard`, {
                    duration: 3000,
                    position: "bottom-right",
                    style: {
                      background: "#333",
                      color: "#fff",
                    },
                  });
              })
            }
            style={{
              backgroundColor: `#${color}`,
              color: getContrastYIQ(color),
            }}
            className={`brand-span h-10 flex items-center justify-center text-[14px] font-medium text-white w-[70px] cursor-pointer ${
              selectedBrands.includes(brand.slug)
                ? "flex-1 indent-0"
                : "-indent-[9999px]"
            }`}
            key={Math.random() * 9999}
          >
            {color}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Brand;
